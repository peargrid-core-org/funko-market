import Link from "next/link";
import { SearchIcon } from "./icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">F</span>
            <span className="font-display text-xl text-foreground hidden sm:block">FunkoMarket</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <SearchIcon className="text-muted group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Buscar Funko Pop..."
                className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-surface-alt/50 text-sm placeholder:text-muted focus:outline-none focus:border-primary focus:bg-white search-glow transition-all"
              />
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link href="/explorar" className="hidden lg:flex px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Explorar
            </Link>
            <Link href="/vender" className="hidden lg:flex px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Vender
            </Link>
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Entrar
            </Link>
            <Link href="/registro" className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors rounded-xl">
              Registro
            </Link>
          </nav>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <SearchIcon className="text-muted group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Buscar Funko Pop..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-border bg-surface-alt/50 text-sm placeholder:text-muted focus:outline-none focus:border-primary focus:bg-white search-glow transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
