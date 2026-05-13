'use client';

import { useState, useRef, useEffect } from 'react';

interface ProjectCarouselProps {
  images: string[];
  videos?: string[];
  nombre: string;
  color: string;
}

type Slide = { type: 'image'; src: string } | { type: 'video'; src: string };

export default function ProjectCarousel({ images, videos = [], nombre, color }: ProjectCarouselProps) {
  const slides: Slide[] = [
    ...images.map((src) => ({ type: 'image' as const, src })),
    ...videos.map((src) => ({ type: 'video' as const, src })),
  ];

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const total = slides.length;

  // Pause all videos when slide changes; play current if video
  useEffect(() => {
    slides.forEach((slide, i) => {
      if (slide.type === 'video') {
        const vid = videoRefs.current[i];
        if (!vid) return;
        if (i === current) {
          vid.currentTime = 0;
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [current]);

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
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            style={{
              position: 'absolute', inset: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.5s ease',
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            {slide.type === 'image' ? (
              <>
                {/* Blurred background */}
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(18px) brightness(0.55)',
                    transform: 'scale(1.08)',
                  }}
                />
                {/* Main image */}
                <img
                  src={slide.src}
                  alt={`${nombre} – foto ${i + 1}`}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </>
            ) : (
              /* Video slide */
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={slide.src}
                controls
                playsInline
                loop
                muted
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'contain',
                  backgroundColor: '#000',
                }}
              />
            )}
          </div>
        ))}

        {/* Video badge */}
        {slides[current]?.type === 'video' && (
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            borderRadius: '20px',
            padding: '5px 12px',
            display: 'flex', alignItems: 'center', gap: '6px',
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Video
          </div>
        )}

        {/* Arrows — appear on hover, only if multiple slides */}
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
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.25s ease',
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
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.25s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {total > 1 && (
          <div style={{
            position: 'absolute', bottom: '16px', left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: '8px',
            zIndex: 10,
          }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`${slide.type === 'video' ? 'Video' : 'Foto'} ${i + 1}`}
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
