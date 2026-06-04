// TEMPORARY — remove this component and its usage in page.tsx once a font is chosen

const FONTS = [
  {
    name: "Cormorant Garamond",
    variable: "var(--font-preview-cormorant)",
    weight: 400,
    tag: "Ultra-luxury · Fashion · Aristocratic",
  },
  {
    name: "Playfair Display",
    variable: "var(--font-preview-playfair)",
    weight: 400,
    tag: "Editorial · Authoritative · Magazine",
  },
  {
    name: "Cinzel",
    variable: "var(--font-preview-cinzel)",
    weight: 400,
    tag: "Roman Imperial · Regal · Timeless",
  },
  {
    name: "Raleway",
    variable: "var(--font-preview-raleway)",
    weight: 300,
    tag: "Thin Geometric · Modern Luxury",
  },
  {
    name: "Josefin Sans",
    variable: "var(--font-preview-josefin)",
    weight: 300,
    tag: "Minimal · Fashion House · Geometric",
  },
  {
    name: "EB Garamond",
    variable: "var(--font-preview-eb-garamond)",
    weight: 400,
    tag: "Old-style · Scholarly · Prestige",
  },
  {
    name: "Montserrat (current)",
    variable: "var(--font-montserrat)",
    weight: 500,
    tag: "Current choice · Geometric · Commanding",
  },
];

export function FontPreview() {
  return (
    <section className="bg-[#0A0A0A] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-white/30 px-4">
            Temporary — Font Preview
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <ul className="space-y-10">
          {FONTS.map((font) => (
            <li
              key={font.name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 pb-10 border-b border-white/8 last:border-0 last:pb-0"
            >
              <div className="w-52 shrink-0">
                <p className="text-xs font-sans font-semibold text-white/40 uppercase tracking-widest mb-1">
                  {font.name}
                </p>
                <p className="text-xs font-sans text-white/25 leading-snug">{font.tag}</p>
              </div>
              <p
                style={{ fontFamily: font.variable, fontWeight: font.weight }}
                className="text-5xl lg:text-6xl text-white leading-tight uppercase"
              >
                Lavelle Networks
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
