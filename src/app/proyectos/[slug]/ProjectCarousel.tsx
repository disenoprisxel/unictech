'use client';

import { useState } from 'react';

interface ProjectCarouselProps {
  images: string[];
  nombre: string;
  color: string;
}

export default function ProjectCarousel({ images, nombre, color }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  if (total === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      {/* Decorative offset block */}
      <div style={{
        position: 'absolute',
        top: '24px', right: '-20px',
        width: '100%', height: '100%',
        backgroundColor: color,
        opacity: 0.12,
        borderRadius: '18px',
        zIndex: 0,
      }} />

      {/* Image frame */}
      <div style={{
        position: 'relative', zIndex: 1,
        borderRadius: '18px', overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.20)',
        aspectRatio: '4/3',
        backgroundColor: '#f3f4f6',
      }}>
        {/* Images */}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${nombre} – foto ${i + 1}`}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'contain', display: 'block',
              padding: '8px',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.45s ease',
            }}
          />
        ))}

        {/* Arrows — only if more than 1 image */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              style={{
                position: 'absolute', left: '14px', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px', height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.50)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '18px',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              style={{
                position: 'absolute', right: '14px', top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px', height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.50)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '18px',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Dot indicators */}
        {total > 1 && (
          <div style={{
            position: 'absolute', bottom: '14px', left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: '7px',
            zIndex: 10,
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a foto ${i + 1}`}
                style={{
                  width: i === current ? '22px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === current ? '#e63012' : 'rgba(255,255,255,0.55)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Counter */}
      {total > 1 && (
        <p style={{
          textAlign: 'right', marginTop: '10px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px', color: '#9ca3af', fontWeight: 600,
        }}>
          {current + 1} / {total}
        </p>
      )}
    </div>
  );
}
