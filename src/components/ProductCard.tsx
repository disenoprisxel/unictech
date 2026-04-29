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
        <h3
          className="font-black uppercase mb-2 leading-tight"
          style={{ color: 'var(--azul-oscuro)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
        >
          {name}
        </h3>
        {tagline && (
          <p
            className="text-[13px] font-bold uppercase tracking-wide mb-6"
            style={{ color: '#e63012' }}
          >
            {tagline}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4
              className="text-[12px] font-black uppercase tracking-widest mb-3"
              style={{ color: '#e63012' }}
            >
              Características
            </h4>
            <ul className="space-y-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px] text-gray-700 font-normal leading-snug">
                  <span style={{ color: '#e63012', flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {benefits && benefits.length > 0 && (
            <div>
              <h4
                className="text-[12px] font-black uppercase tracking-widest mb-3"
                style={{ color: '#e63012' }}
              >
                Beneficios
              </h4>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-gray-700 font-normal leading-snug">
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
