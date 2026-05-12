import PageHero from '@/components/PageHero';
import MantenimientoForm from './MantenimientoForm';

export const metadata = {
  title: 'Servicio de Mantenimiento | Unictech SAS',
  description: 'Especialistas en sistemas centralizados de agua caliente. Contáctanos para cualquier duda.',
};

const CHECK = '#e63012';

export default function Mantenimiento() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Servicio de Mantenimiento" image="/hero-mantenimiento.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', marginBottom: '16px' }}>
            Especialistas en Sistemas Centralizados de Agua Caliente
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', color: '#111827', lineHeight: 1.25, marginBottom: '20px' }}>
            Ponte en contacto con nosotros si tienes alguna duda<br />
            y te responderemos lo antes posible.
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: CHECK, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
            fontSize: '1.1rem', color: CHECK }}>
            ¡Déjanos tu mensaje!
          </p>
        </div>
      </section>

      {/* ── Formulario ── */}
      <MantenimientoForm />
    </>
  );
}
