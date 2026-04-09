'use client';

import React, { useState, useEffect, useRef } from 'react';

type HoverTarget = 'default' | 'link' | 'button' | 'project' | 'text';

// All mutable cursor state lives in refs — zero React re-renders in hot paths
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | undefined>(undefined);
  const visible = useRef(false);
  const clicking = useRef(false);
  const hoverTarget = useRef<HoverTarget>('default');

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const ring = cursorRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Initialise styles once
    ring.style.cssText = `
      position:fixed;pointer-events:none;z-index:9999;border-radius:50%;
      width:36px;height:36px;
      background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.22);
      transition:width .2s ease,height .2s ease,background-color .2s ease,border-color .2s ease,opacity .25s ease;
      will-change:transform;opacity:0;
    `;
    dot.style.cssText = `
      position:fixed;pointer-events:none;z-index:10000;border-radius:50%;
      width:6px;height:6px;background:#fff;
      transition:opacity .25s ease,transform .12s ease;
      will-change:transform;opacity:0;
    `;

    const applyRingStyle = (t: HoverTarget, isClicking: boolean) => {
      if (!ring) return;
      const scale = isClicking ? 'scale(0.82)' : 'scale(1)';
      switch (t) {
        case 'project':
          ring.style.width = '60px'; ring.style.height = '60px';
          ring.style.background = 'rgba(203,183,251,0.14)';
          ring.style.border = '1.5px solid rgba(203,183,251,0.65)';
          ring.style.boxShadow = '0 0 16px rgba(203,183,251,0.22)';
          break;
        case 'link':
          ring.style.width = '46px'; ring.style.height = '46px';
          ring.style.background = 'rgba(203,183,251,0.09)';
          ring.style.border = '1.5px solid rgba(203,183,251,0.50)';
          ring.style.boxShadow = '0 0 10px rgba(203,183,251,0.18)';
          break;
        case 'button':
          ring.style.width = '42px'; ring.style.height = '42px';
          ring.style.background = 'rgba(233,229,221,0.11)';
          ring.style.border = '1.5px solid rgba(233,229,221,0.40)';
          ring.style.boxShadow = '';
          break;
        case 'text':
          ring.style.width = '2px'; ring.style.height = '34px';
          ring.style.borderRadius = '2px';
          ring.style.background = '#cbb7fb';
          ring.style.border = 'none';
          ring.style.boxShadow = '';
          break;
        default:
          ring.style.width = '36px'; ring.style.height = '36px';
          ring.style.borderRadius = '50%';
          ring.style.background = 'rgba(255,255,255,0.04)';
          ring.style.border = '1px solid rgba(255,255,255,0.22)';
          ring.style.boxShadow = '';
      }
      // Apply scale directly without touching the translate
      ring.dataset.scale = scale;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // lerp factor 0.55 — tight follow, still slightly eased
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.55);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.55);

      const hw = ring.offsetWidth / 2;
      const hh = ring.offsetHeight / 2;
      const scale = ring.dataset.scale ?? 'scale(1)';
      ring.style.transform = `translate3d(${currentPos.current.x - hw}px,${currentPos.current.y - hh}px,0) ${scale}`;
      dot.style.transform = `translate3d(${currentPos.current.x - 3}px,${currentPos.current.y - 3}px,0)`;

      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    };

    const onDown = () => {
      clicking.current = true;
      ring.dataset.scale = 'scale(0.82)';
      dot.style.transform = dot.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(0.5)';
    };

    const onUp = () => {
      clicking.current = false;
      ring.dataset.scale = 'scale(1)';
    };

    const onLeave = () => {
      visible.current = false;
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onEnter = () => {
      visible.current = true;
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      let next: HoverTarget = 'default';
      if (t.closest('[data-project-card]') || t.closest('.project-card')) {
        next = 'project';
      } else if (t.tagName === 'A' || t.closest('a') || t.getAttribute('href')) {
        next = 'link';
      } else if (
        t.tagName === 'BUTTON' || t.closest('button') ||
        t.closest('[role="button"]') ||
        t.getAttribute('type') === 'submit'
      ) {
        next = 'button';
      } else if (
        t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' ||
        t.contentEditable === 'true'
      ) {
        next = 'text';
      }
      if (next !== hoverTarget.current) {
        hoverTarget.current = next;
        // Reset border-radius for non-text targets
        if (next !== 'text') ring.style.borderRadius = '50%';
        applyRingStyle(next, clicking.current);
        dot.style.opacity = (visible.current && next !== 'text') ? '1' : '0';
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mousedown', onDown, { passive: true });
    document.addEventListener('mouseup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    document.addEventListener('mouseenter', onEnter, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });

    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={cursorRef} />
      <div ref={dotRef} />
    </>
  );
};

export default CustomCursor;
