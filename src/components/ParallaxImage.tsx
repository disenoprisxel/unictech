'use client';

import { useEffect, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  factor?: number; // 0–1, default 0.18 (very subtle)
}

export default function ParallaxImage({ src, alt, factor = 0.18 }: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const onScroll = () => {
      const section = img.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = centerOffset * factor;
      img.style.transform = `translateY(${shift}px) scale(1.12)`;
    };

    // Initial position
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
        willChange: 'transform',
        transform: 'scale(1.12)',
        transition: 'transform 0.05s linear',
      }}
    />
  );
}
