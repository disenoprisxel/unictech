import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Calentamiento de Piscinas | Unictech SAS',
  description: 'Climatización de piscinas y jacuzzis. Mantiene la estética y la funcionalidad arquitectónica deseada.',
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

/* ── Iconos ── */
const IconEye = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="40" height="40" rx="4" stroke="currentColor" fill="none" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6"/>
    <path d="M8 24c4-8 12-12 16-12s12 4 16 12c-4 8-12 12-16 12S12 32 8 24z"/>
    <circle cx="24" cy="24" r="2" fill="currentColor"/>
  </svg>
);
const IconThermo = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6v20m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/>
    <path d="M20 10h4m-4 4h4m-4 4h4"/>
  </svg>
);
const IconDesign = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 36l6-2 20-20-4-4-20 20-2 6z"/>
    <path d="M30 10l4 4"/>
    <circle cx="38" cy="10" r="4"/>
    <line x1="10" y1="38" x2="38" y2="38"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4l16 6v12c0 10-7 18-16 22C8 40 8 32 8 22V10l16-6z"/>
    <path d="M16 24l5 5 9-10"/>
  </svg>
);

const features = [
  { Icon: IconEye,    label: 'Última\nTecnología'        },
  { Icon: IconThermo, label: 'Control de\nTemperatura'   },
  { Icon: IconDesign, label: 'Diseño\nErgonómico'        },
  { Icon: IconShield, label: 'Segura y\nEstable'         },
];

export default function CalentamientoPiscinas() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Piscinas & Jacuzzis" image="/hero-piscinas.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: CHECK, marginBottom: '16px' }}>
            Tu Mejor Elección
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Mantiene la Estética y la Funcionalidad Arquitectónica Deseada
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: CHECK, margin: '0 auto' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCTO 1 — Master Temp de PENTAIR
          Fondo gris, texto izquierda, imagen derecha
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '10px' }}>
                Climatizador para Piscina
              </p>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '20px' }}>
                Master Temp de PENTAIR
              </h2>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'La pantalla digital fácil de leer hace que la programación y la supervisión sean facilísimas.',
                'La pantalla giratoria posiciona los controles al frente o al centro para cualquier orientación en la que se instale.',
                'Eléctrico, 120/240 V.',
                'Tuberías de 1-1/2" / 2" – ideal para cuerpos de agua con una capacidad de hasta 15,000 galones.',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 16px' }}>
                Beneficios
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151',
                lineHeight: 1.8, marginBottom: '12px' }}>
                Su tecnología líder de combustión pre-mezclada le brinda una eficiencia térmica de 82%
                para mantener los costos operativos bajos durante todo el año.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151',
                lineHeight: 1.8, marginBottom: '12px' }}>
                La avanzada pantalla / controlador digital le proporciona más información y mejor control.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151',
                lineHeight: 1.8 }}>
                Ideal para aplicaciones más pequeñas, incluyendo piscinas elevadas, spa y piscinas enterradas
                con una capacidad de hasta 15,000 galones.
              </p>
            </div>

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-master-temp.jpg" alt="Master Temp de PENTAIR"
                style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>
          </div>
        </section>

        {/* Onda inferior → blanco */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '70px' }}>
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 2 — Therm 5600 de BOSCH
          Fondo blanco, imagen izquierda, texto derecha
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: 'white' }}>
        {/* Onda superior ← gris */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '70px' }}>
            <path d="M0,35 C360,0 1080,70 1440,35 L1440,0 L0,0 Z" fill="#f3f4f6" />
          </svg>
        </div>

        <section className="px-6 pt-28 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Imagen izquierda */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: '#f3f4f6', borderRadius: '4px', padding: '32px' }}>
              <img src="/producto-therm-5600.png" alt="Therm 5600 de BOSCH"
                style={{ width: '100%', maxWidth: '380px', height: 'auto', display: 'block' }} />
            </div>

            {/* Texto */}
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '10px' }}>
                Climatizador para Jacuzzi
              </p>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '8px' }}>
                Therm 5600 de BOSCH
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '18px' }}>
                Hasta (3000lts)
              </p>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Posee 10 sistemas de seguridad.',
                'Fabricación y diseño Europeo (compacto y eficiente).',
                'Termostático: Tecnología avanzada que permite elegir la temperatura exacta.',
                'Display integrado.',
                'Pantalla indicadora de temperatura y averías.',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Posee botón de encendido y apagado permitiendo desactivar el calentador sin necesidad de cerrar el suministro de gas.',
                  'Compatibilidad solar, preparado para uso con colectores solares.',
                  'Filtro incorporado en la válvula de agua de fácil acceso, facilitando el mantenimiento.',
                  'La caldera de condensación de Bosch es la solución más eficiente y rentable para su negocio, optimiza el gasto de combustible gracias a sus dos ventiladores y su tecnología de condensación.',
                  'Condensación es el cambio de estado de la materia que se encuentra en forma gaseosa y pasa a forma líquida. En este caso, el equipo aprovecha la temperatura de los gases para precalentar el agua.',
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                    color: '#374151', lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ── Iconos ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, label }, i) => (
            <div key={i} style={{
              border: '1.5px solid #e5e7eb',
              borderRadius: '4px',
              padding: '36px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              textAlign: 'center',
            }}>
              <div style={{ color: '#111827' }}><Icon /></div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: CHECK,
                lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
