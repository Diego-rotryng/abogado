export function ProcessTimeline() {
  const steps = [
    { t: "Primer contacto", d: "Escribinos por WhatsApp, email o el formulario. Te respondemos a la brevedad." },
    { t: "Consulta inicial", d: "Te escuchamos sin compromiso, analizamos la situación y te explicamos opciones." },
    { t: "Estrategia", d: "Definimos el plan legal, honorarios transparentes y plazos por escrito." },
    { t: "Acompañamiento", d: "Te mantenemos informado en cada etapa hasta resolver tu caso." },
  ];

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* animated SVG path connecting steps - desktop only */}
      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="tl-gold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#b8893a" stopOpacity="0"/>
            <stop offset="20%" stopColor="#f4d98a"/>
            <stop offset="80%" stopColor="#f4d98a"/>
            <stop offset="100%" stopColor="#b8893a" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path
          d="M50 80 Q 250 20, 375 80 T 700 80 T 950 80"
          stroke="url(#tl-gold)" strokeWidth="1.5" fill="none"
          strokeDasharray="2400" strokeDashoffset="2400"
          style={{ animation: "draw 3s ease-out forwards" }}
        />
      </svg>

      <ol className="relative grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.t} className="group relative text-center" style={{ animation: `fade-up .8s ease-out ${i * 0.15}s both` }}>
            <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-background font-serif text-2xl text-[var(--gold)] shadow-[var(--shadow-gold)] transition group-hover:scale-110">
              {String(i + 1).padStart(2, "0")}
              <span className="absolute inset-0 rounded-full border border-[var(--gold)]/40 animate-ping" style={{ animationDelay: `${i * 0.4}s`, animationDuration: "3s" }}/>
            </div>
            <h3 className="font-serif text-xl text-ink">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
