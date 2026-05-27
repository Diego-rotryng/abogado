import { useState } from "react";

const faqs = [
  { q: "¿La primera consulta tiene costo?", a: "No. La consulta inicial es sin compromiso. Escuchamos tu caso, te orientamos y recién entonces evaluamos juntos cómo continuar." },
  { q: "¿Atienden casos fuera de Buenos Aires?", a: "Sí. Trabajamos con clientes en todo el país de forma presencial o virtual mediante videollamada, firma digital y envío seguro de documentación." },
  { q: "¿Cómo se cobran los honorarios?", a: "Trabajamos con honorarios transparentes pactados previamente por escrito. Según el caso pueden ser fijos, por etapas o sujetos a resultado." },
  { q: "¿En cuánto tiempo me responden?", a: "Respondemos consultas dentro de las 24 horas hábiles, generalmente mucho antes por WhatsApp." },
  { q: "¿Manejan reajustes de jubilación?", a: "Sí. Iniciamos y reclamamos reajustes de haberes ante ANSES y la justicia previsional, incluyendo pensiones por fallecimiento." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/60 backdrop-blur">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-secondary/50"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-ink">{f.q}</span>
              <svg className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform ${isOpen ? "rotate-45" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="min-h-0">
                <p className="px-6 pb-5 text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
