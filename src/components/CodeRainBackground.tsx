'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface CodeRainBackgroundProps {
  className?: string;
  trailColor?: string; // e.g., 'rgba(0, 0, 0, 0.05)'
  textColor?: string;  // e.g., '#00FF41' (classic green)
  fontSize?: number;
  characters?: string;
  animationFPS?: number; // Target FPS for the rain updates (e.g., 20 for slower)
}

const CodeRainBackground: React.FC<CodeRainBackgroundProps> = ({
  className = '',
  trailColor = 'rgba(13, 17, 23, 0.1)', // Darker, slightly transparent trail for the new bg
  textColor = '#33C6A8', // A modern teal/cyan
  fontSize = 16,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/?$#@!%^&*()-_=+|',
  animationFPS = 30, // Default to 30 FPS
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const interval = 1000 / animationFPS;

  const draw = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, columns: number[], drops: number[]) => {
    ctx.fillStyle = trailColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0; // Reset drop to top randomly
      }
      drops[i]++;
    }
  }, [trailColor, textColor, fontSize, characters]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let columnsCount: number;
    let drops: number[];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columnsCount = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let x = 0; x < columnsCount; x++) {
        drops[x] = 1 + Math.floor(Math.random() * (canvas.height / fontSize));
      }
    };

    setup(); // Initial setup
    lastTimeRef.current = 0; // Reset last time on setup

    const render = (timestamp: number) => {
      animationFrameId.current = requestAnimationFrame(render);
      if (timestamp - lastTimeRef.current < interval) {
        return; // Skip frame if interval not met
      }
      lastTimeRef.current = timestamp - ((timestamp - lastTimeRef.current) % interval); // Adjust lastTime
      
      draw(ctx, canvas, drops, drops);
    };

    animationFrameId.current = requestAnimationFrame(render);

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      setup(); // Re-setup on resize
      lastTimeRef.current = 0; // Reset last time on resize
      animationFrameId.current = requestAnimationFrame(render); // Restart render loop
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [draw, fontSize, interval]); // Add interval to dependencies

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full z-0 ${className}`} />;
};

export default CodeRainBackground; 