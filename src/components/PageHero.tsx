interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  image?: string; // ruta pública, ej: '/hero-agua-caliente.jpg'
}

export default function PageHero({ tag, title, subtitle, image }: PageHeroProps) {
  /* ── Hero con imagen de fondo ── */
  if (image) {
    return (
      <section
        className="relative flex items-center justify-center text-center"
        style={{ height: '210px', overflow: 'hidden' }}
      >
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />
        {/* Overlay sutil para legibilidad */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.35)',
        }} />
        <h1
          className="relative z-10 uppercase"
          style={{
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

  /* ── Hero de color sólido (original) ── */
  return (
    <section
      className="text-center py-20 px-6"
      style={{ backgroundColor: 'var(--azul-oscuro)', color: 'white' }}
    >
      {tag && (
        <p
          className="mb-4 uppercase"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '3px',
            color: '#e63012',
          }}
        >
          {tag}
        </p>
      )}
      <h1
        className="text-white uppercase leading-tight"
        style={{ letterSpacing: '1px' }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="mt-4 text-white/75 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '15px' }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
