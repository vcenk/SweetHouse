const items = [
  "Baklava",
  "Şöbiyet",
  "Su Böreği",
  "Lokum",
  "Turkish Coffee",
  "Kadayıf",
  "Simit",
  "Turkish Breakfast",
  "Künefe",
  "Gelato",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-espresso/10 bg-espresso py-5 text-cream sm:py-6">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="display px-6 text-2xl sm:px-9 sm:text-4xl">{t}</span>
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
