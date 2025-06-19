'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorState {
  position: CursorPosition;
  isVisible: boolean;
  isClicking: boolean;
  hoverTarget: 'default' | 'link' | 'button' | 'project' | 'text';
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const [cursorState, setCursorState] = useState<CursorState>({
    position: { x: 0, y: 0 },
    isVisible: false,
    isClicking: false,
    hoverTarget: 'default'
  });

  // Smooth position tracking with lerp
  const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const currentPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const animationId = useRef<number | undefined>(undefined);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Smooth animation loop
  const animate = useCallback(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;

    // Linear interpolation for smooth movement
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    
    currentPosition.current.x = lerp(currentPosition.current.x, targetPosition.current.x, 0.15);
    currentPosition.current.y = lerp(currentPosition.current.y, targetPosition.current.y, 0.15);

    // Update cursor position with transform for better performance
    const transform = `translate3d(${currentPosition.current.x - 20}px, ${currentPosition.current.y - 20}px, 0)`;
    cursorRef.current.style.transform = transform;
    
    const dotTransform = `translate3d(${currentPosition.current.x - 4}px, ${currentPosition.current.y - 4}px, 0)`;
    cursorDotRef.current.style.transform = dotTransform;

    animationId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      
      if (!cursorState.isVisible) {
        setCursorState(prev => ({ ...prev, isVisible: true }));
      }
    };

    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isVisible: false }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let hoverTarget: CursorState['hoverTarget'] = 'default';

      // Check for project cards first (highest priority)
      if (target.closest('[data-project-card]') || target.closest('.project-card')) {
        hoverTarget = 'project';
      } 
      // Check for navigation links and route links
      else if (
        target.tagName.toLowerCase() === 'a' || 
        target.closest('a') ||
        target.closest('[href]') ||
        target.closest('nav a') ||
        target.closest('.nav-link') ||
        target.closest('[data-nav-link]') ||
        // Next.js Link component detection
        target.closest('[data-nextjs-link]') ||
        // Check for common navigation patterns
        (target.closest('nav') && (target.tagName.toLowerCase() === 'span' || target.tagName.toLowerCase() === 'div')) ||
        // Check for elements with href attribute
        target.getAttribute('href') ||
        // Check for clickable navigation elements
        (target.closest('header') && target.classList.contains('cursor-pointer')) ||
        // Check for menu items
        target.closest('[role="menuitem"]') ||
        target.closest('.menu-item')
      ) {
        hoverTarget = 'link';
      } 
      // Check for buttons
      else if (
        target.tagName.toLowerCase() === 'button' || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('btn') ||
        target.classList.contains('button') ||
        target.getAttribute('type') === 'button' ||
        target.getAttribute('type') === 'submit' ||
        target.closest('[data-button]') ||
        target.closest('.cursor-pointer') && (
          target.textContent?.toLowerCase().includes('click') ||
          target.textContent?.toLowerCase().includes('submit') ||
          target.textContent?.toLowerCase().includes('send') ||
          target.textContent?.toLowerCase().includes('view') ||
          target.getAttribute('aria-label')?.toLowerCase().includes('button')
        )
      ) {
        hoverTarget = 'button';
      } 
      // Check for text inputs
      else if (
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea' || 
        target.contentEditable === 'true'
      ) {
        hoverTarget = 'text';
      }

      setCursorState(prev => ({ ...prev, hoverTarget }));
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Start animation loop
    animationId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [isTouchDevice, animate, cursorState.isVisible]);

  if (isTouchDevice) return null;

  const getCursorStyle = () => {
    const baseStyle = {
      position: 'fixed' as const,
      pointerEvents: 'none' as const,
      zIndex: 9999,
      transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
      borderRadius: '50%',
      mixBlendMode: 'difference' as const,
    };

    switch (cursorState.hoverTarget) {
      case 'project':
        return {
          ...baseStyle,
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(126, 140, 224, 0.8)',
          border: '2px solid rgba(126, 140, 224, 1)',
          backdropFilter: 'blur(10px)',
        };
      case 'link':
        return {
          ...baseStyle,
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(6, 182, 212, 0.8)',
          border: '2px solid rgba(6, 182, 212, 1)',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
          backdropFilter: 'blur(8px)',
        };
      case 'button':
        return {
          ...baseStyle,
          width: '45px',
          height: '45px',
          backgroundColor: 'rgba(34, 197, 94, 0.8)',
          border: '2px solid rgba(34, 197, 94, 1)',
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
          backdropFilter: 'blur(6px)',
        };
      case 'text':
        return {
          ...baseStyle,
          width: '4px',
          height: '40px',
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderRadius: '2px',
        };
      default:
        return {
          ...baseStyle,
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        };
    }
  };

  const getDotStyle = () => {
    return {
      position: 'fixed' as const,
      width: '8px',
      height: '8px',
      backgroundColor: cursorState.hoverTarget === 'text' ? 'transparent' : '#ffffff',
      borderRadius: '50%',
      pointerEvents: 'none' as const,
      zIndex: 10000,
      transition: 'transform 0.15s ease, opacity 0.3s ease',
      transform: cursorState.isClicking ? 'scale(0.5)' : 'scale(1)',
      opacity: cursorState.hoverTarget === 'text' ? 0 : 1,
    };
  };

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        style={{
          ...getCursorStyle(),
          opacity: cursorState.isVisible ? 1 : 0,
          transform: cursorState.isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        style={{
          ...getDotStyle(),
          opacity: cursorState.isVisible ? 1 : 0,
        }}
      />

      {/* Hover label */}
      {cursorState.hoverTarget !== 'default' && cursorState.isVisible && (
        <div
          style={{
            position: 'fixed',
            left: currentPosition.current.x + 25,
            top: currentPosition.current.y - 25,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
            pointerEvents: 'none',
            zIndex: 10001,
            opacity: cursorState.isVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {cursorState.hoverTarget === 'project' && '🎯 PROJECT'}
          {cursorState.hoverTarget === 'link' && '🧭 NAVIGATE'}
          {cursorState.hoverTarget === 'button' && '👆 CLICK'}
          {cursorState.hoverTarget === 'text' && '✏️ TYPE'}
        </div>
      )}
    </>
  );
};

export default CustomCursor; 