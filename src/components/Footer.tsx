import Link from 'next/link';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Agua Caliente', href: '/agua-caliente' },
  { label: 'Piscinas', href: '/calentamiento-piscinas' },
  { label: 'Calefacción', href: '/calefaccion' },
  { label: 'Chimeneas', href: '/chimeneas' },
  { label: 'Energías Sostenibles', href: '/energias-sostenibles' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Mantenimiento', href: '/servicio-de-mantenimiento' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--azul-oscuro)', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-extrabold text-2xl tracking-widest mb-3">
            <span style={{ color: 'var(--azul-cielo)' }}>UNI</span>
            <span style={{ color: 'var(--dorado)' }}>CTECH</span>
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Soluciones de confort, diseños de calidad, sistemas de bajo impacto ambiental
            y de alta eficiencia para hogares y empresas en Colombia.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="text-white/60 hover:text-white transition-colors text-sm font-semibold uppercase">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="text-white/60 hover:text-white transition-colors text-sm font-semibold uppercase">IG</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"
              className="text-white/60 hover:text-white transition-colors text-sm font-semibold uppercase">YT</a>
          </div>
        </div>

        {/* Nav links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--azul-cielo)' }}>
            Navegación
          </h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--azul-cielo)' }}>
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>📍 Av. Calle 100 # 60-04, Bogotá</li>
            <li>📞 <a href="tel:+5716015318327" className="hover:text-white transition-colors">(601) 531 8327</a></li>
            <li>✉️ <a href="mailto:gerencia@unictechsas.com" className="hover:text-white transition-colors">gerencia@unictechsas.com</a></li>
            <li>✉️ <a href="mailto:proyectos@unictechsas.com" className="hover:text-white transition-colors">proyectos@unictechsas.com</a></li>
            <li>🕐 Lun–Vie 8:00 AM – 5:00 PM</li>
            <li>🕐 Sáb 8:00 AM – 1:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Unictech S.A.S. — Todos los derechos reservados
      </div>
    </footer>
  );
}
