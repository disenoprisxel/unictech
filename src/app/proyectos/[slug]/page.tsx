import { notFound } from 'next/navigation';
import Link from 'next/link';
import { proyectos, categoryColors } from '../data';
import ProjectCarousel from './ProjectCarousel';

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
              {/* Line + [ CATEGORIA ] */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{ width: '44px', height: '2px', backgroundColor: '#e63012', flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, fontSize: '12px',
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                  color: '#e63012',
                }}>
                  [ {proyecto.categoria} ]
                </span>
              </div>

              {/* Project title */}
              <h1 style={{
                fontFamily: "'Roboto', sans-serif", fontWeight: 900,
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                color: '#111827', lineHeight: 1.12,
                marginBottom: '18px',
                letterSpacing: '-0.5px',
                display: 'block',
              }}>
                {proyecto.titulo ?? proyecto.nombre}
              </h1>

              {/* Subtítulo negro (opcional) */}
              {proyecto.subtitulo && (
                <p style={{
                  fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                  color: '#111827',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {proyecto.subtitulo}
                </p>
              )}

              {/* Nombre – Ubicación en rojo */}
              <p style={{
                fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: '#e63012',
                marginBottom: '36px',
                lineHeight: 1.3,
              }}>
                {proyecto.nombre} – {proyecto.ubicacion}
              </p>

              {/* Meta row */}
              <div style={{
                display: 'flex', gap: '28px', flexWrap: 'wrap',
                marginBottom: '44px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '13px', color: '#6b7280', fontWeight: 600,
              }}>
                {/* Año */}
                <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e63012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {proyecto.año}
                </span>
                {/* Ubicación */}
                <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="#e63012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {proyecto.ubicacion}
                </span>
              </div>

              {/* Volver button — solid red */}
              <Link
                href="/proyectos"
                style={{
                  display: 'inline-block',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                  fontSize: '13px', letterSpacing: '1.5px',
                  color: 'white', backgroundColor: '#e63012',
                  padding: '13px 32px', borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                Volver
              </Link>
            </div>

            {/* ──────── Right: Image Carousel ──────── */}
            <ProjectCarousel
              images={proyecto.images}
              videos={proyecto.videos}
              nombre={proyecto.nombre}
              color={color}
            />

          </div>
        </div>
      </section>

      {/* ── CTA: Déjanos ser parte de tu proyecto ── */}
      <section style={{
        position: 'relative',
        backgroundColor: '#0b1120',
        padding: '52px 24px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Imagen de fondo */}
        <img
          src="/cta-proyectos.jpg"
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />

        {/* Overlay oscuro sobre la imagen */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,16,35,0.72)',
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
