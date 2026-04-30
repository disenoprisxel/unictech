interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ tag, title, subtitle }: PageHeroProps) {
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
