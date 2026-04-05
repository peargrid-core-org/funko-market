import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StarIcon, MessageIcon, MapPinIcon } from "@/components/icons";
import { FUNKO_CATALOG, ALL_LISTINGS, SELLERS, PLACEHOLDER_COLORS, conditionColor } from "@/lib/data";

export default async function FunkoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const funkoId = parseInt(id, 10);
  const funko = FUNKO_CATALOG.find((f) => f.id === funkoId);
  const listings = ALL_LISTINGS.filter((l) => l.funkoId === funkoId).sort((a, b) => a.price - b.price);
  const gradientClass = PLACEHOLDER_COLORS[(funkoId || 0) % PLACEHOLDER_COLORS.length];

  if (!funko) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-5xl mb-4">😕</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">Funko no encontrado</h1>
            <p className="text-muted mb-6">No hemos encontrado ningún Funko con ese ID</p>
            <Link href="/explorar" className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
              Explorar catálogo
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const minPrice = listings.length > 0 ? Math.min(...listings.map(l => l.price)) : 0;
  const totalSellers = new Set(listings.map(l => l.sellerId)).size;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/explorar" className="hover:text-foreground transition-colors">Explorar</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{funko.name}</span>
            </nav>
          </div>
        </div>

        {/* Product detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 h-2/3 bg-white/20 rounded-t-full rounded-b-lg" />
              </div>
              {funko.isExclusive && (
                <span className="absolute top-5 left-5 px-3 py-1.5 bg-accent text-white text-sm font-bold rounded-xl shadow-md">
                  EXCLUSIVO
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">{funko.series}</p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl text-foreground">{funko.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span>#{funko.number}</span>
                <span>·</span>
                <span>{funko.year}</span>
                <span>·</span>
                <span>{funko.category}</span>
              </div>

              <p className="mt-6 text-muted leading-relaxed">{funko.description}</p>

              {/* Price summary */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-border-light" style={{ boxShadow: "var(--card-shadow)" }}>
                {listings.length > 0 ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted">Desde</span>
                      <span className="text-3xl font-bold text-foreground">{minPrice.toFixed(2)}€</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {totalSellers} {totalSellers === 1 ? "vendedor" : "vendedores"} · {listings.length} {listings.length === 1 ? "oferta" : "ofertas"}
                    </p>
                  </>
                ) : (
                  <p className="text-muted">No hay ofertas disponibles actualmente</p>
                )}
              </div>
            </div>
          </div>

          {/* Sellers table */}
          {listings.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-2xl text-foreground mb-6">
                Ofertas disponibles
                <span className="ml-2 text-base font-normal text-muted">({listings.length})</span>
              </h2>

              <div className="bg-white rounded-2xl border border-border-light overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
                {/* Header */}
                <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-surface-alt/50 text-xs font-semibold text-muted uppercase tracking-wide border-b border-border-light">
                  <div className="col-span-4">Vendedor</div>
                  <div className="col-span-2">Estado</div>
                  <div className="col-span-2">Valoración</div>
                  <div className="col-span-2">Precio</div>
                  <div className="col-span-2"></div>
                </div>

                {/* Rows */}
                {listings.map((listing, i) => {
                  const seller = SELLERS.find(s => s.id === listing.sellerId);
                  return (
                    <div
                      key={listing.id}
                      className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-4 items-center hover:bg-surface-alt/30 transition-colors ${
                        i < listings.length - 1 ? "border-b border-border-light" : ""
                      }`}
                    >
                      {/* Seller */}
                      <div className="sm:col-span-4">
                        <Link href={`/vendedor/${listing.sellerId}`} className="font-semibold text-foreground hover:text-primary transition-colors text-sm">
                          {listing.seller}
                        </Link>
                        {seller && (
                          <div className="flex items-center gap-1 mt-0.5 text-xs text-muted">
                            <MapPinIcon className="w-3 h-3" />
                            {seller.location}
                            <span className="ml-1">· {seller.totalSales} ventas</span>
                          </div>
                        )}
                      </div>

                      {/* Condition */}
                      <div className="sm:col-span-2">
                        <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg ${conditionColor(listing.condition)}`}>
                          {listing.condition}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="sm:col-span-2 flex items-center gap-1">
                        <StarIcon className="text-accent" />
                        <span className="text-sm font-medium">{listing.rating}</span>
                      </div>

                      {/* Price */}
                      <div className="sm:col-span-2">
                        <span className="text-lg font-bold text-foreground">{listing.price.toFixed(2)}€</span>
                      </div>

                      {/* Action */}
                      <div className="sm:col-span-2 flex justify-end">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-colors">
                          <MessageIcon className="w-4 h-4" />
                          Contactar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
