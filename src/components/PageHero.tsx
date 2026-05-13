import ParallaxImage from './ParallaxImage';

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ tag, title, subtitle, image }: PageHeroProps) {
  /* ── Hero con imagen de fondo + parallax ── */
  if (image) {
    return (
      <section
        data-hero
        className="relative flex items-center justify-center text-center"
        style={{ height: '210px', overflow: 'hidden' }}
      >
        <ParallaxImage src={image} alt={title} />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.58)',
          zIndex: 1,
        }} />

        {/* Title */}
        <h1
          className="relative uppercase"
          style={{
            zIndex: 2,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            color: 'white',
            letterSpacing: '3px',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
      </section>
    );
  }

  /* ── Hero de color sólido ── */
  return (
    <section
      data-hero
      className="text-center py-20 px-6"
      style={{ backgroundColor: 'var(--azul-oscuro)', color: 'white' }}
    >
      {tag && (
        <p className="mb-4 uppercase" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700, fontSize: '15px',
          letterSpacing: '3px', color: '#e63012',
        }}>
          {tag}
        </p>
      )}
      <h1 className="text-white uppercase leading-tight" style={{ letterSpacing: '1px' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-white/75 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '15px' }}>
          {subtitle}
        </p>
      )}
    </section>
  );
}
