import { ShieldCheck, Hammer, Sparkles, Globe2 } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Autenticidade certificada", text: "Cada peça acompanha laudo de procedência, datação e histórico documentado por especialistas." },
  { icon: Hammer, title: "Restauração de mestres", text: "Atelier próprio com técnicas tradicionais de marcenaria, douração e tapeçaria artesanal." },
  { icon: Sparkles, title: "Atendimento privado", text: "Consultoria individual presencial ou remota, com curadoria sob medida para o seu projeto." },
  { icon: Globe2, title: "Logística internacional", text: "Embalagem museológica e transporte assegurado para qualquer destino do mundo." },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-28 md:py-40 bg-ink text-bone relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,hsl(var(--gold))_0%,transparent_50%)]" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Por que a Maison</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight gold-line-center">
            O cuidado que <span className="italic">o extraordinário exige.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-ink p-10 group hover:bg-ink-soft transition-colors duration-500">
              <Icon className="w-8 h-8 text-gold mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mb-4">{title}</h3>
              <p className="text-bone/65 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};