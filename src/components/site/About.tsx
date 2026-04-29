import aboutImg from "@/assets/about.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-28 md:py-40 bg-background">
      <div className="container grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 border border-gold/30 -z-10" />
          <img
            src={aboutImg}
            alt="Atelier de restauração de móveis antigos"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full aspect-square object-cover shadow-elegant"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">A Casa</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight gold-line">
            Quatro gerações<br />
            <span className="italic">a serviço da</span> beleza rara.
          </h2>
          <div className="mt-10 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              Fundada em 1908, a Maison Héritage nasceu da paixão por preservar o que o tempo recusa-se a esquecer. Cada peça em nosso acervo é fruto de uma curadoria meticulosa, feita por especialistas que percorrem leilões e propriedades históricas em toda a Europa.
            </p>
            <p>
              Acreditamos que um móvel antigo carrega histórias — e merece ser tratado com a reverência de uma obra de arte. Por isso, nosso atelier reúne mestres restauradores, marceneiros e historiadores dedicados a devolver a cada peça o esplendor original.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            <div>
              <div className="font-serif text-4xl text-gold">115+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Anos de tradição</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-gold">1.200</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Peças autenticadas</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-gold">42</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Países atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};