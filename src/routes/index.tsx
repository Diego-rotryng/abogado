import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import justiceImg from "@/assets/justice.jpg";
import { ScalesSVG } from "@/components/ScalesSVG";
import { Ornament } from "@/components/Ornament";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrnateFrame } from "@/components/OrnateFrame";
import { WaxSeal } from "@/components/WaxSeal";
import { GoldParticles } from "@/components/GoldParticles";
import { Counter } from "@/components/Counter";
import { FAQ } from "@/components/FAQ";
import { ProcessTimeline } from "@/components/ProcessTimeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mariano José Constenla — Estudio Jurídico Premium" },
      { name: "description", content: "Asesoramiento integral en Derecho: Sucesiones, Familia, Laboral, Jubilaciones y Pensiones. Atención personalizada y trayectoria comprobada." },
    ],
  }),
  component: Index,
});

const PHONE = "11 5112-8267";
const PHONE_INTL = "5491151128267";
const PHONE2 = "15 2464-5275";
const EMAIL1 = "marianoconstenla7.mc@gmail.com";
const EMAIL2 = "marianoconstenla@hotmail.com";

const areas = [
  { title: "Sucesiones", desc: "Procesos sucesorios, herencias, declaratorias y particiones.", icon: <TreeIcon /> },
  { title: "Familia", desc: "Divorcios, alimentos, régimen de comunicación y tenencia.", icon: <FamilyIcon /> },
  { title: "Laboral", desc: "Despidos, indemnizaciones, diferencias salariales y registración.", icon: <BriefcaseIcon /> },
  { title: "Jubilaciones y Pensiones", desc: "Reajustes de haberes, pensiones y trámites previsionales.", icon: <ChairIcon /> },
];

const testimonios = [
  { n: "Verónica L.", t: "Cliente · Sucesiones", q: "El Dr. Constenla manejó la sucesión de mi padre con una claridad y trato humano que no esperaba. Hizo simple algo que parecía imposible." },
  { n: "Hernán P.", t: "Cliente · Laboral", q: "Me orientó desde el primer mensaje por WhatsApp. Logramos un acuerdo mucho mejor del que esperaba, en tiempo récord." },
  { n: "María Inés G.", t: "Cliente · Jubilación", q: "Después de años trabados con ANSES, logró el reajuste de mi jubilación. Profesional, paciente y siempre disponible." },
];

function Index() {
  return (
    <div className="min-h-screen paper text-foreground">
      <Toaster richColors position="top-center" />
      <WhatsAppFloat />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[var(--gold)]/20 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <ScalesSVG className="h-9 w-9 text-[var(--gold)]" />
            <div className="leading-tight">
              <div className="font-serif text-lg italic text-ink">Mariano J. Constenla</div>
              <div className="text-[10px] tracking-[0.35em] text-[var(--gold)]">ABOGADO</div>
            </div>
          </a>
          <ul className="hidden gap-8 text-sm md:flex">
            {[
              ["Áreas", "#areas"], ["Proceso", "#proceso"], ["Estudio", "#about"],
              ["Testimonios", "#testimonios"], ["FAQ", "#faq"], ["Contacto", "#contacto"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="relative text-foreground/80 transition hover:text-[var(--gold)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--gold)] after:transition-transform hover:after:scale-x-100">{l}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="hidden rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.03] md:inline-block">
            Consultar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <GoldParticles className="absolute inset-0 h-full w-full opacity-70" />

        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-32 select-none text-center font-serif text-[28vw] leading-none tracking-tighter text-[var(--gold)]/5 md:text-[18vw]">
          IVSTITIA
        </div>

        <svg aria-hidden className="pointer-events-none absolute -right-32 top-10 hidden h-[480px] w-[480px] text-[var(--gold)]/10 md:block animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <path id="circlePath" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
          </defs>
          <text fontSize="9" fill="currentColor" letterSpacing="6">
            <textPath href="#circlePath">
              · DERECHO · CONFIANZA · COMPROMISO · TU DERECHO NUESTRA VOCACION ·
            </textPath>
          </text>
        </svg>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.05fr_.95fr] md:pt-20">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-background/60 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">Estudio Jurídico · Buenos Aires</span>
            </div>

            <h1 className="font-serif text-[2.75rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl">
              Asesoramiento <br/>
              <span className="italic gold-foil">integral</span> en <br/>
              <span className="font-semibold">Derecho.</span>
            </h1>

            <Ornament className="my-6 h-4 w-72 text-[var(--gold)]" />

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Te acompañamos con orientación legal clara, profesional y profundamente personalizada.
            </p>
            <p className="mt-2 max-w-lg font-serif text-xl italic text-ink/80">
              "Tu derecho, nuestra vocación."
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent("Hola Dr. Constenla, quisiera realizar una consulta.")}`} target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.03]">
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(244,217,138,.4),transparent)] bg-[length:200%_100%]" style={{ animation: "shimmer 3s linear infinite" }}/>
                <WAIcon className="relative z-10 h-4 w-4"/>
                <span className="relative z-10">Consulta inmediata</span>
              </a>
              <a href="#areas" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Áreas de práctica
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round"/></svg>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Teléfono</div>
                <a href={`tel:+${PHONE_INTL}`} className="font-serif text-xl text-ink hover:text-[var(--gold)]">{PHONE}</a>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Celular</div>
                <span className="font-serif text-xl text-ink">{PHONE2}</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-3xl bg-[var(--gradient-gold)] opacity-25 blur-3xl" />
            <div className="relative aspect-[3/4]">
              <OrnateFrame className="absolute inset-0 z-20 h-full w-full" />
              <div className="absolute inset-4 overflow-hidden">
                <img src={justiceImg} alt="Estatua de la Justicia" width={1024} height={1536}
                  className="h-full w-full object-cover animate-float"/>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
              </div>
              <div className="absolute -bottom-6 -right-4 z-30 animate-float" style={{ animationDelay: "0.6s" }}>
                <WaxSeal className="h-28 w-28 drop-shadow-[0_8px_20px_rgba(58,36,16,0.5)]" />
              </div>
              <div className="absolute -left-3 top-8 z-30 rounded-r-md border border-[var(--gold)]/40 bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                <div className="text-[9px] uppercase tracking-[0.3em] text-[var(--gold)]">Matrícula</div>
                <div className="font-serif text-sm">C.P.A.C.F.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-6 text-center">
          <svg className="mx-auto h-6 w-6 animate-bounce text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" strokeLinecap="round"/></svg>
        </div>
      </section>

      {/* MARQUEE BAR */}
      <div className="overflow-hidden border-y border-[var(--gold)]/20 bg-primary/95 py-4 text-primary-foreground">
        <div className="flex gap-12 whitespace-nowrap font-serif text-sm uppercase tracking-[0.4em] text-[var(--gold-soft)]">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12">
              {["Sucesiones", "Familia", "Laboral", "Jubilaciones", "Reajustes", "Pensiones", "Divorcios", "Herencias"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  <span>{w}</span>
                  <span className="text-[var(--gold)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ÁREAS */}
      <section id="areas" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Header eyebrow="Práctica Profesional" title="Áreas de asesoramiento" subtitle="Atención personalizada en las principales ramas del derecho." />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <article key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[var(--shadow-elegant)]"
                style={{ animation: `rise .9s ease-out ${i * 0.1}s both` }}>
                <span className="corner-deco absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-gold)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30" />

                <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[var(--gold-soft)] shadow-inner transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {a.icon}
                </div>
                <h3 className="font-serif text-xl text-ink">{a.title}</h3>
                <div className="my-3 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
                <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                <a href="#contacto" className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[var(--gold)] opacity-0 transition group-hover:opacity-100">
                  Consultar →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Header eyebrow="Cómo trabajamos" title="Un proceso claro y humano" subtitle="Cuatro pasos para resolver tu situación con tranquilidad." />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section id="about" className="relative overflow-hidden bg-primary text-primary-foreground">
        <svg className="absolute inset-x-0 top-0 h-12 w-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0 0 Q600 80 1200 0 L1200 0 L0 0 Z" fill="var(--cream)" />
        </svg>
        <GoldParticles className="absolute inset-0 h-full w-full opacity-40" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <WaxSeal className="mx-auto h-20 w-20" />
          <Ornament className="mx-auto my-5 h-4 w-72 text-[var(--gold)]" />
          <h2 className="font-serif text-4xl md:text-6xl">
            <span className="gold-foil">Derecho</span> · <span className="gold-foil">Confianza</span> · <span className="gold-foil">Compromiso</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Más que un servicio legal, un acompañamiento humano. Cada caso recibe la dedicación,
            la escucha y la estrategia que merece. Trabajamos para que entiendas cada paso
            y tomes decisiones con verdadera claridad.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: 15, suffix: "+", l: "Años de experiencia" },
              { n: 500, suffix: "+", l: "Consultas atendidas" },
              { n: 24, suffix: "h", l: "Tiempo de respuesta" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-[var(--gold)]/30 bg-white/[0.04] p-8 backdrop-blur transition hover:border-[var(--gold)] hover:bg-white/[0.07]">
                <div className="font-serif text-6xl gold-foil">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute inset-x-0 bottom-0 h-12 w-full rotate-180" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0 0 Q600 80 1200 0 L1200 0 L0 0 Z" fill="var(--cream)" />
        </svg>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Header eyebrow="Lo que dicen nuestros clientes" title="Testimonios" subtitle="Confianza construida caso por caso." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonios.map((t, i) => (
              <figure key={t.n}
                className="parchment relative rounded-2xl p-7"
                style={{ animation: `rise .9s ease-out ${i * 0.12}s both` }}>
                <svg className="absolute -top-4 left-6 h-10 w-10 text-[var(--gold)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2c3.866 0 7-3.134 7-7V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2c3.866 0 7-3.134 7-7V9a2 2 0 00-2-2z"/>
                </svg>
                <blockquote className="font-serif text-lg italic leading-relaxed text-ink">"{t.q}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-serif text-base text-ink">{t.n}</div>
                  <div className="text-xs uppercase tracking-widest text-[var(--gold)]">{t.t}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Header eyebrow="Preguntas frecuentes" title="¿Te quedan dudas?" subtitle="Respondemos lo que más nos consultan antes de la primera reunión." />
          <div className="mt-14">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative overflow-hidden py-24">
        <GoldParticles className="absolute inset-0 h-full w-full opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">Acércate a consultar</span>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Sin compromiso.</h2>
            <Ornament className="my-5 h-4 w-56 text-[var(--gold)]" />
            <p className="max-w-md text-muted-foreground">
              Escribinos por el medio que prefieras. Te respondemos a la brevedad con la orientación que necesitás.
            </p>

            <ul className="mt-8 space-y-3">
              <ContactLink href={`https://wa.me/${PHONE_INTL}`} label="WhatsApp" value={PHONE} icon={<WAIcon className="h-5 w-5"/>}/>
              <ContactLink href={`tel:+${PHONE_INTL}`} label="Teléfono" value={PHONE} icon={<PhoneIcon/>}/>
              <ContactLink href={`mailto:${EMAIL1}`} label="Email principal" value={EMAIL1} icon={<MailIcon/>}/>
              <ContactLink href={`mailto:${EMAIL2}`} label="Email alternativo" value={EMAIL2} icon={<MailIcon/>}/>
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-card px-4 py-2 text-xs uppercase tracking-widest text-[var(--gold)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75"/>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--gold)]"/>
              </span>
              Atención disponible hoy
            </div>
          </div>

          <div className="relative rounded-2xl border border-border bg-card/90 p-8 shadow-[var(--shadow-elegant)] backdrop-blur">
            <span className="corner-deco absolute inset-0" />
            <div className="absolute -top-4 left-8 rounded-full bg-primary px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground shadow-md">
              Formulario de contacto
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-[var(--gold)]/20 bg-primary py-14 text-primary-foreground">
        <GoldParticles className="absolute inset-0 h-full w-full opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <ScalesSVG className="mx-auto h-12 w-12 text-[var(--gold)]" />
          <div className="mt-4 font-serif text-2xl italic">Mariano José Constenla</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Abogado · C.P.A.C.F.</div>
          <Ornament className="mx-auto my-6 h-4 w-72 text-[var(--gold)]" />
          <p className="font-serif text-lg tracking-[0.3em] gold-foil">
            DERECHO · CONFIANZA · COMPROMISO
          </p>
          <p className="mt-2 text-xs italic text-primary-foreground/60">Tu derecho, nuestra vocación.</p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-sm sm:grid-cols-2">
            <a href={`mailto:${EMAIL1}`} className="text-primary-foreground/70 transition hover:text-[var(--gold)]">{EMAIL1}</a>
            <a href={`tel:+${PHONE_INTL}`} className="text-primary-foreground/70 transition hover:text-[var(--gold)]">{PHONE} · {PHONE2}</a>
          </div>

          <div className="mt-10 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Estudio Jurídico Constenla. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Header({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="ornate-hr mx-auto my-6 w-64" />
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function ContactLink({ href, label, value, icon }: { href: string; label: string; value: string; icon: React.ReactNode }) {
  return (
    <li>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-[var(--gold-soft)] transition group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
          <span className="block truncate font-serif text-base text-ink sm:text-lg">{value}</span>
        </span>
        <svg className="h-4 w-4 shrink-0 text-[var(--gold)] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round"/></svg>
      </a>
    </li>
  );
}

/* === ICONS === */
function WAIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/>
    </svg>
  );
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
}
function TreeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5"><path d="M12 3c-3 3-5 5-5 8a5 5 0 0010 0c0-3-2-5-5-8z"/><path d="M12 13v8M8 21h8" strokeLinecap="round"/></svg>;
}
function FamilyIcon() {
  return <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><circle cx="12" cy="15" r="1.8"/><path d="M3 20c.5-3 2.5-5 5-5M21 20c-.5-3-2.5-5-5-5M9 21c.5-2 1.5-3 3-3s2.5 1 3 3" strokeLinecap="round"/></svg>;
}
function BriefcaseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></svg>;
}
function ChairIcon() {
  return <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.5"><path d="M5 20c1-4 4-6 7-6s6 2 7 6M4 21h16" strokeLinecap="round"/><circle cx="12" cy="7" r="3"/></svg>;
}
