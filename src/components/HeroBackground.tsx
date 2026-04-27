'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Scroll velocity tracker ───────────────────── */
function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      const dt = Math.max(now - lastTime.current, 1);
      const dy = Math.abs(window.scrollY - lastY.current);
      setVelocity(Math.min(dy / dt, 5));
      lastY.current = window.scrollY;
      lastTime.current = now;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return velocity;
}

/* ── Soft-body blob shader material ────────────── */
const blobVertexShader = `
  uniform float uTime;
  uniform float uScrollVelocity;
  uniform float uSeed;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    float slowTime = uTime * 0.15;
    float stretch = 1.0 + uScrollVelocity * 0.3;
    
    float noise1 = snoise(position * 0.8 + vec3(slowTime + uSeed, 0.0, 0.0));
    float noise2 = snoise(position * 1.5 + vec3(0.0, slowTime * 0.7 + uSeed, 0.0));
    float noise3 = snoise(position * 2.5 + vec3(0.0, 0.0, slowTime * 0.5 + uSeed));
    
    float displacement = noise1 * 0.35 + noise2 * 0.15 + noise3 * 0.08;
    displacement *= stretch;
    
    vec3 newPosition = position + normal * displacement;
    
    vNormal = normalMatrix * normal;
    vPosition = (modelViewMatrix * vec4(newPosition, 1.0)).xyz;
    vDisplacement = displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const blobFragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  void main() {
    // Fresnel for edge glow
    vec3 viewDir = normalize(-vPosition);
    float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 2.5);
    
    // Subtle iridescence
    float hue = sin(vDisplacement * 3.0 + uTime * 0.2) * 0.1;
    vec3 iridescent = uColor + vec3(hue, -hue * 0.5, hue * 0.3);
    
    // Core color with fresnel edge
    vec3 core = iridescent * 0.6;
    vec3 edge = iridescent * 1.5;
    vec3 finalColor = mix(core, edge, fresnel);
    
    float alpha = uOpacity * (0.3 + fresnel * 0.7);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

/* ── Soft Blob Component ───────────────────────── */
function SoftBlob({
  position,
  scale,
  color,
  opacity,
  seed,
  scrollVelocity,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  opacity: number;
  seed: number;
  scrollVelocity: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollVelocity: { value: 0 },
      uSeed: { value: seed },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity },
    }),
    [color, opacity, seed]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScrollVelocity.value +=
        (scrollVelocity - materialRef.current.uniforms.uScrollVelocity.value) * 0.05;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03 + seed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05 + seed * 2;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.2 + seed) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={blobVertexShader}
        fragmentShader={blobFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ── Floating Particles ────────────────────────── */
function FloatingParticles() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 0.03 + 0.01;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.012;
      ref.current.rotation.x = state.clock.elapsedTime * 0.006;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#cbb7fb"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Scene Wrapper ─────────────────────────────── */
function Scene({ scrollVelocity }: { scrollVelocity: number }) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;

  return (
    <>
      <SoftBlob
        position={isMobile ? [0, 0.5, -2] : [2.5, 0.3, -2]}
        scale={isMobile ? 2.0 : 3.0}
        color="#cbb7fb"
        opacity={0.12}
        seed={0}
        scrollVelocity={scrollVelocity}
      />
      <SoftBlob
        position={isMobile ? [-1.5, -1, -3] : [-3, 1.2, -3]}
        scale={isMobile ? 1.2 : 2.0}
        color="#818cf8"
        opacity={0.08}
        seed={42}
        scrollVelocity={scrollVelocity}
      />
      <SoftBlob
        position={isMobile ? [1, -0.5, -1.5] : [0, -1.5, -1.5]}
        scale={isMobile ? 0.8 : 1.4}
        color="#a78bfa"
        opacity={0.06}
        seed={99}
        scrollVelocity={scrollVelocity}
      />
      <FloatingParticles />
    </>
  );
}

/* ── Main Export ────────────────────────────────── */
export default function HeroBackground() {
  const scrollVelocity = useScrollVelocity();

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 72 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.NoToneMapping,
        }}
      >
        <Scene scrollVelocity={scrollVelocity} />
      </Canvas>
    </div>
  );
}