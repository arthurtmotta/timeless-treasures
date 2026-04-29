import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    toast.success("Mensagem recebida", { description: "Nossa equipe entrará em contato em breve." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-28 md:py-40 bg-ink text-bone">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Contato</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Vamos conversar sobre <span className="italic">a sua próxima peça.</span>
          </h2>
          <p className="mt-8 text-bone/70 leading-relaxed max-w-md">
            Atendimento privado, sob agendamento. Receba nosso catálogo confidencial ou marque uma visita ao nosso atelier.
          </p>

          <div className="mt-12 space-y-6">
            <a href="tel:+551130001000" className="flex items-start gap-5 group">
              <Phone className="w-5 h-5 text-gold mt-1" strokeWidth={1.2} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">Telefone</div>
                <div className="text-lg group-hover:text-gold transition-colors">+55 (11) 3000-1000</div>
              </div>
            </a>
            <a href="mailto:contato@maisonheritage.com" className="flex items-start gap-5 group">
              <Mail className="w-5 h-5 text-gold mt-1" strokeWidth={1.2} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">E-mail</div>
                <div className="text-lg group-hover:text-gold transition-colors">contato@maisonheritage.com</div>
              </div>
            </a>
            <div className="flex items-start gap-5">
              <MapPin className="w-5 h-5 text-gold mt-1" strokeWidth={1.2} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">Atelier</div>
                <div className="text-lg">Rua Oscar Freire, 1908 — São Paulo</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-8 lg:pl-8 lg:border-l lg:border-bone/15">
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-bone/60">Nome</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-3 bg-transparent border-b border-bone/25 py-3 focus:border-gold outline-none transition-colors text-bone placeholder:text-bone/30"
              placeholder="Como devemos chamá-lo(a)"
              maxLength={100}
            />
            {errors.name && <p className="text-destructive-foreground/90 text-xs mt-2">{errors.name}</p>}
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-bone/60">E-mail</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-3 bg-transparent border-b border-bone/25 py-3 focus:border-gold outline-none transition-colors text-bone placeholder:text-bone/30"
              placeholder="seu@email.com"
              maxLength={255}
            />
            {errors.email && <p className="text-destructive-foreground/90 text-xs mt-2">{errors.email}</p>}
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-bone/60">Mensagem</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-3 bg-transparent border-b border-bone/25 py-3 focus:border-gold outline-none transition-colors text-bone placeholder:text-bone/30 resize-none"
              placeholder="Como podemos ajudar?"
              maxLength={1000}
            />
            {errors.message && <p className="text-destructive-foreground/90 text-xs mt-2">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-3 bg-gold text-ink px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-bone transition-colors duration-500"
          >
            Enviar
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};