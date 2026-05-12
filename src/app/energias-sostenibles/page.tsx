import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Energías Sostenibles | Unictech SAS',
  description: 'Colectores solares de fabricación alemana. Ahorro de hasta 40% en consumo de gas.',
};

const CHECK = '#e63012';

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px',
          fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.6 }}>
          <span style={{ color: CHECK, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function EnergiasSostenibles() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Colector Solar" image="/hero-energias.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: CHECK, marginBottom: '16px' }}>
            Tu Mejor Elección
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Ahorro de Hasta 40% en Consumo de Gas
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: CHECK, margin: '0 auto' }} />
        </div>
      </section>

      {/* ── Colector Solar — fondo gris, texto izq, imagen der ── */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Colector Solar
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Diseño y fabricación Alemana',
                'Máxima duración y prolongada vida útil',
                'Captación de radiación solar mejorada',
                'Mejor retención y transferencia de calor al agua',
                'Permite conexión en paralelo de hasta 10 colectores',
                'Vidrios Prismático que proporciona una captación solar superior y gran eficiencia en un área',
                'Durabilidad y confiabilidad, serpentín de cobre con uniones en soldadura continua',
              ]} />
            </div>

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-colector-solar.jpg" alt="Colector Solar"
                style={{ width: '100%', maxWidth: '520px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
