import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

const ACCENT = '#e63012';

const practicas = [
  {
    label: 'Personal altamente calificado',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
        <path d="M20 28c5.52 0 10-4.48 10-10S25.52 8 20 8 10 12.48 10 18s4.48 10 10 10zm0-16c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zM44 28c5.52 0 10-4.48 10-10S49.52 8 44 8 34 12.48 34 18s4.48 10 10 10zm0-16c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zM8 52v-4c0-6.63 5.37-12 12-12h8a11.94 11.94 0 0 1 7.6 2.72A13.94 13.94 0 0 0 30 48v4H8zm28-4c0-5.52 4.48-10 10-10s10 4.48 10 10v4H36v-4zm-8 0c0-3.27.9-6.33 2.46-8.95A7.96 7.96 0 0 0 28 36h-8c-4.42 0-8 3.58-8 8v0h16z"/>
      </svg>
    ),
  },
  {
    label: 'Soluciones integrales y de confort',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
        <path d="M26 46.6L10.7 31.3l4.24-4.24L26 38.12 49.06 15.06l4.24 4.24z"/>
      </svg>
    ),
  },
  {
    label: 'Comercializamos equipos de alta eficiencia',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
        <path d="M42 20c-1.1 0-2 .9-2 2v2H24v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V28c0-2.21-1.79-4-4-4h-2v-2c0-1.1-.9-2-2-2zm2 26H20V32h24v14zm-8-20H28v-2h8v2zM14 48V32h4v16h-4zm32 0V32h4v16h-4z"/>
        <path d="M32 36c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Materiales certificados y de alta resistencia',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
        <path d="M40 8H24c-2.21 0-4 1.79-4 4v2h-4c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V18c0-2.21-1.79-4-4-4h-4v-2c0-2.21-1.79-4-4-4zm-16 4h16v6H24v-6zm24 38H16V18h4v2c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-2h4v32zM28.5 38.5l-5-5-2.83 2.83L28.5 44.17 43.33 29.33l-2.83-2.83z"/>
      </svg>
    ),
  },
  {
    label: 'Comprometidos con el medio ambiente',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" width="48" height="48">
        <path d="M32 4L18 22h8v2c0 6.63-3.94 12.37-9.66 15.07A17.94 17.94 0 0 0 14 48h36a17.94 17.94 0 0 0-2.34-8.93C41.94 36.37 38 30.63 38 24v-2h8L32 4zm0 8.28L38.72 20H36v4c0 7.18 3.97 13.46 9.8 16.83.49.85.87 1.76 1.12 2.17H17.08c.25-.41.63-1.32 1.12-2.17C24.03 37.46 28 31.18 28 24v-4h-6.72L32 12.28zM28 52h8v4h-8z"/>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* ── 1. Intro "Somos tu mejor elección" ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: ACCENT, letterSpacing: '3px' }}
          >
            SOMOS TU MEJOR ELECCIÓN
          </p>
          <h2
            className="font-bold mb-5 leading-snug text-gray-900"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}
          >
            Sistemas de Calefacción Y de Agua Caliente
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Proporcionamos a nuestros clientes soluciones de confort, diseños de calidad,
            sistemas de bajo impacto ambiental y de alta eficiencia.
          </p>
        </div>
      </section>

      {/* ── 2. ¿Quiénes Somos? con imagen ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen izquierda */}
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-300 aspect-[4/3] flex items-center justify-center">
            {/* Placeholder hasta tener la imagen real */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: 'var(--azul-oscuro)' }}
            >
              <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">CALEFACCIÓN INFRARROJA</p>
              <p className="text-lg font-bold italic opacity-80">EL CONFORT QUE MERECES</p>
              <p className="text-xs opacity-40 mt-4">[ Reemplazar con imagen real ]</p>
            </div>
          </div>

          {/* Texto derecha */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: ACCENT, letterSpacing: '3px' }}
            >
              ¿QUIENES SOMOS?
            </p>
            <h2
              className="font-bold text-gray-900 mb-3 leading-snug"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              Líderes en sistemas de<br />calefacción
            </h2>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: ACCENT, letterSpacing: '3px' }}
            >
              SOLUCIONES DE CONFORT
            </p>
            <p className="text-gray-700 leading-relaxed text-sm text-justify mb-6">
              Somos un equipo de trabajo, que a través de las buenas prácticas
              profesionales proporcionara a sus clientes soluciones de confort,
              diseños de calidad, sistemas de bajo impacto ambiental y de alta
              eficiencia, los cuales se ajusten a las necesidades de nuestros clientes
              y de esta manera se garantice la razonable retribución y satisfacción
              completa de sus proyectos.
            </p>

            {/* Botón Proyectos */}
            <Link
              href="/proyectos"
              className="inline-block px-6 py-2.5 rounded font-bold text-sm text-white mb-5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Proyectos
            </Link>

            {/* Iconos redes sociales */}
            <div className="flex gap-3 mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: ACCENT }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: ACCENT }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: ACCENT }}
              >
                <svg width="18" height="13" viewBox="0 0 24 17" fill="white">
                  <path d="M23.495 2.205a3.02 3.02 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.07a3.02 3.02 0 0 0-2.122 2.136C0 4.073 0 8 0 8s0 3.927.505 5.795a3.02 3.02 0 0 0 2.122 2.136C4.495 16 12 16 12 16s7.505 0 9.373-.069a3.02 3.02 0 0 0 2.122-2.136C24 11.927 24 8 24 8s0-3.927-.505-5.795zM9.545 11.273V4.727L15.818 8l-6.273 3.273z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Trayectoria — fondo oscuro con imagen ── */}
      <section
        className="relative py-20 px-6 text-center text-white"
        style={{
          backgroundColor: '#1a1a1a',
          backgroundImage: 'url(/trayectoria-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-bold text-4xl mb-6">Trayectoria</h2>
          <p className="text-white/90 text-base leading-relaxed">
            UNICTECH SAS se destaca por su compromiso, responsabilidad, mejora continua en las prácticas
            empresariales, medio ambientales y sostenibles que garanticen la ejecución completa y
            satisfactoria de los proyectos.
          </p>
        </div>
      </section>

      {/* ── 4. Prácticas — 5 tarjetas con íconos ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl text-gray-900 text-center mb-10">Prácticas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {practicas.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg"
              >
                <div style={{ color: ACCENT }} className="mb-4">
                  {p.icon}
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Marcas Aliadas ── */}
      <section className="py-12 px-6" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: ACCENT, letterSpacing: '4px' }}
          >
            MARCAS ALIADAS
          </p>
          <h2 className="font-bold text-2xl text-gray-900 mb-8 uppercase tracking-wide">
            Trabajamos con las mejores marcas
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['Bosch', 'Pentair', 'Unical', 'Junkers'].map((marca) => (
              <div
                key={marca}
                className="px-8 py-4 rounded-lg border-2 font-extrabold text-lg tracking-widest bg-white"
                style={{ borderColor: '#ccc', color: 'var(--azul-oscuro)' }}
              >
                {marca}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA final ── */}
      <section
        className="py-14 px-6 text-center text-white"
        style={{ backgroundColor: ACCENT }}
      >
        <h2 className="font-bold text-3xl mb-3">¿Listo para tu proyecto?</h2>
        <p className="mb-6 text-white/90">Contáctanos y nuestro equipo te asesorará sin costo.</p>
        <Link
          href="/contacto"
          className="inline-block px-8 py-3 rounded font-bold uppercase tracking-wide text-white border-2 border-white transition-colors hover:bg-white hover:text-[#e63012]"
        >
          Solicitar Asesoría
        </Link>
      </section>
    </>
  );
}
