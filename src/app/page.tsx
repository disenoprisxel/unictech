import HeroSlider from '@/components/HeroSlider';
import MarcasCarousel from '@/components/MarcasCarousel';
import Link from 'next/link';

const ACCENT = '#e63012';

/* ── íconos Prácticas — rediseñados profesionales ── */

/* 1 · Casco / técnico certificado → Personal altamente calificado */
const IconQualified = () => (
  <svg viewBox="0 0 80 80" width="72" height="72" fill={ACCENT}>
    {/* Cabeza */}
    <circle cx="30" cy="26" r="14" />
    {/* Cuerpo */}
    <path d="M4 72c0-14 12-23 26-23s26 9 26 23H4z" />
    {/* Estrella de certificación */}
    <path d="M66 10l3 6.5 7.2 1-5.3 5.1 1.3 7.2-6.2-3.3-6.3 3.3 1.3-7.2-5.3-5.1 7.3-1z" />
  </svg>
);

/* 2 · Llama → Soluciones de confort / calefacción */
const IconFlame = () => (
  <svg viewBox="0 0 80 80" width="72" height="72" fill={ACCENT}>
    <path d="M40 4c-2 9-9 16-9 25 0 4 1 7 1 7s-6-4-6-13c-9 9-13 20-13 29 0 17 12 24 27 24s27-7 27-24c0-11-5-22-11-32-4 7-5 14-5 14S42 20 40 4z" />
  </svg>
);

/* 3 · Rayo → Alta eficiencia energética */
const IconZap = () => (
  <svg viewBox="0 0 80 80" width="72" height="72" fill={ACCENT}>
    <path d="M50 4L16 46h26L28 76 64 34H38z" />
  </svg>
);

/* 4 · Escudo con check → Materiales certificados */
const IconShieldCheck = () => (
  <svg viewBox="0 0 80 80" width="72" height="72" fill={ACCENT}>
    <path d="M40 4L8 18v24c0 18 14 33 32 38 18-5 32-20 32-38V18L40 4z" />
    <path d="M27 42l10 10 20-20-4-4-16 16-6-6z" fill="white" />
  </svg>
);

/* 5 · Hoja → Compromiso ambiental */
const IconLeaf = () => (
  <svg viewBox="0 0 80 80" width="72" height="72" fill={ACCENT}>
    <path d="M68 8C44 8 14 18 10 58c8-12 22-18 36-18-18 8-28 22-28 36h10c4-22 18-36 40-42V8z" />
  </svg>
);

const practicas = [
  { label: 'Personal altamente calificado', Icon: IconQualified },
  { label: 'Soluciones integrales y de confort', Icon: IconFlame },
  { label: 'Comercializamos equipos de alta eficiencia', Icon: IconZap },
  { label: 'Materiales certificados y de alta resistencia', Icon: IconShieldCheck },
  { label: 'Comprometidos con el medio ambiente', Icon: IconLeaf },
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

      {/* ── 2. ¿Quiénes Somos? con imagen completa ── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen real — visible completa, sin recorte */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lideres.jpg"
              alt="Calefacción Infrarroja — El Confort que Mereces"
              className="w-full h-auto block"
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

      {/* ── 3. Trayectoria — nueva foto de fondo ── */}
      <section
        className="relative py-24 px-6 text-center"
        style={{ backgroundImage: 'url(/trayectoria.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.68)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-bold mb-6" style={{ color: 'white' }}>Trayectoria</h2>
          <p className="leading-relaxed" style={{ color: 'white', fontFamily: "'Montserrat', sans-serif" }}>
            UNICTECH SAS se destaca por su compromiso, responsabilidad, mejora continua en las prácticas
            empresariales, medio ambientales y sostenibles que garanticen la ejecución completa y
            satisfactoria de los proyectos.
          </p>
        </div>
      </section>

      {/* ── 4. Prácticas ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-center mb-2 uppercase tracking-[4px]"
            style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px' }}
          >
            LO QUE NOS DEFINE
          </p>
          <h2
            className="font-bold text-gray-900 text-center mb-12"
            style={{ fontSize: '26px', letterSpacing: '1px' }}
          >
            Prácticas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {practicas.map(({ label, Icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center border border-gray-200 rounded-lg pt-10 pb-8 px-4 hover:shadow-md transition-shadow"
              >
                <div className="mb-7">
                  <Icon />
                </div>
                <p className="font-bold text-gray-800 leading-snug" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '17px' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Marcas Aliadas ── */}
      <section className="py-14 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-[3px] mb-3 text-center" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
            MARCAS ALIADAS
          </p>
          <p
            className="text-gray-900 mb-10 text-center uppercase tracking-widest font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px' }}
          >
            Trabajamos con las mejores marcas
          </p>
          <MarcasCarousel />
        </div>
      </section>

      {/* ── 6. CTA final — azul profesional ── */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1b4b 0%, #152674 60%, #1a3080 100%)' }}
      >
        {/* Línea de acento superior */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: ACCENT }} />

        {/* Círculos decorativos sutiles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-5 bg-white" />
        <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full opacity-5 bg-white" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-[4px] mb-4" style={{ color: ACCENT, fontFamily: "'Montserrat', sans-serif" }}>
            CONTACTO
          </p>
          <h2 className="font-bold mb-4" style={{ color: 'white', fontSize: '38px' }}>
            ¿Listo para tu proyecto?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Montserrat', sans-serif", fontSize: '16px' }}>
            Contáctanos y nuestro equipo te asesorará sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 font-bold uppercase border-2 border-white text-white rounded hover:bg-white transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', letterSpacing: '2px' }}
          >
            Solicitar Asesoría
          </Link>
        </div>
      </section>
    </>
  );
}
