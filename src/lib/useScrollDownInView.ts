'use client';

import { useRef, useState, useEffect, RefObject } from 'react';

// Module-level scroll direction — single listener shared across all hook instances
let _scrollDir: 'up' | 'down' = 'down';
let _initialized = false;

function initTracker() {
  if (_initialized || typeof window === 'undefined') return;
  _initialized = true;
  let lastY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      _scrollDir = y > lastY ? 'down' : 'up';
      lastY = y;
    },
    { passive: true }
  );
}

/**
 * Returns [ref, inView] where inView becomes true ONLY when the element
 * enters the viewport while the user is scrolling downward (or on initial load).
 * Once true it stays true (once: true behaviour).
 */
export function useScrollDownInView<T extends HTMLElement = HTMLDivElement>(
  margin = '0px'
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    initTracker();
    const el = ref.current;
    if (!el) return;

    // If the element is already in the viewport on mount (e.g. hero section),
    // treat it as scrolling-down so it still gets its entrance animation.
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && _scrollDir === 'down') {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return [ref, inView];
}
