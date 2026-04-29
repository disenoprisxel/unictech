interface ProductCardProps {
  name: string;
  tagline?: string;
  features: string[];
  benefits?: string[];
}

export default function ProductCard({ name, tagline, features, benefits }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6 md:p-8">
        <h3
          className="font-extrabold text-xl uppercase mb-2"
          style={{ color: 'var(--azul-oscuro)' }}
        >
          {name}
        </h3>
        {tagline && (
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-5"
            style={{ color: 'var(--azul-cielo)' }}
          >
            {tagline}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--dorado)' }}
            >
              Características
            </h4>
            <ul className="space-y-1.5">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: 'var(--azul-cielo)', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {benefits && benefits.length > 0 && (
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: 'var(--dorado)' }}
              >
                Beneficios
              </h4>
              <ul className="space-y-1.5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span style={{ color: 'var(--azul-cielo)', flexShrink: 0 }}>★</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
