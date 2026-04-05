import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">F</span>
              <span className="font-display text-xl">FunkoMarket</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              El marketplace de Funko Pop para coleccionistas en España y Europa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Marketplace</h4>
            <ul className="space-y-2.5">
              <li><Link href="/explorar" className="text-sm text-slate-300 hover:text-white transition-colors">Explorar</Link></li>
              <li><Link href="/explorar" className="text-sm text-slate-300 hover:text-white transition-colors">Categorías</Link></li>
              <li><Link href="/vender" className="text-sm text-slate-300 hover:text-white transition-colors">Vender</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Soporte</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 FunkoMarket. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-500">Un proyecto PearGrid</p>
        </div>
      </div>
    </footer>
  );
}
