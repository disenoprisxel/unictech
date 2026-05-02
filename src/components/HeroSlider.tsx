'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    tag: 'ENERGÍAS RENOVABLES',
    title: 'COLECTORES SOLARES',
    body: 'Eficiencia Energética — Bajo Impacto Ambiental',
    bg: '#1a3080',
  },
  {
    id: 2,
    tag: 'CLIMATIZACIÓN',
    title: 'PISCINAS',
    body: 'Climatización de piscinas y jacuzzis',
    bg: '#0f2060',
  },
  {
    id: 3,
    tag: 'CUIDADOS QUE MERECES',
    title: 'AGUA CALIENTE',
    body: 'Sistemas de alta eficiencia para tu hogar',
    bg: '#152674',
  },
  {
    id: 4,
    tag: 'TU MEJOR ELECCIÓN',
    title: 'SISTEMAS DE CALEFACCIÓN',
    body: 'Disfruta del calor del hogar',
    bg: '#1a3080',
  },
  {
    id: 5,
    tag: 'CONFORT QUE MERECES',
    title: 'CHIMENEAS',
    body: 'Ambientando los momentos',
    bg: '#0f2060',
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden" style={{ height: '580px' }}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-none w-full h-full flex flex-col items-center justify-center text-center px-6"
              style={{ backgroundColor: slide.bg }}
            >
              {/* Subtle diagonal overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%)',
                }}
              />
              <div className="relative z-10 max-w-3xl">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
                >
                  {slide.tag}
                </p>
                <h1
                  className="font-extrabold uppercase leading-none mb-6"
                  style={{
                    color: 'var(--dorado)',
                    fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                    letterSpacing: '2px',
                    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  className="text-white font-semibold text-lg tracking-wide"
                  style={{ opacity: 0.9 }}
                >
                  {slide.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors text-white text-2xl"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors text-white text-2xl"
      >
        ›
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: selectedIndex === i ? '28px' : '10px',
              height: '10px',
              backgroundColor: selectedIndex === i ? '#e63012' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
