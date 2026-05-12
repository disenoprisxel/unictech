import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Contacto | Unictech SAS',
  description: '¡Nos encantará saber de ti! Contáctanos en Unictech SAS.',
};

const ACCENT = '#e63012';

export default function Contacto() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero title="Contacto" image="/hero-contacto.jpg" />

      {/* ── Intro ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px',
            letterSpacing: '3px', textTransform: 'uppercase', color: ACCENT, marginBottom: '16px' }}>
            ¡Nos Encantará Saber de Ti!
          </p>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
            Mantente Conectado
          </h2>
          <div style={{ width: '48px', height: '4px', backgroundColor: ACCENT, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '15px',
            color: '#4b5563', lineHeight: 1.8 }}>
            En Unictech S.A.S., estamos pendientes para resolver cualquier inquietud que tengas
            y ayudarte a tomar las mejores decisiones.
          </p>
        </div>
      </section>

      {/* ── Mapa + datos ── */}
      <section className="pb-20 px-6 bg-white">

          {/* Google Maps embed — ancho ampliado */}
          <div className="max-w-6xl mx-auto" style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '48px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4607267576516!2d-74.06835492390488!3d4.68971469528526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9adcd22042c5%3A0xd0359ce839838c51!2sMaster%20Center!5e0!3m2!1ses-419!2sco!4v1778619362662!5m2!1ses-419!2sco"
              width="100%"
              height="630"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Unictech SAS"
            />
          </div>

          {/* Info en 3 columnas */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* Dirección */}
            <div>
              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.3rem', color: ACCENT, marginBottom: '12px' }}>
                Nos encuentras en
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.7 }}>
                Av. Calle 100 # 60-04
              </p>
            </div>

            {/* Horario */}
            <div>
              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.3rem', color: ACCENT, marginBottom: '12px' }}>
                Horario
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.8 }}>
                8:00 AM – 5:00 PM<br />
                Lunes – Viernes
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.8, marginTop: '8px' }}>
                8:00 AM – 1:00 PM<br />
                Sábados
              </p>
            </div>

            {/* Teléfono y email */}
            <div>
              <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontStyle: 'italic',
                fontSize: '1.3rem', color: ACCENT, marginBottom: '12px' }}>
                Llámanos
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.8 }}>
                Teléfono: (601) 531 8327
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.8 }}>
                Email: <a href="mailto:gerencia@unictechsas.com"
                  style={{ color: '#374151' }}>gerencia@unictechsas.com</a>
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14.5px',
                color: '#374151', lineHeight: 1.8 }}>
                <a href="mailto:proyectos@unictechsas.com"
                  style={{ color: '#374151' }}>proyectos@unictechsas.com</a>
              </p>
            </div>
          </div>
      </section>
    </>
  );
}
