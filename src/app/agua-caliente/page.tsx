import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Agua Caliente | Unictech SAS',
  description: 'Especialistas en sistemas centralizados de agua caliente para aplicaciones deportivas, hoteleras, hospitalarias, industriales y residenciales.',
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
          color: '#374151', lineHeight: 1.6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AguaCaliente() {
  return (
    <>
      <PageHero title="Agua Caliente" image="/hero-agua-caliente.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: '#e63012', marginBottom: '16px' }}>
            Sistemas de Agua Caliente
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Especialistas en sistemas centralizados de agua caliente.
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: '#e63012', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '15px',
            color: '#4b5563', lineHeight: 1.8 }}>
            Sistemas idóneos para aplicaciones deportiva, hoteleras, hospitalarias, industriales y residenciales
            entre otras. Sistemas que superan los 50°C a 70°C. Compatibilidad solar, sistemas de colectores solares
            generando una significativa reducción del consumo energético.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCTO 1 — Calentadores de Paso Bosch
          Fondo gris, imagen a la DERECHA
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: '#f3f4f6' }}>
        <section className="px-6 pt-16 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '16px' }}>
                Calentadores de Paso Bosch
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '12.5px',
                letterSpacing: '1.5px', textTransform: 'uppercase', color: '#6b7280', marginBottom: '24px', lineHeight: 1.7 }}>
                La mejor experiencia en el calentamiento de agua y ahorro de gas con su alta eficiencia
                y ajuste automático de potencia.
              </p>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px',
                letterSpacing: '2px', textTransform: 'uppercase', color: CHECK, marginBottom: '14px' }}>
                Características Generales
              </p>
              <CheckList items={[
                'Posee 9 sistemas de seguridad.',
                'Diseño Europeo (compacto y eficiente).',
                'Incluye ducto de evacuación.',
                'Ventilador integrado que expulsa los gases de la combustión para instalación en viviendas sin ducto comunal.',
                'Termostático: Tecnología avanzada que permite elegir la temperatura exacta.',
                'Display táctil integrado.',
                'Conexión a Wi-Fi (opcional y dependiendo del modelo), para mayor control.',
                'Funciona con bajos caudales (desde 2.8 Lts/min).',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <BulletList items={[
                'Posee botón de encendido y apagado permitiendo desactivar el calentador sin necesidad de cerrar el suministro de gas.',
                'Uso continuo ilimitado – sin auto apagado.',
                'Intercambiador de calor 100% en cobre que prolonga la vida útil del calentador.',
              ]} />
            </div>

            {/* Imagen */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-calentador-bosch.jpg" alt="Calentador de Paso Bosch"
                style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>
          </div>
        </section>

        {/* Onda inferior — transición a blanco */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '70px' }}>
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          PRODUCTO 2 — Caldera de Alta Eficiencia
          Fondo blanco, imagen a la IZQUIERDA
      ══════════════════════════════════════════════ */}
      <div style={{ position: 'relative', backgroundColor: 'white' }}>
        {/* Onda superior — continuación desde gris */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '70px' }}>
            <path d="M0,35 C360,0 1080,70 1440,35 L1440,0 L0,0 Z" fill="#f3f4f6" />
          </svg>
        </div>

        <section className="px-6 pt-28 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Imagen a la izquierda */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/producto-caldera-therm.jpg" alt="Caldera de Alta Eficiencia Therm 8000 Bosch"
                style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block', borderRadius: '4px' }} />
            </div>

            {/* Texto */}
            <div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111827', lineHeight: 1.15, marginBottom: '24px' }}>
                Caldera de Alta Eficiencia Therm 8000 Bosch
              </h2>

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
                'Permite obtener información relevante del equipo como horas de funcionamiento, historial de fallas y diversas mediciones que facilita las actividades de control y mantenimiento.',
                'Instalación en recintos confinados (Tipo C).',
                'Modulación electrónica en gas y agua de alta precisión, entregando entre 35° y 84° C.',
              ]} />

              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.5rem', color: CHECK, margin: '28px 0 14px' }}>
                Beneficios
              </h3>
              <BulletList items={[
                'Posee botón de encendido y apagado permitiendo desactivar el calentador sin necesidad de cerrar el suministro de gas.',
                'Compatibilidad solar, preparado para uso con colectores solares.',
                'Filtro incorporado en la válvula de agua de fácil acceso, facilitando el mantenimiento.',
                'La caldera de condensación de Bosch es la solución más eficiente y rentable para su negocio, optimiza el gasto de combustible gracias a sus dos ventiladores y su tecnología de condensación.',
                'Condensación es el cambio de estado de la materia que se encuentra en forma gaseosa y pasa a forma líquida. En este caso, el equipo aprovecha la temperatura de los gases para precalentar el agua.',
              ]} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
