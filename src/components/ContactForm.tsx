import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const area = String(fd.get("area") || "Consulta general");
    const mensaje = String(fd.get("mensaje") || "").trim();

    if (!nombre || nombre.length > 100) return fail("Ingresá un nombre válido");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return fail("Email inválido");
    if (!mensaje || mensaje.length > 1500) return fail("El mensaje no puede estar vacío");

    const body = `Hola Dr. Constenla,\n\nMi nombre es ${nombre}.\nÁrea: ${area}\n\n${mensaje}\n\nContacto: ${email}`;
    const wa = `https://wa.me/5491151128267?text=${encodeURIComponent(body)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    toast.success("Abriendo WhatsApp para enviar tu consulta…");
    setLoading(false);
    (e.target as HTMLFormElement).reset();

    function fail(msg: string) {
      toast.error(msg);
      setLoading(false);
      return;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre y apellido" name="nombre" required maxLength={100} />
        <Field label="Email" name="email" type="email" required maxLength={200} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">Área de consulta</label>
        <select
          name="area"
          className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-foreground outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30"
        >
          <option>Sucesiones</option>
          <option>Familia</option>
          <option>Laboral</option>
          <option>Jubilaciones, reajustes y pensiones</option>
          <option>Otra consulta</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">Tu mensaje</label>
        <textarea
          name="mensaje"
          rows={5}
          maxLength={1500}
          required
          className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-foreground outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30"
          placeholder="Contame brevemente tu situación…"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.01]"
      >
        <span className="relative z-10">Enviar consulta por WhatsApp</span>
        <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)] bg-[length:200%_100%]"
          style={{ animation: "shimmer 3s linear infinite" }} />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Respuesta rápida — sin compromiso.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required, maxLength }:
  { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground/80">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-foreground outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30"
      />
    </div>
  );
}
