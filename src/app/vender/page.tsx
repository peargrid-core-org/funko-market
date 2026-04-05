"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchIcon, CameraIcon, PlusIcon } from "@/components/icons";
import { FUNKO_CATALOG, CONDITIONS, PLACEHOLDER_COLORS } from "@/lib/data";

export default function VenderPage() {
  const [searchCatalog, setSearchCatalog] = useState("");
  const [selectedFunko, setSelectedFunko] = useState<(typeof FUNKO_CATALOG)[number] | null>(null);
  const [condition, setCondition] = useState<string>("Nuevo");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const catalogResults = searchCatalog.length >= 2
    ? FUNKO_CATALOG.filter(
        (f) =>
          f.name.toLowerCase().includes(searchCatalog.toLowerCase()) ||
          f.series.toLowerCase().includes(searchCatalog.toLowerCase())
      ).slice(0, 6)
    : [];

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex-1 bg-background flex items-center justify-center py-16 px-4">
          <div className="text-center max-w-md">
            <p className="text-6xl mb-6">🎉</p>
            <h1 className="font-display text-3xl text-foreground mb-3">¡Publicado!</h1>
            <p className="text-muted mb-8">
              Tu Funko <span className="font-semibold text-foreground">{selectedFunko?.name}</span> está
              ahora visible para todos los compradores.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => { setSubmitted(false); setSelectedFunko(null); setPrice(""); setDescription(""); setSearchCatalog(""); }}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors"
              >
                Publicar otro Funko
              </button>
              <a href="/explorar" className="px-6 py-3 border border-border rounded-xl text-sm font-medium text-foreground hover:bg-surface-alt transition-colors">
                Ver catálogo
              </a>
            </div>
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-3xl text-foreground mb-2">Publicar un Funko</h1>
          <p className="text-muted mb-8">Elige el Funko del catálogo, pon tu precio y listo</p>

          <div className="space-y-8">
            {/* Step 1: Select Funko */}
            <section className="bg-white rounded-2xl border border-border-light p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">1</span>
                <h2 className="font-bold text-foreground">Elige el Funko</h2>
              </div>

              {selectedFunko ? (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-alt/50 border border-border-light">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${PLACEHOLDER_COLORS[selectedFunko.id % PLACEHOLDER_COLORS.length]} flex items-center justify-center shrink-0`}>
                    <div className="w-8 h-12 bg-white/20 rounded-t-full rounded-b-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">{selectedFunko.name}</p>
                    <p className="text-xs text-muted">{selectedFunko.series} · #{selectedFunko.number} · {selectedFunko.year}</p>
                  </div>
                  <button
                    onClick={() => { setSelectedFunko(null); setSearchCatalog(""); }}
                    className="text-sm text-primary hover:text-primary-dark font-medium transition-colors shrink-0"
                  >
                    Cambiar
                  </button>
                </div>
              ) : (
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <SearchIcon className="text-muted" />
                    </div>
                    <input
                      type="text"
                      value={searchCatalog}
                      onChange={(e) => setSearchCatalog(e.target.value)}
                      placeholder="Busca por nombre o serie (ej: Spider-Man, Dragon Ball...)"
                      className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>

                  {catalogResults.length > 0 && (
                    <div className="mt-3 border border-border-light rounded-xl overflow-hidden">
                      {catalogResults.map((funko, i) => (
                        <button
                          key={funko.id}
                          onClick={() => { setSelectedFunko(funko); setSearchCatalog(""); }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-alt/50 transition-colors ${
                            i < catalogResults.length - 1 ? "border-b border-border-light" : ""
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${PLACEHOLDER_COLORS[funko.id % PLACEHOLDER_COLORS.length]} flex items-center justify-center shrink-0`}>
                            <div className="w-5 h-7 bg-white/20 rounded-t-full rounded-b-sm" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{funko.name}</p>
                            <p className="text-xs text-muted">{funko.series} · #{funko.number}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {searchCatalog.length >= 2 && catalogResults.length === 0 && (
                    <p className="mt-3 text-sm text-muted text-center py-4">No se ha encontrado. Prueba con otro nombre.</p>
                  )}
                </div>
              )}
            </section>

            {/* Step 2: Details */}
            <section className={`bg-white rounded-2xl border border-border-light p-6 transition-opacity ${selectedFunko ? "opacity-100" : "opacity-40 pointer-events-none"}`} style={{ boxShadow: selectedFunko ? "var(--card-shadow)" : "none" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">2</span>
                <h2 className="font-bold text-foreground">Detalles de tu Funko</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Estado</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {CONDITIONS.map((c) => (
                      <label
                        key={c}
                        className={`flex items-center justify-center h-11 rounded-xl border-2 cursor-pointer transition-colors text-sm font-medium ${
                          condition === c
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-muted hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="condition"
                          value={c}
                          checked={condition === c}
                          onChange={(e) => setCondition(e.target.value)}
                          className="sr-only"
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Precio (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-lg font-bold placeholder:text-muted/40 placeholder:font-normal focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Fotos <span className="font-normal text-muted">(opcional)</span>
                  </label>
                  <div className="flex gap-3">
                    <button className="w-24 h-24 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted hover:border-primary hover:text-primary transition-colors">
                      <CameraIcon className="w-6 h-6" />
                      <span className="text-xs font-medium">Añadir</span>
                    </button>
                    <button className="w-24 h-24 rounded-xl border-2 border-dashed border-border-light flex items-center justify-center text-border hover:border-primary/30 transition-colors">
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Notas <span className="font-normal text-muted">(opcional)</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Ej: Tiene una pequeña marca en la esquina de la caja..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Submit */}
            <button
              onClick={() => selectedFunko && price && setSubmitted(true)}
              disabled={!selectedFunko || !price}
              className="w-full h-14 bg-primary hover:bg-primary-dark disabled:bg-border disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-colors text-base"
            >
              Publicar Funko a la venta
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
