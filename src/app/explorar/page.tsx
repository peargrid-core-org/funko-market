"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ListingCard } from "@/components/listing-card";
import { SearchIcon, FilterIcon } from "@/components/icons";
import { ALL_LISTINGS, CATEGORIES, CONDITIONS } from "@/lib/data";

export default function ExplorarPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let results = ALL_LISTINGS;

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (l) => l.name.toLowerCase().includes(q) || l.series.toLowerCase().includes(q) || l.seller.toLowerCase().includes(q)
      );
    }

    if (category) {
      results = results.filter((l) => {
        const cat = CATEGORIES.find((c) => c.name === category);
        if (!cat) return true;
        return l.series.toLowerCase().includes(cat.name.toLowerCase()) || l.name.toLowerCase().includes(cat.name.toLowerCase());
      });
    }

    if (condition) {
      results = results.filter((l) => l.condition === condition);
    }

    switch (sortBy) {
      case "price-asc":
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      case "recent":
      default:
        results = [...results].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
    }

    return results;
  }, [search, category, condition, sortBy]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        {/* Search header */}
        <div className="bg-white border-b border-border-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-6">Explorar Funkos</h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="text-muted" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar por nombre, serie o vendedor..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-surface-alt/50 text-base placeholder:text-muted/70 focus:outline-none focus:border-primary focus:bg-white search-glow transition-all"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center gap-2 h-12 px-5 rounded-xl border transition-colors ${
                  showFilters ? "border-primary bg-primary/5 text-primary" : "border-border bg-white text-muted hover:text-foreground"
                }`}
              >
                <FilterIcon />
                <span className="text-sm font-medium">Filtros</span>
              </button>
            </div>

            {/* Filters panel */}
            {showFilters && (
              <div className="mt-4 p-4 bg-surface-alt/50 rounded-xl border border-border-light flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2">Categoría</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="">Todas</option>
                    {CATEGORIES.map((c) => (
                      <option key={c.name} value={c.name}>{c.emoji} {c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2">Estado</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="">Todos</option>
                    {CONDITIONS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-2">Ordenar por</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="recent">Más recientes</option>
                    <option value="price-asc">Precio: menor a mayor</option>
                    <option value="price-desc">Precio: mayor a menor</option>
                    <option value="rating">Mejor valorados</option>
                  </select>
                </div>
                {(category || condition) && (
                  <div className="flex items-end">
                    <button
                      onClick={() => { setCategory(""); setCondition(""); }}
                      className="h-10 px-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted mb-6">
            {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            {search && <> para &ldquo;<span className="font-semibold text-foreground">{search}</span>&rdquo;</>}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">No se han encontrado resultados</h3>
              <p className="text-sm text-muted">Prueba con otros filtros o busca algo diferente</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
