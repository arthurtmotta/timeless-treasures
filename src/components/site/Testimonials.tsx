const items = [
  {
    quote: "Encontrar a Maison Héritage foi como descobrir um arquivo vivo da história europeia. Cada peça que adquirimos transformou completamente a alma de nossa residência.",
    author: "Isabela Mendonça",
    role: "Arquiteta, São Paulo",
  },
  {
    quote: "O nível de cuidado na restauração é simplesmente inigualável. Recebi uma cômoda do século XVIII em condição superior à que esperava de um museu.",
    author: "Henrique Vasconcelos",
    role: "Colecionador particular, Lisboa",
  },
  {
    quote: "Atendimento discreto, refinado e profundamente conhecedor. É raro encontrar uma casa que respeite tanto a peça quanto o cliente.",
    author: "Marina Lacerda",
    role: "Designer de interiores, Paris",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-28 md:py-40 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Testemunhos</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="italic">Vozes</span> de quem confia.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((t) => (
            <figure key={t.author} className="border-t border-gold/40 pt-8">
              <div className="font-serif text-5xl text-gold leading-none mb-4">“</div>
              <blockquote className="font-serif text-xl leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-medium">{t.author}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};