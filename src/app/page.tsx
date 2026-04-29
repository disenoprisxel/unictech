import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

const diferenciadores = [
  'Personal altamente calificado',
  'Soluciones integrales y de confort',
  'Comercializamos equipos de alta eficiencia',
  'Materiales certificados y de alta resistencia',
  'Comprometidos con el medio ambiente',
];

const servicios = [
  { label: 'Agua Caliente', href: '/agua-caliente', icon: '🚿' },
  { label: 'Piscinas & Jacuzzis', href: '/calentamiento-piscinas', icon: '🏊' },
  { label: 'Calefacción', href: '/calefaccion', icon: '🔥' },
  { label: 'Chimeneas', href: '/chimeneas', icon: '🕯️' },
  { label: 'Energías Sostenibles', href: '/energias-sostenibles', icon: '☀️' },
  { label: 'Mantenimiento', href: '/servicio-de-mantenimiento', icon: '🔧' },
];

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quiénes Somos — intro */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
          >
            SOMOS TU MEJOR ELECCIÓN
          </p>
          <h2
            className="font-extrabold mb-4 leading-tight"
            style={{ color: 'var(--azul-oscuro)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Sistemas de Calefacción y de Agua Caliente
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Proporcionamos a nuestros clientes soluciones de confort, diseños de calidad,
            sistemas de bajo impacto ambiental y de alta eficiencia.
          </p>
        </div>
      </section>

      {/* Servicios cards */}
      <section className="py-14 px-6" style={{ backgroundColor: 'var(--azul-oscuro)' }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
          >
            NUESTROS SERVICIOS
          </p>
          <h2 className="text-center font-extrabold text-white text-2xl mb-10 uppercase tracking-wide">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {servicios.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center gap-2 p-5 rounded-xl text-center transition-transform hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-white font-semibold text-sm">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos — expandida */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
            >
              SOLUCIONES DE CONFORT
            </p>
            <h2
              className="font-extrabold uppercase mb-5 leading-tight"
              style={{ color: 'var(--azul-oscuro)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              ¿Quiénes Somos?<br />
              <span style={{ color: 'var(--dorado)' }}>Líderes en sistemas de calefacción</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos un equipo de trabajo que, a través de las buenas prácticas profesionales,
              proporcionará a sus clientes soluciones de confort, diseños de calidad, sistemas
              de bajo impacto ambiental y de alta eficiencia, los cuales se ajusten a las
              necesidades de nuestros clientes y de esta manera se garantice la razonable
              retribución y satisfacción completa de sus proyectos.
            </p>
            <div className="flex gap-3">
              <Link
                href="/proyectos"
                className="px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wide text-white transition-colors"
                style={{ backgroundColor: 'var(--azul-oscuro)' }}
              >
                Ver Proyectos
              </Link>
              <Link
                href="/contacto"
                className="px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wide text-white transition-colors"
                style={{ backgroundColor: 'var(--dorado)' }}
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Trayectoria + diferenciadores */}
          <div
            className="rounded-xl p-8 text-white"
            style={{ backgroundColor: 'var(--azul-oscuro)' }}
          >
            <h3 className="font-extrabold uppercase text-xl mb-3" style={{ color: 'var(--dorado)' }}>
              Trayectoria
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 text-sm">
              UNICTECH SAS se destaca por su compromiso, responsabilidad, mejora continua en
              las prácticas empresariales, medioambientales y sostenibles que garanticen la
              ejecución completa y satisfactoria de los proyectos.
            </p>
            <h4
              className="font-bold uppercase text-xs tracking-widest mb-3"
              style={{ color: 'var(--azul-cielo)' }}
            >
              ¿Por qué elegirnos?
            </h4>
            <ul className="space-y-2">
              {diferenciadores.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                  <span style={{ color: 'var(--dorado)', flexShrink: 0 }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Marcas Aliadas */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: 'var(--azul-cielo)', letterSpacing: '4px' }}
          >
            MARCAS ALIADAS
          </p>
          <h2
            className="font-extrabold uppercase text-2xl mb-8"
            style={{ color: 'var(--azul-oscuro)' }}
          >
            Trabajamos con las mejores marcas
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Bosch', 'Pentair', 'Unical', 'Junkers'].map((marca) => (
              <div
                key={marca}
                className="px-8 py-4 rounded-lg border-2 font-extrabold text-lg tracking-widest"
                style={{ borderColor: 'var(--azul-oscuro)', color: 'var(--azul-oscuro)' }}
              >
                {marca}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="py-14 px-6 text-center text-white"
        style={{ backgroundColor: 'var(--azul-cielo)' }}
      >
        <h2 className="font-extrabold uppercase text-3xl mb-3">
          ¿Listo para tu proyecto?
        </h2>
        <p className="mb-6 text-white/90">
          Contáctanos y nuestro equipo te asesorará sin costo.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-8 py-3 rounded font-bold uppercase tracking-wide text-white transition-colors"
          style={{ backgroundColor: 'var(--dorado)' }}
        >
          Solicitar Asesoría
        </Link>
      </section>
    </>
  );
}
