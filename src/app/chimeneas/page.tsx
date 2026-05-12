import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Chimeneas | Unictech SAS',
  description: 'Chimeneas de interior y exterior con tecnología italiana. Confort que mereces.',
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

export default function Chimeneas() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Chimeneas" image="/hero-chimeneas.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: CHECK, marginBottom: '16px' }}>
            Confort que Mereces
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Chimeneas de Interior y Exterior
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: CHECK, margin: '0 auto' }} />
        </div>
      </section>

      {/* ── Producto — Chimenea Tipo Loft (card sobre fondo oscuro) ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-5xl mx-auto">
          {/* Card blanca con esquinas redondeadas */}
          <div style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            minHeight: '500px',
          }}
          className="grid-cols-1 lg:grid-cols-2 flex flex-col lg:flex-none"
          >
            {/* ── Columna texto ── */}
            <div style={{ padding: '48px 40px' }}>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Chimenea Tipo Loft De Válvula Electrónica
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Tecnología Italiana',
                'Quemador Vent free',
                'Control remoto',
                'Llama graduable',
                'Función de termostato',
                'Requiere punto Eléctrico a 110V con polo a tierra',
                'Punto de Gas salida en Hembra de ½"',
                'Presión Punto de Gas: 18 - 23 milibares en Gas Natural',
                'Registro de Corte de paso Gas Reglamentario',
              ]} />
            </div>

            {/* ── Columna imagen (fondo naranja) ── */}
            <div style={{
              backgroundColor: '#f97316',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              minHeight: '420px',
            }}>
              {/* Imagen principal */}
              <img src="/producto-chimenea-loft.jpg" alt="Chimenea Tipo Loft"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  display: 'block',
                }} />
              {/* Imagen circular detalle — esquina inferior derecha */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid white',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}>
                <img src="/producto-chimenea-detalle.jpg" alt="Detalle chimenea"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
