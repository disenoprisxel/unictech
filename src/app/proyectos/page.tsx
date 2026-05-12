import PageHero from '@/components/PageHero';
import ProyectosGrid from './ProyectosGrid';

export const metadata = {
  title: 'Proyectos | Unictech SAS',
  description: 'Proyectos realizados en calderas, calefacción, calentadores, chimeneas y colectores solares en Colombia.',
};

export default function Proyectos() {
  return (
    <>
      <PageHero
        title="Nuestros Proyectos"
        image="/hero-proyectos.jpg"
      />
      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: '#e63012', marginBottom: '16px' }}>
            Sistemas de Agua Caliente
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Especialistas en sistemas de agua caliente y calefacción.
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#e63012', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '15px',
            color: '#4b5563', lineHeight: 1.8 }}>
            Sistemas idóneos para aplicaciones deportiva, hoteleras, hospitalarias, industriales y residenciales
            entre otras. Sistema que superan los 50C° a 70C° Compatibilidad solar, sistemas de colectores solares
            generando una significativa reducción del consumo energético.
          </p>
        </div>
      </section>

      <ProyectosGrid />
    </>
  );
}
