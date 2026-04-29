import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Collection } from "@/components/site/Collection";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => (
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

export default Index;
