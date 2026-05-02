'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

const GOLD  = '#db9600';
const BLUE  = '#152674';
const CYAN  = '#009bdb';

/* ─── Tipos de slide ─── */
type ImageSlideData = {
  id: number; bg: string; layout: 'image';
  image: string; title: string; bullets: string[];
};
type ColorSlideData = {
  id: number; bg: string; layout: 'color';
  tag: string; title: string; body: string;
};
type SlideData = ImageSlideData | ColorSlideData;

/* ─── Datos ─── */
const slides: SlideData[] = [
  {
    id: 1, bg: BLUE, layout: 'image',
    image: '/slide-1.jpg',
    title: 'Sistema de Colectores Solares',
    bullets: ['ENERGÍAS RENOVABLES', 'EFICIENCIA ENERGÉTICA', 'BAJO IMPACTO AMBIENTAL'],
  },
  {
    id: 2, bg: '#0f2060', layout: 'color',
    tag: 'CLIMATIZACIÓN',
    title: 'PISCINAS',
    body: 'Climatización de piscinas y jacuzzis',
  },
  {
    id: 3, bg: BLUE, layout: 'color',
    tag: 'CUIDADOS QUE MERECES',
    title: 'AGUA CALIENTE',
    body: 'Sistemas de alta eficiencia para tu hogar',
  },
  {
    id: 4, bg: '#1a3080', layout: 'color',
    tag: 'TU MEJOR ELECCIÓN',
    title: 'SISTEMAS DE CALEFACCIÓN',
    body: 'Disfruta del calor del hogar',
  },
  {
    id: 5, bg: '#0f2060', layout: 'color',
    tag: 'CONFORT QUE MERECES',
    title: 'CHIMENEAS',
    body: 'Ambientando los momentos',
  },
];

/* ─── Slide con imagen + arco dorado ─── */
function ImageSlide({ slide, isActive }: { slide: ImageSlideData; isActive: boolean }) {
  return (
    <div
      className="relative flex-none w-full h-full overflow-hidden"
      style={{ backgroundColor: slide.bg }}
    >
      {/* Foto — ocupa el lado derecho (62%) */}
      <div className="absolute inset-y-0 right-0 h-full" style={{ width: '62%', zIndex: 1 }}>
        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
      </div>

      {/* Arco dorado — gran círculo en la frontera */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '620px', height: '620px',
          backgroundColor: GOLD,
          borderRadius: '50%',
          left: '33%', top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      />

      {/* Máscara azul — oculta la mitad izquierda del arco dorado */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        style={{ width: '39%', backgroundColor: slide.bg, zIndex: 3 }}
      />

      {/* Texto animado */}
      <div
        className="absolute inset-y-0 left-0 flex flex-col justify-center"
        style={{ width: '42%', paddingLeft: '72px', paddingRight: '12px', zIndex: 10 }}
      >
        {/* Título — fade in desde la izquierda */}
        <h1
          className="font-bold text-white leading-tight mb-7"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 'clamp(2rem, 3.2vw, 3.4rem)',
            lineHeight: 1.15,
            textShadow: '0 2px 10px rgba(0,0,0,0.25)',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 0.75s ease-out 0.1s, transform 0.75s ease-out 0.1s',
          }}
        >
          {slide.title}
        </h1>

        {/* Bullets — cada uno entra con delay escalonado */}
        <div className="flex flex-col gap-2.5">
          {slide.bullets.map((bullet, bi) => (
            <p
              key={bi}
              className="font-bold uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                letterSpacing: '2.5px',
                color: CYAN,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(-50px)',
                transition: `opacity 0.65s ease-out ${0.4 + bi * 0.13}s, transform 0.65s ease-out ${0.4 + bi * 0.13}s`,
              }}
            >
              {bullet}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide de color sólido (los que aún no tienen foto) ─── */
function ColorSlide({ slide }: { slide: ColorSlideData }) {
  return (
    <div
      className="relative flex-none w-full h-full flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: slide.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%)' }}
      />
      <div className="relative z-10 max-w-3xl">
        <p
          className="text-sm font-bold uppercase tracking-widest mb-4"
          style={{ color: CYAN, letterSpacing: '4px' }}
        >
          {slide.tag}
        </p>
        <h1
          className="font-extrabold uppercase leading-none mb-6"
          style={{
            color: GOLD,
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            letterSpacing: '2px',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          {slide.title}
        </h1>
        <p className="text-white font-semibold text-lg tracking-wide" style={{ opacity: 0.9 }}>
          {slide.body}
        </p>
      </div>
    </div>
  );
}

/* ─── Componente principal ─── */
export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden" style={{ height: '600px' }}>
      {/* Viewport Embla */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) =>
            slide.layout === 'image' ? (
              <ImageSlide key={slide.id} slide={slide} isActive={selectedIndex === i} />
            ) : (
              <ColorSlide key={slide.id} slide={slide} />
            )
          )}
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={scrollPrev} aria-label="Anterior"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl transition-colors"
        style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}
      >
        ‹
      </button>
      <button
        onClick={scrollNext} aria-label="Siguiente"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl transition-colors"
        style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}
      >
        ›
      </button>

      {/* Puntos de navegación */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
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
