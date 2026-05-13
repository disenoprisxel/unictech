import Link from 'next/link';
import Image from 'next/image';

const enlaces = [
  { label: 'Agua caliente', href: '/agua-caliente' },
  { label: 'Calentamiento Piscinas', href: '/calentamiento-piscinas' },
  { label: 'Calefacción', href: '/calefaccion' },
  { label: 'Chimeneas', href: '/chimeneas' },
  { label: 'Energias Sostenibles', href: '/energias-sostenibles', accent: true },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Mantenimiento', href: '/servicio-de-mantenimiento' },
  { label: 'Contácto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#aaa' }}>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Logo + descripción + redes */}
        <div>
          {/* Logo */}
          <div className="mb-5">
            <Image
              src="/logo.png"
              alt="Unictech SAS – Soluciones de confort"
              width={200}
              height={65}
              className="object-contain"
            />
          </div>

          {/* Descripción */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#888' }}>
            Proporcionamos a nuestros clientes soluciones de confort, diseños de calidad,
            sistemas de bajo impacto ambiental y de alta eficiencia.
          </p>

          {/* Redes sociales — íconos cuadrado redondeado oscuro */}
          <div className="flex gap-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded text-white transition-colors"
              style={{ backgroundColor: '#2a2a2a' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded text-white transition-colors"
              style={{ backgroundColor: '#2a2a2a' }}
            >
              <svg width="16" height="12" viewBox="0 0 24 17" fill="currentColor">
                <path d="M23.495 2.205a3.02 3.02 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.07a3.02 3.02 0 0 0-2.122 2.136C0 4.073 0 8 0 8s0 3.927.505 5.795a3.02 3.02 0 0 0 2.122 2.136C4.495 16 12 16 12 16s7.505 0 9.373-.069a3.02 3.02 0 0 0 2.122-2.136C24 11.927 24 8 24 8s0-3.927-.505-5.795zM9.545 11.273V4.727L15.818 8l-6.273 3.273z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/unictech_sas/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded text-white transition-colors"
              style={{ backgroundColor: '#2a2a2a' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Enlaces */}
        <div>
          <h3 className="font-bold text-base mb-5" style={{ color: 'white' }}>Enlaces</h3>
          <ul className="space-y-2.5">
            {enlaces.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: l.accent ? '#e63012' : '#888' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contáctanos */}
        <div>
          <h3 className="font-bold text-base mb-5" style={{ color: 'white' }}>Contáctanos</h3>
          <ul className="space-y-2.5 text-sm" style={{ color: '#888' }}>
            <li>AV. Calle 100 # 60-04</li>
            <li>
              <a href="mailto:gerencia@unictechsas.com" className="hover:text-white transition-colors">
                gerencia@unictechsas.com
              </a>
            </li>
            <li>
              <a href="mailto:proyectos@unictechsas.com" className="hover:text-white transition-colors">
                proyectos@unictechsas.com
              </a>
            </li>
            <li>
              <a href="tel:+5716015318327" className="hover:text-white transition-colors">
                (601) 531 8327
              </a>
            </li>
            <li>
              <a href="tel:+573106782256" className="hover:text-white transition-colors">
                (+57) 310 678 2256
              </a>
            </li>
            <li>
              <a href="tel:+573132502585" className="hover:text-white transition-colors">
                (+57) 313 250 2585
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t px-8 py-5 flex flex-col items-center gap-2 text-xs text-center"
        style={{ borderColor: '#222', color: '#666' }}
      >
        <p style={{ color: '#555' }}>
          © Unictech SAS. Todos los derechos reservados.{' '}
          <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
          {' '}-{' '}
          <a href="#" className="hover:text-gray-300 transition-colors">Términos y Condiciones</a>
        </p>
        <p style={{
          color: '#888',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '0.5px',
          paddingBottom: '4px',
        }}>
          Hecho con{' '}
          <span className="heart-animated">♥</span>
          {' '}por{' '}
          <span style={{ color: '#fff', fontWeight: 700 }}>Prisxel</span>
        </p>
      </div>

    </footer>
  );
}
