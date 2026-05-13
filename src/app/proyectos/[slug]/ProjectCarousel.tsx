'use client';

import { useState } from 'react';

interface ProjectCarouselProps {
  images: string[];
  nombre: string;
  color: string;
}

export default function ProjectCarousel({ images, nombre, color }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  if (total === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      {/* Decorative offset block */}
      <div style={{
        position: 'absolute',
        top: '20px', right: '-16px',
        width: '100%', height: '100%',
        backgroundColor: color,
        opacity: 0.10,
        borderRadius: '16px',
        zIndex: 0,
      }} />

      {/* Main carousel frame */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative', zIndex: 1,
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 20px 56px rgba(0,0,0,0.18)',
          aspectRatio: '3/2',
          backgroundColor: '#000',
        }}
      >
        {/* Images — cover, no padding, no borders */}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${nombre} – foto ${i + 1}`}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'scale(1)' : 'scale(1.03)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          />
        ))}

        {/* Arrows — appear on hover, only if multiple images */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              style={{
                position: 'absolute', left: '16px', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '44px', height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.25s ease, background 0.2s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              style={{
                position: 'absolute', right: '16px', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '44px', height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.25s ease, background 0.2s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators — bottom center */}
        {total > 1 && (
          <div style={{
            position: 'absolute', bottom: '16px', left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: '8px',
            zIndex: 10,
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Foto ${i + 1}`}
                style={{
                  width: i === current ? '24px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  backgroundColor: i === current ? '#ffffff' : 'rgba(255,255,255,0.40)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
