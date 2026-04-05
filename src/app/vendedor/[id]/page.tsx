import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ListingCard } from "@/components/listing-card";
import { StarIcon, MapPinIcon, PackageIcon } from "@/components/icons";
import { SELLERS } from "@/lib/data";

export default async function VendedorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seller = SELLERS.find((s) => s.id === id);

  if (!seller) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-5xl mb-4">🏪</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">Vendedor no encontrado</h1>
            <p className="text-muted mb-6">No hemos encontrado ningún vendedor con ese nombre</p>
            <Link href="/explorar" className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
              Explorar catálogo
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        {/* Seller header */}
        <div className="bg-white border-b border-border-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center gap-2 text-sm text-muted mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{seller.name}</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl font-bold shrink-0">
                {seller.name.charAt(0)}
              </div>

              <div className="flex-1">
                <h1 className="font-display text-3xl text-foreground">{seller.name}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <MapPinIcon />
                    {seller.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <StarIcon className="text-accent" />
                    <span className="font-semibold text-foreground">{seller.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <PackageIcon className="w-4 h-4" />
                    {seller.totalSales} ventas
                  </span>
                  <span>Miembro desde {seller.memberSince}</span>
                </div>
                <p className="mt-3 text-muted max-w-2xl">{seller.description}</p>
              </div>

              <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shrink-0 self-start">
                Contactar
              </button>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="font-display text-2xl text-foreground mb-6">
            Funkos a la venta
            <span className="ml-2 text-base font-normal text-muted">({seller.listings.length})</span>
          </h2>

          {seller.listings.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {seller.listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">📦</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sin productos</h3>
              <p className="text-sm text-muted">Este vendedor no tiene Funkos a la venta actualmente</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
