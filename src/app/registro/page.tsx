"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RegistroPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg">F</span>
            </Link>
            <h1 className="font-display text-3xl text-foreground">Crea tu cuenta</h1>
            <p className="mt-2 text-muted">Empieza a comprar y vender Funko Pops</p>
          </div>

          <div className="bg-white rounded-2xl border border-border-light p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Usuario</label>
                  <input
                    type="text"
                    placeholder="tu_nombre"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Contraseña</label>
                <input
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Ubicación</label>
                <input
                  type="text"
                  placeholder="Ciudad (ej: Madrid)"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-surface-alt/30 text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">¿Qué quieres hacer?</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center justify-center gap-2 h-12 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <span className="text-sm font-medium">🛒 Comprar</span>
                  </label>
                  <label className="flex items-center justify-center gap-2 h-12 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input type="checkbox" className="sr-only" />
                    <span className="text-sm font-medium">💰 Vender</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors text-base"
              >
                Crear cuenta
              </button>

              <p className="text-xs text-muted text-center leading-relaxed">
                Al registrarte aceptas los{" "}
                <a href="#" className="text-primary hover:underline">términos de uso</a>
                {" "}y la{" "}
                <a href="#" className="text-primary hover:underline">política de privacidad</a>
              </p>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-semibold text-primary hover:text-primary-dark transition-colors">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
