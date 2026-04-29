import PageHero from '@/components/PageHero';
import ContactoForm from './ContactoForm';

export const metadata = {
  title: 'Contacto | Unictech SAS',
  description: '¡Nos encantará saber de ti! Contáctanos en Unictech SAS.',
};

export default function Contacto() {
  return (
    <>
      <PageHero
        tag="¡NOS ENCANTARÁ SABER DE TI!"
        title="Contacto"
        subtitle="En Unictech S.A.S., estamos pendientes para resolver cualquier inquietud que tengas y ayudarte a tomar las mejores decisiones."
      />

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2
              className="font-extrabold uppercase text-xl mb-6"
              style={{ color: 'var(--azul-oscuro)' }}
            >
              Mantente Conectado
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-0.5" style={{ color: 'var(--azul-cielo)' }}>Dirección</p>
                  <p>Av. Calle 100 # 60-04, Bogotá</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-0.5" style={{ color: 'var(--azul-cielo)' }}>Horario</p>
                  <p>Lun–Vie 8:00 AM – 5:00 PM</p>
                  <p>Sáb 8:00 AM – 1:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-0.5" style={{ color: 'var(--azul-cielo)' }}>Teléfono</p>
                  <a href="tel:+5716015318327" className="hover:underline">(601) 531 8327</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-0.5" style={{ color: 'var(--azul-cielo)' }}>Email</p>
                  <a href="mailto:gerencia@unictechsas.com" className="hover:underline block">
                    gerencia@unictechsas.com
                  </a>
                  <a href="mailto:proyectos@unictechsas.com" className="hover:underline block">
                    proyectos@unictechsas.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Map embed placeholder */}
            <div
              className="mt-8 rounded-xl overflow-hidden h-56 flex items-center justify-center text-white font-semibold text-sm"
              style={{ backgroundColor: 'var(--azul-oscuro)' }}
            >
              <div className="text-center">
                <p className="text-2xl mb-2">🗺️</p>
                <p>Av. Calle 100 # 60-04</p>
                <p className="text-white/60 text-xs mt-1">Bogotá, Colombia</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactoForm />
        </div>
      </section>
    </>
  );
}
