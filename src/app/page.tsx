import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ListingCard } from "@/components/listing-card";
import { SearchIcon, StarIcon } from "@/components/icons";
import { ALL_LISTINGS, CATEGORIES } from "@/lib/data";
import Link from "next/link";

const FEATURED = ALL_LISTINGS.slice(0, 8);
const RECENT = ALL_LISTINGS.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 4);

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="noise-bg absolute inset-0" />
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute -bottom-10 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-border-light text-sm font-medium text-muted mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            12.450+ Funkos listados
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tu Funko Pop favorito,{" "}
            <span className="text-primary italic">al mejor precio</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            El marketplace donde coleccionistas y tiendas compran y venden Funko Pops. Busca, compara y encuentra.
          </p>

          <div className="mt-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg border border-border-light search-glow">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="text-muted" />
                </div>
                <input type="text" placeholder="¿Qué Funko buscas?" className="w-full h-12 pl-11 pr-4 rounded-xl bg-transparent text-base placeholder:text-muted/70 focus:outline-none" />
              </div>
              <select className="h-12 px-4 rounded-xl border border-border bg-surface-alt/50 text-sm text-muted focus:outline-none focus:border-primary cursor-pointer">
                <option value="">Todas las categorías</option>
                {CATEGORIES.map(c => (<option key={c.name} value={c.name}>{c.emoji} {c.name}</option>))}
              </select>
              <Link href="/explorar" className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shrink-0 flex items-center justify-center">
                Buscar
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2"><span className="font-bold text-foreground text-lg">12.450+</span> Funkos</div>
            <div className="flex items-center gap-2"><span className="font-bold text-foreground text-lg">3.200+</span> Vendedores</div>
            <div className="flex items-center gap-2"><span className="font-bold text-foreground text-lg">8</span> Categorías</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Categories ── */
function Categories() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Categorías populares</h2>
            <p className="mt-2 text-muted">Explora por universo</p>
          </div>
          <Link href="/explorar" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors hidden sm:block">Ver todas →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href="/explorar" className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} transition-transform duration-500 group-hover:scale-110`} />
              <div className="category-overlay absolute inset-0" />
              <span className="absolute top-3 right-3 text-4xl sm:text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform">{cat.emoji}</span>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base sm:text-lg">{cat.name}</h3>
                <p className="text-white/70 text-xs mt-0.5">{cat.count.toLocaleString("es-ES")} productos</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Listings Section ── */
function ListingsSection({ title, subtitle, listings }: { title: string; subtitle: string; listings: typeof ALL_LISTINGS }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">{title}</h2>
            <p className="mt-2 text-muted">{subtitle}</p>
          </div>
          <Link href="/explorar" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors hidden sm:block">Ver todos →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {listings.map((listing) => (<ListingCard key={listing.id} listing={listing} />))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { num: "01", icon: "🔍", title: "Busca tu Funko", desc: "Usa el buscador o explora por categorías. Filtra por precio, estado o serie." },
    { num: "02", icon: "⚖️", title: "Compara precios", desc: "Ve todos los vendedores que tienen ese Funko, compara precios y condiciones." },
    { num: "03", icon: "🤝", title: "Contacta al vendedor", desc: "Escribe al vendedor y cerrad la compra. Tú eliges cómo pagar y enviar." },
  ];
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">¿Cómo funciona?</h2>
          <p className="mt-2 text-muted">Tres pasos y ya tienes tu Funko</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center group">
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-2xl bg-surface-alt border border-border-light flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">{step.num}</span>
              </div>
              <h3 className="mt-5 font-bold text-foreground text-lg">{step.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTASeller() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-slate-800 px-8 py-14 sm:px-16 sm:py-20 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl text-white">¿Tienes Funkos para vender?</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-lg mx-auto">Crea tu tienda gratis en FunkoMarket. Llega a miles de coleccionistas que buscan exactamente lo que tú vendes.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vender" className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-colors text-base">Empieza a vender — gratis</Link>
              <Link href="/registro" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors text-base border border-white/20">Crear cuenta</Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">Sin comisiones · Sin cuota mensual · Publica en menos de 1 minuto</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <ListingsSection title="Destacados" subtitle="Los Funkos más buscados del momento" listings={FEATURED} />
        <HowItWorks />
        <ListingsSection title="Recién llegados" subtitle="Últimos Funkos publicados" listings={RECENT} />
        <CTASeller />
      </main>
      <Footer />
    </>
  );
}
