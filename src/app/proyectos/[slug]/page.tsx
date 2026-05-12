import { notFound } from 'next/navigation';
import Link from 'next/link';
import { proyectos, categoryColors } from '../data';

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function ProyectoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) notFound();

  const color = categoryColors[proyecto.categoria];

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
        <div className="max-w-6xl mx-auto px-6 py-3">
          <nav
            className="flex items-center flex-wrap"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: '#9ca3af', gap: '6px' }}
          >
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/proyectos" style={{ color: '#9ca3af', textDecoration: 'none' }}>Proyectos</Link>
            <span>›</span>
            <span style={{ color: '#374151', fontWeight: 600 }}>{proyecto.nombre}</span>
          </nav>
        </div>
      </div>

      {/* ── Main Two-Column Layout ── */}
      <section className="bg-white" style={{ padding: '72px 24px 88px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ──────── Left: Project Info ──────── */}
            <div>
              {/* Red accent bar */}
              <div style={{
                width: '52px', height: '5px',
                backgroundColor: '#e63012', borderRadius: '2px',
                marginBottom: '28px',
              }} />

              {/* Category badge */}
              <span style={{
                display: 'inline-block',
                backgroundColor: color, color: 'white',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase',
                padding: '6px 18px', borderRadius: '20px',
                marginBottom: '28px',
              }}>
                {proyecto.categoria}
              </span>

              {/* Project title */}
              <h1 style={{
                fontFamily: "'Roboto', sans-serif", fontWeight: 900,
                fontSize: 'clamp(1.9rem, 3vw, 2.9rem)',
                color: '#111827', lineHeight: 1.15,
                marginBottom: '28px', letterSpacing: '-0.5px',
                display: 'block',
              }}>
                {proyecto.nombre}
              </h1>

              {/* Thin divider */}
              <div style={{
                width: '100%', height: '1px',
                backgroundColor: '#e5e7eb', marginBottom: '32px',
              }} />

              {/* Meta rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                {[
                  { label: 'Ubicación', value: proyecto.ubicacion },
                  { label: 'Año', value: String(proyecto.año) },
                  { label: 'Categoría', value: proyecto.categoria },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Dot */}
                    <div style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      backgroundColor: '#e63012', flexShrink: 0,
                    }} />
                    {/* Label */}
                    <span style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
                      color: '#b0b8c4', fontWeight: 700,
                      minWidth: '96px',
                    }}>
                      {label}
                    </span>
                    {/* Value */}
                    <span style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14.5px', color: '#374151', fontWeight: 600,
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Back link */}
              <Link
                href="/proyectos"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                  fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#152674', textDecoration: 'none',
                  borderBottom: '2px solid #152674', paddingBottom: '3px',
                }}
              >
                ← Volver a Proyectos
              </Link>
            </div>

            {/* ──────── Right: Image ──────── */}
            <div style={{ position: 'relative' }}>
              {proyecto.image ? (
                <>
                  {/* Decorative offset background block */}
                  <div style={{
                    position: 'absolute',
                    top: '24px', right: '-24px',
                    width: '100%', height: '100%',
                    backgroundColor: color,
                    opacity: 0.12,
                    borderRadius: '18px',
                    zIndex: 0,
                  }} />

                  {/* Main image */}
                  <div style={{
                    position: 'relative', zIndex: 1,
                    borderRadius: '18px', overflow: 'hidden',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.20)',
                    aspectRatio: '4/3',
                  }}>
                    <img
                      src={proyecto.image}
                      alt={proyecto.nombre}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                      }}
                    />
                    {/* Subtle bottom gradient for polish */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '80px',
                      background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.12))',
                    }} />
                  </div>
                </>
              ) : (
                <div style={{
                  borderRadius: '18px',
                  aspectRatio: '4/3',
                  backgroundColor: color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    color: 'white',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700, fontSize: '16px',
                    letterSpacing: '2px', textTransform: 'uppercase',
                  }}>
                    {proyecto.categoria}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA: Déjanos ser parte de tu proyecto ── */}
      <section style={{
        position: 'relative',
        backgroundColor: '#0b1120',
        padding: '100px 24px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Radial glow accents */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(21,38,116,0.65) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 50%, rgba(230,48,18,0.22) 0%, transparent 55%)
          `,
        }} />

        {/* Fine diagonal lines texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.013) 0px, rgba(255,255,255,0.013) 1px, transparent 1px, transparent 32px)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
          {/* Small uppercase tag */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700, fontSize: '12px',
            letterSpacing: '4px', textTransform: 'uppercase',
            color: '#e63012', marginBottom: '22px',
          }}>
            ¿Tienes un proyecto en mente?
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            color: 'white', lineHeight: 1.15,
            marginBottom: '22px',
          }}>
            ¡Déjanos ser parte<br />de tu proyecto!
          </h2>

          {/* Red rule */}
          <div style={{
            width: '52px', height: '4px',
            backgroundColor: '#e63012', borderRadius: '2px',
            margin: '0 auto 28px',
          }} />

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '15px', fontWeight: 500,
            color: 'rgba(255,255,255,0.60)',
            lineHeight: 1.85, marginBottom: '44px',
          }}>
            Somos especialistas en sistemas de agua caliente, calefacción y energías
            sostenibles. Cuéntanos tu necesidad y te ofrecemos la mejor solución.
          </p>

          {/* CTA button */}
          <Link
            href="/contacto"
            style={{
              display: 'inline-block',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
              fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase',
              color: 'white', backgroundColor: '#e63012',
              padding: '17px 48px', borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(230,48,18,0.38)',
            }}
          >
            Conoce más
          </Link>
        </div>
      </section>
    </>
  );
}
