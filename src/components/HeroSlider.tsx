'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState, CSSProperties } from 'react';

const GOLD   = '#db9600';
const BLUE   = '#152674';
const CYAN   = '#009bdb';
const ACCENT = '#e63012';

type ImageSlideData = {
  id: number; bg: string; layout: 'image';
  image: string; title: string; bullets: string[];
  titleColor?: string;
  textSide?: 'left' | 'right';
  textVAlign?: 'center' | 'top';
  bulletColor?: string;  // default: CYAN
  bulletSize?: string;   // default: '18px'
};
type ColorSlideData = {
  id: number; bg: string; layout: 'color';
  tag: string; title: string; body: string;
};
type SlideData = ImageSlideData | ColorSlideData;

const slides: SlideData[] = [
  {
    id: 1, bg: BLUE, layout: 'image',
    image: '/slide-1.jpg',
    title: 'Sistema de\nColectores\nSolares',
    bullets: ['ENERGÍAS RENOVABLES', 'EFICIENCIA ENERGÉTICA', 'BAJO IMPACTO AMBIENTAL'],
  },
  {
    id: 2, bg: '#0f2060', layout: 'image',
    image: '/slide-2.jpg',
    title: 'PISCINAS',
    titleColor: GOLD,
    textSide: 'right',
    textVAlign: 'top',
    bullets: ['CLIMATIZACIÓN DE PISCINAS Y JACUZZIS'],
    bulletColor: BLUE,
    bulletSize: '22px',
  },
  {
    id: 3, bg: BLUE, layout: 'image',
    image: '/slide-3.jpg',
    title: 'AGUA CALIENTE',
    bullets: ['CUIDADOS QUE MERECES', 'SISTEMAS DE ALTA EFICIENCIA PARA TU HOGAR'],
  },
  {
    id: 4, bg: '#1a3080', layout: 'image',
    image: '/slide-4.jpg',
    title: 'SISTEMAS DE\nCALEFACCIÓN',
    bullets: ['TU MEJOR ELECCIÓN', 'DISFRUTA DEL CALOR DEL HOGAR'],
  },
  {
    id: 5, bg: '#0f2060', layout: 'image',
    image: '/slide-5.jpg',
    title: 'CHIMENEAS',
    bullets: ['CONFORT QUE MERECES', 'AMBIENTANDO LOS MOMENTOS'],
  },
];

/* ─── Slide con imagen de fondo + texto flexible (izq/der, arriba/centro) ─── */
function ImageSlide({ slide, isActive }: { slide: ImageSlideData; isActive: boolean }) {
  const isRight  = slide.textSide === 'right';
  const isTop    = slide.textVAlign === 'top';
  const titleCol = slide.titleColor ?? 'white';


  /* Contenedor de texto */
  const textBox: CSSProperties = isRight
    ? {
        position: 'absolute',
        top: isTop ? '70px' : '50%',
        transform: isTop ? 'none' : 'translateY(-50%)',
        right: '10%',
        maxWidth: '46%',
        textAlign: 'right',
      }
    : {
        position: 'absolute',
        top: 0, bottom: 0, left: 0,
        display: 'flex', flexDirection: 'column',
        justifyContent: isTop ? 'flex-start' : 'center',
        paddingTop: isTop ? '70px' : undefined,
        paddingLeft: '10%',
        paddingRight: '40px',
        maxWidth: '52%',
      };

  /* Dirección de la animación según posición */
  const fromTransform = isRight ? 'translateY(-24px)' : 'translateY(30px)';

  return (
    <div className="relative flex-none w-full h-full overflow-hidden">
      {/* Imagen de fondo */}
      <img src={slide.image} alt={slide.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Bloque de texto */}
      <div style={textBox}>
        {/* Título */}
        <h1 style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 'clamp(3rem, 4.8vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          color: titleCol,
          marginBottom: '28px',
          textShadow: '0 2px 18px rgba(0,0,0,0.4)',
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translateY(0)' : fromTransform,
          transition: 'opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s',
        }}>
          {slide.title.split('\n').map((line, li) => (
            <span key={li} style={{ display: 'block' }}>{line}</span>
          ))}
        </h1>

        {/* Bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          {slide.bullets.map((b, bi) => (
            <p key={bi} style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: slide.bulletSize ?? '18px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: slide.bulletColor ?? CYAN,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : fromTransform,
              transition: `opacity 0.6s ease-out ${0.45 + bi * 0.13}s, transform 0.6s ease-out ${0.45 + bi * 0.13}s`,
            }}>
              {b}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide de color sólido ─── */
function ColorSlide({ slide }: { slide: ColorSlideData }) {
  return (
    <div className="relative flex-none w-full h-full flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: slide.bg }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 60%)' }} />
      <div className="relative z-10 max-w-3xl">
        <p style={{ color: CYAN, fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
          fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
          {slide.tag}
        </p>
        <h1 style={{
          color: GOLD, fontFamily: "'Roboto',sans-serif", fontWeight: 900,
          fontSize: 'clamp(2.5rem,8vw,5.5rem)', lineHeight: 1,
          letterSpacing: '2px', textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          textTransform: 'uppercase', marginBottom: '24px',
        }}>
          {slide.title}
        </h1>
        <p style={{ color: 'white', fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: '18px', opacity: 0.9 }}>
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
  const [ready, setReady] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo   = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 130);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden" style={{ height: '600px' }}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => {
            const isActive = ready && selectedIndex === i;
            return slide.layout === 'image'
              ? <ImageSlide key={slide.id} slide={slide} isActive={isActive} />
              : <ColorSlide key={slide.id} slide={slide} />;
          })}
        </div>
      </div>

      {/* Flechas */}
      <button onClick={scrollPrev} aria-label="Anterior"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl hover:bg-black/50 transition-colors"
        style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}>‹</button>
      <button onClick={scrollNext} aria-label="Siguiente"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl hover:bg-black/50 transition-colors"
        style={{ backgroundColor: 'rgba(0,0,0,0.28)' }}>›</button>

      {/* Puntos */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: selectedIndex === i ? '28px' : '10px',
              height: '10px',
              backgroundColor: selectedIndex === i ? ACCENT : 'rgba(255,255,255,0.5)',
            }} />
        ))}
      </div>
    </section>
  );
}
