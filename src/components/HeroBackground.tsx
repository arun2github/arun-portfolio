'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.04;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.07;
    }
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0, -2]} scale={3.2}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#cbb7fb" wireframe transparent opacity={0.05} />
    </mesh>
  );
}

function SmallOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.elapsedTime * 0.09;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.06;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, 1.5, -1.5]} scale={1.2}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#cbb7fb" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

function FloatingParticles() {
  const count = 90;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.018;
      ref.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#cbb7fb" transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 72 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      >
        <WireframeSphere />
        <SmallOrb />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
