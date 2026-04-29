import chair from "@/assets/chair.jpg";
import table from "@/assets/table.jpg";
import cabinet from "@/assets/cabinet.jpg";
import desk from "@/assets/desk.jpg";
import sofa from "@/assets/sofa.jpg";
import mirror from "@/assets/mirror.jpg";
import { Plus } from "lucide-react";

const items = [
  { img: chair, name: "Poltrona Vittoria", era: "Itália · Séc. XVIII", desc: "Esculpida à mão em mogno maciço com detalhes folheados a ouro." },
  { img: cabinet, name: "Armário Beaumont", era: "França · 1870", desc: "Mogno francês com ferragens em bronze cinzelado e pátina original." },
  { img: table, name: "Mesa Régence", era: "França · Séc. XIX", desc: "Tampo entalhado sobre base trifaceted com acabamento em verniz natural." },
  { img: desk, name: "Escrivaninha Médicis", era: "Florença · 1820", desc: "Marchetaria geométrica em raiz de nogueira com aplicações em latão." },
  { img: sofa, name: "Canapé Versalhes", era: "França · 1860", desc: "Capitonê em veludo italiano sobre estrutura entalhada em folha de ouro." },
  { img: mirror, name: "Espelho Florentino", era: "Itália · 1780", desc: "Moldura em pinho dourado com lavor barroco em folha de ouro 23k." },
];

export const Collection = () => {
  return (
    <section id="colecao" className="py-28 md:py-40 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Acervo</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Peças selecionadas <span className="italic">da nossa coleção privada.</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Uma seleção atual de móveis raros, autenticados e prontos para ocupar interiores excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {items.map((it, i) => (
            <article key={it.name} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-ink aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 bg-gold text-ink px-4 py-2 text-[10px] uppercase tracking-[0.3em]">
                    <Plus className="w-3 h-3" /> Detalhes
                  </span>
                </div>
                <span className="absolute top-5 left-5 text-bone/80 text-[10px] uppercase tracking-[0.3em]">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.era}</p>
                <h3 className="font-serif text-2xl mt-2 group-hover:text-gold transition-colors duration-300">{it.name}</h3>
                <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="#contato"
            className="inline-block text-xs uppercase tracking-[0.3em] text-foreground border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Solicitar acervo completo
          </a>
        </div>
      </div>
    </section>
  );
};