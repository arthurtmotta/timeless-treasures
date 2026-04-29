export const Footer = () => {
  return (
    <footer className="bg-ink text-bone/60 border-t border-bone/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.25em]">
        <div>
          Maison <span className="text-gold italic">Héritage</span> · Desde 1908
        </div>
        <div className="text-bone/40">© {new Date().getFullYear()} Todos os direitos reservados</div>
      </div>
    </footer>
  );
};