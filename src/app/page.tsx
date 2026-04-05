/* ─────────────────────────────────────────────
   FunkoMarket — Homepage
   ───────────────────────────────────────────── */

const CATEGORIES = [
  { name: "Marvel", emoji: "🦸", color: "from-red-500 to-red-700", count: 2_340 },
  { name: "DC Comics", emoji: "🦇", color: "from-blue-600 to-blue-900", count: 1_120 },
  { name: "Star Wars", emoji: "⚔️", color: "from-yellow-500 to-amber-700", count: 1_890 },
  { name: "Anime", emoji: "⛩️", color: "from-pink-500 to-purple-700", count: 3_210 },
  { name: "Disney", emoji: "🏰", color: "from-sky-400 to-indigo-600", count: 1_560 },
  { name: "Harry Potter", emoji: "⚡", color: "from-amber-600 to-yellow-900", count: 980 },
  { name: "Deportes", emoji: "⚽", color: "from-green-500 to-emerald-700", count: 670 },
  { name: "Gaming", emoji: "🎮", color: "from-violet-500 to-purple-800", count: 1_450 },
];

const CONDITIONS = ["Nuevo", "Como nuevo", "Bueno", "Sin caja"] as const;
type Condition = (typeof CONDITIONS)[number];

interface Listing {
  id: number;
  name: string;
  series: string;
  price: number;
  condition: Condition;
  seller: string;
  rating: number;
  isExclusive?: boolean;
}

const FEATURED_LISTINGS: Listing[] = [
  { id: 1, name: "Spider-Man (Symbiote)", series: "Marvel", price: 14.5, condition: "Nuevo", seller: "ComicStore_BCN", rating: 4.9, isExclusive: true },
  { id: 2, name: "Darth Vader (Chrome)", series: "Star Wars", price: 32.0, condition: "Nuevo", seller: "FunkoMadrid", rating: 4.8 },
  { id: 3, name: "Goku Ultra Instinct", series: "Dragon Ball", price: 18.9, condition: "Nuevo", seller: "OtakuShop", rating: 4.7 },
  { id: 4, name: "Batman (Hush)", series: "DC Comics", price: 22.5, condition: "Como nuevo", seller: "HeroesVLC", rating: 4.6 },
  { id: 5, name: "Hermione Granger", series: "Harry Potter", price: 11.0, condition: "Nuevo", seller: "WizardCollector", rating: 5.0 },
  { id: 6, name: "Pikachu (Flocked)", series: "Pokémon", price: 28.0, condition: "Nuevo", seller: "PokeStore_ES", rating: 4.9, isExclusive: true },
  { id: 7, name: "Elsa (Diamond)", series: "Disney", price: 19.9, condition: "Sin caja", seller: "DisneyFan_92", rating: 4.3 },
  { id: 8, name: "Master Chief", series: "Halo", price: 15.5, condition: "Bueno", seller: "GamerZone", rating: 4.5 },
];

const RECENT_LISTINGS: Listing[] = [
  { id: 9, name: "Naruto (Sage Mode)", series: "Naruto", price: 16.0, condition: "Nuevo", seller: "AnimeWorld_ES", rating: 4.8 },
  { id: 10, name: "Iron Man (Mark I)", series: "Marvel", price: 24.5, condition: "Nuevo", seller: "StarkCollector", rating: 4.7, isExclusive: true },
  { id: 11, name: "Grogu (The Child)", series: "Star Wars", price: 13.0, condition: "Como nuevo", seller: "MandoShop", rating: 4.6 },
  { id: 12, name: "Luffy Gear 5", series: "One Piece", price: 35.0, condition: "Nuevo", seller: "PirateKing_BCN", rating: 4.9 },
];

const PLACEHOLDER_COLORS = [
  "from-rose-200 to-pink-300",
  "from-sky-200 to-blue-300",
  "from-amber-200 to-yellow-300",
  "from-violet-200 to-purple-300",
  "from-emerald-200 to-green-300",
  "from-orange-200 to-red-300",
  "from-teal-200 to-cyan-300",
  "from-fuchsia-200 to-pink-300",
  "from-lime-200 to-green-300",
  "from-indigo-200 to-blue-300",
  "from-rose-200 to-orange-300",
  "from-cyan-200 to-teal-300",
];

function conditionColor(c: Condition) {
  switch (c) {
    case "Nuevo": return "bg-emerald-100 text-emerald-700";
    case "Como nuevo": return "bg-sky-100 text-sky-700";
    case "Bueno": return "bg-amber-100 text-amber-700";
    case "Sin caja": return "bg-slate-100 text-slate-600";
  }
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* ── Navbar ── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">F</span>
            <span className="font-display text-xl text-foreground hidden sm:block">FunkoMarket</span>
          </a>

          {/* Search bar — desktop */}
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

          {/* Nav links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <a href="#explorar" className="hidden lg:flex px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Explorar
            </a>
            <a href="#vender" className="hidden lg:flex px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Vender
            </a>
            <button className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-alt">
              Entrar
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors rounded-xl">
              Registro
            </button>
          </nav>
        </div>

        {/* Search bar — mobile */}
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

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="noise-bg absolute inset-0" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute -bottom-10 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-border-light text-sm font-medium text-muted mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            12.450+ Funkos listados
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tu Funko Pop favorito,{" "}
            <span className="text-primary italic">al mejor precio</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            El marketplace donde coleccionistas y tiendas compran y venden Funko Pops. Busca, compara y encuentra.
          </p>

          {/* Hero search */}
          <div className="mt-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg border border-border-light search-glow">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="text-muted" />
                </div>
                <input
                  type="text"
                  placeholder="¿Qué Funko buscas?"
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-transparent text-base placeholder:text-muted/70 focus:outline-none"
                />
              </div>
              <select className="h-12 px-4 rounded-xl border border-border bg-surface-alt/50 text-sm text-muted focus:outline-none focus:border-primary cursor-pointer">
                <option value="">Todas las categorías</option>
                {CATEGORIES.map(c => (
                  <option key={c.name} value={c.name}>{c.emoji} {c.name}</option>
                ))}
              </select>
              <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shrink-0">
                Buscar
              </button>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">12.450+</span> Funkos
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">3.200+</span> Vendedores
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-lg">8</span> Categorías
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Categories ── */
function Categories() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="explorar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">Categorías populares</h2>
            <p className="mt-2 text-muted">Explora por universo</p>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors hidden sm:block">
            Ver todas →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} transition-transform duration-500 group-hover:scale-110`} />
              <div className="category-overlay absolute inset-0" />

              {/* Emoji as large bg element */}
              <span className="absolute top-3 right-3 text-4xl sm:text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform">
                {cat.emoji}
              </span>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base sm:text-lg">{cat.name}</h3>
                <p className="text-white/70 text-xs mt-0.5">{cat.count.toLocaleString("es-ES")} productos</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Listing Card ── */
function ListingCard({ listing, index }: { listing: Listing; index: number }) {
  const gradientClass = PLACEHOLDER_COLORS[listing.id % PLACEHOLDER_COLORS.length];
  return (
    <div
      className="group bg-white rounded-2xl border border-border-light overflow-hidden card-hover"
      style={{ boxShadow: "var(--card-shadow)", animationDelay: `${index * 0.05}s` }}
    >
      {/* Image placeholder */}
      <div className={`relative aspect-square bg-gradient-to-br ${gradientClass}`}>
        {/* Funko silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-3/4 bg-white/20 rounded-t-full rounded-b-lg" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {listing.isExclusive && (
            <span className="px-2.5 py-1 bg-accent text-white text-xs font-bold rounded-lg shadow-sm">
              EXCLUSIVO
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-primary">
          <HeartIcon className="w-4 h-4" />
        </button>

        {/* Condition badge at bottom */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${conditionColor(listing.condition)}`}>
            {listing.condition}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs font-medium text-muted uppercase tracking-wide">{listing.series}</p>
        <h3 className="mt-1 font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {listing.name}
        </h3>

        <div className="mt-3 flex items-end justify-between">
          <span className="text-xl font-bold text-foreground">{listing.price.toFixed(2)}€</span>
          <div className="flex items-center gap-1 text-xs text-muted">
            <StarIcon className="text-accent" />
            <span className="font-medium">{listing.rating}</span>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-border-light flex items-center justify-between">
          <span className="text-xs text-muted truncate">{listing.seller}</span>
          <button className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors">
            Ver →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Listings Section ── */
function ListingsSection({ title, subtitle, listings, id }: { title: string; subtitle: string; listings: Listing[]; id?: string }) {
  return (
    <section className="py-16 sm:py-20" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">{title}</h2>
            <p className="mt-2 text-muted">{subtitle}</p>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors hidden sm:block">
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {listings.map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "🔍",
      title: "Busca tu Funko",
      desc: "Usa el buscador o explora por categorías. Filtra por precio, estado o serie.",
    },
    {
      num: "02",
      icon: "⚖️",
      title: "Compara precios",
      desc: "Ve todos los vendedores que tienen ese Funko, compara precios y condiciones.",
    },
    {
      num: "03",
      icon: "🤝",
      title: "Contacta al vendedor",
      desc: "Escribe al vendedor y cerrad la compra. Tú eliges cómo pagar y enviar.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">¿Cómo funciona?</h2>
          <p className="mt-2 text-muted">Tres pasos y ya tienes tu Funko</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center group">
              {/* Icon circle */}
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-2xl bg-surface-alt border border-border-light flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-full w-full h-px bg-border-light" />
              )}

              <h3 className="mt-5 font-bold text-foreground text-lg">{step.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASeller() {
  return (
    <section className="py-16 sm:py-20" id="vender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-slate-800 px-8 py-14 sm:px-16 sm:py-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl text-white">
              ¿Tienes Funkos para vender?
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-lg mx-auto">
              Crea tu tienda gratis en FunkoMarket. Llega a miles de coleccionistas que buscan exactamente lo que tú vendes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-colors text-base">
                Empieza a vender — gratis
              </button>
              <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors text-base border border-white/20">
                Cómo funciona
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Sin comisiones · Sin cuota mensual · Publica en menos de 1 minuto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">F</span>
              <span className="font-display text-xl">FunkoMarket</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              El marketplace de Funko Pop para coleccionistas en España y Europa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Marketplace</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Explorar</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Vender</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Tendencias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Soporte</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Guía del vendedor</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Política de privacidad</a></li>
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

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <ListingsSection
          title="Destacados"
          subtitle="Los Funkos más buscados del momento"
          listings={FEATURED_LISTINGS}
        />
        <HowItWorks />
        <ListingsSection
          title="Recién llegados"
          subtitle="Últimos Funkos publicados"
          listings={RECENT_LISTINGS}
          id="recientes"
        />
        <CTASeller />
      </main>
      <Footer />
    </>
  );
}
