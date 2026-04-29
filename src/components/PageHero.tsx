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
          className="text-sm font-bold uppercase tracking-widest mb-3"
          style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
        >
          {tag}
        </p>
      )}
      <h1
        className="font-extrabold uppercase leading-tight"
        style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', letterSpacing: '2px' }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-white/70 text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
    </section>
  );
}
