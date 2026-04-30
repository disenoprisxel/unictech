interface ProductCardProps {
  name: string;
  tagline?: string;
  features: string[];
  benefits?: string[];
}

export default function ProductCard({ name, tagline, features, benefits }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-7 md:p-9">
        {/* Nombre del producto — Roboto Bold (hereda de h3 global) */}
        <h3 className="mb-2 leading-tight uppercase" style={{ color: 'var(--azul-oscuro)' }}>
          {name}
        </h3>

        {tagline && (
          <p
            className="uppercase mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '1px',
              color: '#e63012',
            }}
          >
            {tagline}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p
              className="uppercase tracking-widest mb-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                color: '#e63012',
              }}
            >
              Características
            </p>
            <ul className="space-y-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 leading-snug" style={{ color: '#444' }}>
                  <span style={{ color: '#e63012', flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {benefits && benefits.length > 0 && (
            <div>
              <p
                className="uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  color: '#e63012',
                }}
              >
                Beneficios
              </p>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 leading-snug" style={{ color: '#444' }}>
                    <span style={{ color: '#e63012', flexShrink: 0, fontWeight: 700 }}>★</span>
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
