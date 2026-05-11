import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Collection } from "@/components/site/Collection";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect, useState } from "react";
import { fetchPagina } from "../utils/fetchPagina";
import { parseContent } from "../utils/parseContent";

// Após os imports e antes do "const NomeDoComponente = () => {".
type Conteudo = ReturnType<typeof parseContent>;

const Index = () => {
  const [conteudo, setConteudo] = useState<Conteudo | null>(null);
  useEffect(() => {
    fetchPagina("pagina-1")
      .then(pagina => {
        // fetchPagina trouxe o JSON completo da página
        // parseContent separa o HTML em paragrafos, titulos, imagens...
        const elementos = parseContent(pagina.content.rendered);
        setConteudo(elementos);
      })
      .catch(() => {
        console.warn("Não foi possível buscar o conteúdo do WordPress.");
      });
  }, []);
  
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
