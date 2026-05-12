import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Calefacción | Unictech SAS',
  description: 'Sistemas de calefacción de alta eficiencia con tecnología italiana, compatibles con colectores solares.',
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

/* Onda gris→blanco */
function WaveDown() {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '70px' }}>
        <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="white" />
      </svg>
    </div>
  );
}

/* Onda blanco→gris (arriba de sección gris) */
function WaveUp() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '70px' }}>
        <path d="M0,35 C360,0 1080,70 1440,35 L1440,0 L0,0 Z" fill="#f3f4f6" />
      </svg>
    </div>
  );
}

export default function Calefaccion() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Calefacción" image="/hero-calefaccion.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: CHECK, marginBottom: '16px' }}>
            Tu Mejor Elección
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Sistemas de Calefacción
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: CHECK, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '15px',
            color: '#4b5563', lineHeight: 1.8 }}>
            Sistemas de calefacción de alta eficiencia tecnología italiana, bajo los más altos estándares
            de calidad, además son compatibles con sistemas de colectores solares, generando una significativa
            reducción del consumo energético.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCTO 1 — Caldera condensación UNICAL X+
          Fondo gris · texto izq · 2 imágenes der
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Caldera de condensación UNICAL X +
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Quemador de pre mezcla Low x (clase 6)',
                'Ajuste de la potencia mínima en modo calefacción',
                'Función anticongelante electrónica para funcionamiento hasta -15 °C',
                'Gestión de 2 zonas de calentamiento a diferentes temperaturas (alta/baja)',
                'Electrónica con función HWS "Hot Water Speed" en orden reducir cualquier posible retraso en la producción de ACS, y función automática de ventilación de aire',
                'Tamaño compacto y compatible Plantilla y conexiones estandarizadas con otros modelos de calefacción',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8 }}>
                La caldera mural de condensación X+ en (acero inoxidable), para el intercambiador de calor que
                forma el motor de estas calderas murales de condensación, y + (más) como: Poder+ Cantidad y
                rapidez de agua caliente sanitaria+ Tranquilidad+ Respeto por el medio ambiente. C 35: (potencia
                nominal en modo calefacción: 33 kW / modo ACS: 33 kW) combinada, instantánea, con producción de
                ACS hasta 19 l/min, para gas natural o GLP (kit de conversión suministrado).
              </p>
            </div>

            {/* Dos imágenes apiladas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img src="/producto-unical-xplus.jpg" alt="Caldera UNICAL X+"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <img src="/producto-unical-xplus-interior.jpg" alt="Interior Caldera UNICAL X+"
                  style={{ width: '55%', height: 'auto', display: 'block', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </section>
        <WaveDown />
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 2 — Caldera convencional UNICAL !DEA PLUS LN
          Fondo blanco · 2 imágenes izq · texto der
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: 'white' }}>
        <WaveUp />
        <section className="px-6 pt-28 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Dos imágenes apiladas izquierda */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <img src="/producto-unical-idea.jpg" alt="Caldera UNICAL IDEA PLUS LN"
                style={{ width: '65%', height: 'auto', display: 'block', borderRadius: '4px' }} />
              <img src="/producto-unical-idea-interior.jpg" alt="Interior Caldera UNICAL IDEA"
                style={{ width: '75%', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Caldera convencional UNICAL !DEA PLUS LN
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'La caldera mural DEA PLUS LN tiene tiro natural',
                'Aislamiento termo acústico 8 mm de espesor',
                'Conexiones hidráulicas completamente metálicas',
                'Alto grado de protección eléctrica',
                'Intercambiador sanitario en acero inoxidable con placas soldadas, tamaño perfecto, asegura 12 l/min. con Δt 25',
                'El by-pass automático estándar equilibrar en todo momento la circulación hidráulica.',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8, marginBottom: '14px' }}>
                La caldera mural DEA PLUS LN tiene tiro forzado o cámara estanca, encendido electrónico y
                combustión convencional; con una potencia de 32 kW, puede funcionar con gas natural o g.p.l. propano.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8, marginBottom: '10px' }}>
                Pantalla LCD retro iluminada temporizado, multifunción, que permite:
              </p>
              <ul style={{ paddingLeft: '20px', margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  'Lectura de temperaturas de calefacción / sanitarias.',
                  'Bloqueo por ausencia de llama.',
                  'Estado operativo/en espera.',
                  'Diagnóstico y reporte de 11 anomalías.',
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8 }}>
                Sistema refrigerado por agua, con micro llamas, reduce las emisiones hasta clase 6 NOx
                recuperando el calor producido para aumentar el rendimiento del sistema.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 3 — Radiadores
          Fondo gris · imagen izq · texto der
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-radiadores.jpg" alt="Radiadores de Aluminio"
                style={{ width: '100%', maxWidth: '391px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Radiadores
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8, marginBottom: '20px' }}>
                Cuando el aluminio y la tecnología se fusionan Surge la alianza. Es la síntesis de Estética,
                funcionalidad y rendimiento.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Presión máxima operativa: 600kPa (6 Bar)',
                'La potencia térmica cumple con la Norma Europea UNI EN 442-2',
                'Los radiadores se ensamblan de 4 a 15 elementos',
              ]} />
            </div>
          </div>
        </section>
        <WaveDown />
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 4 — Toalleros
          Fondo blanco · texto izq · imagen der
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: 'white' }}>
        <WaveUp />
        <section className="px-6 pt-28 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Toalleros
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8, marginBottom: '20px' }}>
                Los toalleros en aluminio proponen algunos diseños refinados que satisfacen las necesidades
                de estética mejorada con altos estándares de calidad. Con un estilo minimalista y elegante.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Presión máxima operativa: 600kPa (6 Bar)',
              ]} />
            </div>

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-toalleros.jpg" alt="Toalleros de Aluminio"
                style={{ width: '100%', maxWidth: '408px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 5 — Suelo Radiante
          Fondo gris · imagen izq · texto der
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 pt-16 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-suelo-radiante.jpg" alt="Suelo Radiante"
                style={{ width: '100%', maxWidth: '460px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '12px' }}>
                Suelo Radiante
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: CHECK, marginBottom: '20px' }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.8, marginBottom: '20px' }}>
                Una manta de calor constante bajo tus pies. Temperaturas más uniformes y un mayor
                confort térmico en cada rincón del hogar.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Tubería PEX 12mm o 16mm con barrera de oxígeno',
                'Resistencia hasta 95°C',
                'Manifold con válvulas de control individuales',
                'Compatible con la mayoría de tipos de piso',
              ]} />
              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Sistema hidrónico integrado con caldera de alta eficiencia.',
                  'Más eficiente energéticamente que sistemas convencionales.',
                  'Confort térmico uniforme en toda la habitación.',
                ].map((b, i) => (
                  <li key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px', color: '#374151', lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
