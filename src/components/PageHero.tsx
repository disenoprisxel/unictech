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
          className="text-[13px] font-bold uppercase tracking-[3px] mb-4"
          style={{ color: '#e63012' }}
        >
          {tag}
        </p>
      )}
      <h1
        className="font-black uppercase leading-tight text-white"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '1px' }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-white/75 text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </section>
  );
}
