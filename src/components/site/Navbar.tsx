import { useEffect, useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Coleção", href: "#colecao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className={`font-serif text-2xl tracking-wide ${scrolled ? "text-foreground" : "text-bone"}`}>
            Maison <span className="text-gold italic">Héritage</span>
          </span>
          <span className={`text-[10px] tracking-[0.4em] uppercase mt-1 ${scrolled ? "text-muted-foreground" : "text-bone/70"}`}>
            Antiguidades · 1908
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.25em] transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-bone/85"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className={`hidden md:inline-block text-xs uppercase tracking-[0.25em] border px-5 py-2.5 transition-all ${
            scrolled
              ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              : "border-bone/40 text-bone hover:bg-bone hover:text-ink"
          }`}
        >
          Agende uma visita
        </a>
      </div>
    </header>
  );
};