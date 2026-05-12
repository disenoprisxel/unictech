import { notFound } from 'next/navigation';
import Link from 'next/link';
import { proyectos, categoryColors } from '../data';

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default function ProyectoDetalle({ params }: { params: { slug: string } }) {
  const proyecto = proyectos.find((p) => p.slug === params.slug);
  if (!proyecto) notFound();

  const color = categoryColors[proyecto.categoria];

  return (
    <>
      {/* ── Hero con imagen o color de categoría ── */}
      <section className="relative flex items-center justify-center text-center"
        style={{ height: '210px', overflow: 'hidden', backgroundColor: color }}>
        {proyecto.image && (
          <img src={proyecto.image} alt={proyecto.nombre}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <h1 className="relative z-10 uppercase"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900,
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'white', letterSpacing: '3px' }}>
          {proyecto.nombre}
        </h1>
      </section>

      {/* ── Info ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span style={{
            display: 'inline-block',
            backgroundColor: color, color: 'white',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
            padding: '6px 18px', borderRadius: '20px', marginBottom: '24px',
          }}>
            {proyecto.categoria}
          </span>

          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827',
            lineHeight: 1.2, marginBottom: '16px' }}>
            {proyecto.nombre}
          </h2>

          <div style={{ width: '48px', height: '4px', backgroundColor: '#e63012', margin: '0 auto 24px' }} />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px',
            fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#6b7280',
            flexWrap: 'wrap' }}>
            <span>📍 {proyecto.ubicacion}</span>
            <span>📅 {proyecto.año}</span>
          </div>
        </div>
      </section>

      {/* ── Imagen grande ── */}
      {proyecto.image && (
        <section className="px-6 pb-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <img src={proyecto.image} alt={proyecto.nombre}
              style={{ width: '100%', height: 'auto', borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'block' }} />
          </div>
        </section>
      )}

      {/* ── Volver ── */}
      <section className="py-10 px-6 bg-white text-center">
        <Link href="/proyectos"
          style={{
            display: 'inline-block',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase',
            color: 'white', backgroundColor: '#152674',
            padding: '12px 32px', borderRadius: '4px',
            textDecoration: 'none',
          }}>
          ← Volver a Proyectos
        </Link>
      </section>
    </>
  );
}
