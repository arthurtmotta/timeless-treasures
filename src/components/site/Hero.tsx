import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Salão de móveis antigos de luxo iluminado por candelabros dourados"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover animate-scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="container relative z-10 pb-24 pt-40 md:pb-32">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-8">
            ⸺ Curadoria desde 1908
          </p>
          <h1 className="font-serif text-bone text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
            Elegância que<br />
            <span className="italic text-gold-soft">atravessa</span> gerações.
          </h1>
          <p className="mt-8 text-bone/80 text-lg max-w-xl font-light leading-relaxed">
            Antiguidades refinadas, restauradas com mestria e selecionadas para quem reconhece o silêncio elegante do tempo.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#colecao"
              className="group inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-bone transition-all duration-500"
            >
              Explorar coleção
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-3 border border-bone/40 text-bone px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-bone/10 transition-all duration-500"
            >
              Nossa história
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-bone/60 text-[10px] uppercase tracking-[0.4em] animate-fade-in-slow">
        Role para descobrir
      </div>
    </section>
  );
};