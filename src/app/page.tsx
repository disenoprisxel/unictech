import HeroSlider from '@/components/HeroSlider';
import MarcasCarousel from '@/components/MarcasCarousel';
import Image from 'next/image';
import Link from 'next/link';

const ACCENT = '#e63012';

/* ── íconos Prácticas — SVG idénticos al screenshot ── */
const IconMovers = () => (
  <svg viewBox="0 0 80 80" fill={ACCENT} width="72" height="72">
    <path d="M26 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm28 0a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM14 36l8-8 6 6 8-8 6 6 8-8 8 8v6H14v-6zm0 10h52v4H14v-4zm4 8h44l-4 12H22l-4-12z"/>
  </svg>
);

const IconDoubleCheck = () => (
  <svg viewBox="0 0 80 80" fill={ACCENT} width="72" height="72">
    <path d="M56 20L34 52 22 40l-6 6 18 18 28-38-6-6zM44 46l-6 6-6-6-6 6 12 12 18-24-6-6-6 12z"/>
  </svg>
);

const IconHandshake = () => (
  <svg viewBox="0 0 80 80" fill={ACCENT} width="72" height="72">
    <path d="M46 28h-6l-8 8H20l-8-4v24l8-4h8l18 10 18-10V28l-10 4-8-4zm-2 26l-16-9H20v-14h8l8-8h4l12 6 6-2v16l-14 11z"/>
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 80 80" fill={ACCENT} width="72" height="72">
    <path d="M52 8h-8a4 4 0 0 0-8 0h-8a4 4 0 0 0-4 4v52a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm-12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 52H28V16h4v4h16v-4h4v48zM52 36l-16 16-8-8-4 4 12 12 20-20-4-4z"/>
  </svg>
);

const IconTree = () => (
  <svg viewBox="0 0 80 80" fill={ACCENT} width="72" height="72">
    <path d="M40 6L20 30h12L18 52h14v14h16V52h14L48 30h12L40 6zm0 12l10 14h-7l14 20H30l14-20h-7L40 18z"/>
  </svg>
);

const practicas = [
  { label: 'Personal altamente calificado', Icon: IconMovers },
  { label: 'Soluciones integrales y de confort', Icon: IconDoubleCheck },
  { label: 'Comercializamos equipos de alta eficiencia', Icon: IconHandshake },
  { label: 'Materiales certificados y de alta resistencia', Icon: IconClipboard },
  { label: 'Comprometidos con el medio ambiente', Icon: IconTree },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── 1. Intro "Somos tu mejor elección" ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-[3px] mb-4" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
            SOMOS TU MEJOR ELECCIÓN
          </p>
          <h2 className="font-bold mb-5 leading-tight text-gray-900">
            Sistemas de Calefacción Y de Agua Caliente
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Proporcionamos a nuestros clientes soluciones de confort, diseños de calidad,
            sistemas de bajo impacto ambiental y de alta eficiencia.
          </p>
        </div>
      </section>

      {/* ── 2. ¿Quiénes Somos? con imagen real ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen real Lideres.jpg */}
          <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/lideres.jpg"
              alt="Calefacción Infrarroja — El Confort que Mereces"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto derecha */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[3px] mb-3" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
              ¿QUIENES SOMOS?
            </p>
            <h2 className="font-bold text-gray-900 mb-3 leading-tight">
              Líderes en sistemas de calefacción
            </h2>
            <p className="text-[13px] font-bold uppercase tracking-[3px] mb-5" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
              SOLUCIONES DE CONFORT
            </p>
            <p className="text-gray-800 leading-relaxed text-justify mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Somos un equipo de trabajo, que a través de las buenas prácticas
              profesionales proporcionara a sus clientes soluciones de confort,
              diseños de calidad, sistemas de bajo impacto ambiental y de alta
              eficiencia, los cuales se ajusten a las necesidades de nuestros clientes
              y de esta manera se garantice la razonable retribución y satisfacción
              completa de sus proyectos.
            </p>

            <Link
              href="/proyectos"
              className="inline-block px-7 py-3 rounded font-bold text-white mb-6 transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, fontFamily: "'Montserrat', sans-serif", fontSize: '15px' }}
            >
              Proyectos
            </Link>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-1">
              {[
                { href: 'https://facebook.com', label: 'Facebook', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { href: 'https://instagram.com', label: 'Instagram', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></svg> },
                { href: 'https://youtube.com', label: 'YouTube', svg: <svg width="18" height="13" viewBox="0 0 24 17" fill="white"><path d="M23.495 2.205a3.02 3.02 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.07a3.02 3.02 0 0 0-2.122 2.136C0 4.073 0 8 0 8s0 3.927.505 5.795a3.02 3.02 0 0 0 2.122 2.136C4.495 16 12 16 12 16s7.505 0 9.373-.069a3.02 3.02 0 0 0 2.122-2.136C24 11.927 24 8 24 8s0-3.927-.505-5.795zM9.545 11.273V4.727L15.818 8l-6.273 3.273z"/></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: ACCENT }}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Trayectoria — fondo oscuro con imagen ── */}
      <section
        className="relative py-24 px-6 text-center text-white"
        style={{ backgroundColor: '#1a1a1a', backgroundImage: 'url(/lideres.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-bold text-white mb-6">Trayectoria</h2>
          <p className="text-white/90 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            UNICTECH SAS se destaca por su compromiso, responsabilidad, mejora continua en las prácticas
            empresariales, medio ambientales y sostenibles que garanticen la ejecución completa y
            satisfactoria de los proyectos.
          </p>
        </div>
      </section>

      {/* ── 4. Prácticas — íconos grandes, idéntico al original ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-gray-900 text-center mb-12">Prácticas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {practicas.map(({ label, Icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center border border-gray-200 rounded-lg pt-10 pb-8 px-4"
              >
                <div className="mb-8">
                  <Icon />
                </div>
                <p className="font-bold text-gray-800 leading-snug" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Marcas Aliadas — carrusel centrado ── */}
      <section className="py-14 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-[3px] mb-3 text-center" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
            MARCAS ALIADAS
          </p>
          <h2 className="font-bold text-gray-900 mb-10 text-center uppercase tracking-wide">
            Trabajamos con las mejores marcas
          </h2>
          <MarcasCarousel />
        </div>
      </section>

      {/* ── 6. CTA final ── */}
      <section className="py-14 px-6 text-center text-white" style={{ backgroundColor: ACCENT }}>
        <h2 className="font-bold text-white mb-3">¿Listo para tu proyecto?</h2>
        <p className="mb-6 text-white/90" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Contáctanos y nuestro equipo te asesorará sin costo.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-8 py-3 rounded font-bold uppercase tracking-wide text-white border-2 border-white transition-colors hover:bg-white hover:text-[#e63012]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px' }}
        >
          Solicitar Asesoría
        </Link>
      </section>
    </>
  );
}
