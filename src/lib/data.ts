/* ─────────────────────────────────────────────
   FunkoMarket — Datos mock compartidos
   ───────────────────────────────────────────── */

export const CONDITIONS = ["Nuevo", "Como nuevo", "Bueno", "Sin caja"] as const;
export type Condition = (typeof CONDITIONS)[number];

export interface FunkoCatalog {
  id: number;
  name: string;
  series: string;
  number: string;
  year: number;
  category: string;
  isExclusive?: boolean;
  description: string;
}

export interface Listing {
  id: number;
  funkoId: number;
  name: string;
  series: string;
  price: number;
  condition: Condition;
  seller: string;
  sellerId: string;
  rating: number;
  isExclusive?: boolean;
  createdAt: string;
}

export interface Seller {
  id: string;
  name: string;
  location: string;
  rating: number;
  totalSales: number;
  memberSince: string;
  description: string;
  listings: Listing[];
}

export const CATEGORIES = [
  { name: "Marvel", emoji: "🦸", color: "from-red-500 to-red-700", count: 2_340 },
  { name: "DC Comics", emoji: "🦇", color: "from-blue-600 to-blue-900", count: 1_120 },
  { name: "Star Wars", emoji: "⚔️", color: "from-yellow-500 to-amber-700", count: 1_890 },
  { name: "Anime", emoji: "⛩️", color: "from-pink-500 to-purple-700", count: 3_210 },
  { name: "Disney", emoji: "🏰", color: "from-sky-400 to-indigo-600", count: 1_560 },
  { name: "Harry Potter", emoji: "⚡", color: "from-amber-600 to-yellow-900", count: 980 },
  { name: "Deportes", emoji: "⚽", color: "from-green-500 to-emerald-700", count: 670 },
  { name: "Gaming", emoji: "🎮", color: "from-violet-500 to-purple-800", count: 1_450 },
];

export const PLACEHOLDER_COLORS = [
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

export const FUNKO_CATALOG: FunkoCatalog[] = [
  { id: 1, name: "Spider-Man (Symbiote)", series: "Marvel", number: "975", year: 2024, category: "Marvel", isExclusive: true, description: "Spider-Man con el traje simbionte negro. Edición exclusiva con acabado metálico." },
  { id: 2, name: "Darth Vader (Chrome)", series: "Star Wars", number: "510", year: 2023, category: "Star Wars", description: "Darth Vader en acabado cromado plateado. Parte de la colección Chrome Series." },
  { id: 3, name: "Goku Ultra Instinct", series: "Dragon Ball", number: "386", year: 2024, category: "Anime", description: "Goku en su forma Ultra Instinct con aura plateada. Efecto translúcido en el pelo." },
  { id: 4, name: "Batman (Hush)", series: "DC Comics", number: "460", year: 2023, category: "DC Comics", description: "Batman basado en el cómic Batman: Hush de Jim Lee. Pose icónica en gárgola." },
  { id: 5, name: "Hermione Granger", series: "Harry Potter", number: "113", year: 2022, category: "Harry Potter", description: "Hermione con el giratiempo y varita. Uniforme de Hogwarts con detalles de Gryffindor." },
  { id: 6, name: "Pikachu (Flocked)", series: "Pokémon", number: "842", year: 2024, category: "Anime", isExclusive: true, description: "Pikachu con acabado flocked (aterciopelado). Textura especial al tacto." },
  { id: 7, name: "Elsa (Diamond)", series: "Frozen", number: "731", year: 2023, category: "Disney", description: "Elsa con acabado Diamond Collection. Brillo glitter en todo el cuerpo." },
  { id: 8, name: "Master Chief", series: "Halo", number: "13", year: 2022, category: "Gaming", description: "Master Chief con armadura MJOLNIR y rifle de asalto MA5B." },
  { id: 9, name: "Naruto (Sage Mode)", series: "Naruto", number: "185", year: 2023, category: "Anime", description: "Naruto en Modo Sabio con los ojos naranjas y marcas características." },
  { id: 10, name: "Iron Man (Mark I)", series: "Marvel", number: "338", year: 2024, category: "Marvel", isExclusive: true, description: "Iron Man en su primera armadura Mark I. Acabado gris metálico con detalles oxidados." },
  { id: 11, name: "Grogu (The Child)", series: "The Mandalorian", number: "368", year: 2022, category: "Star Wars", description: "Baby Yoda / Grogu con su túnica marrón. Pose sentado con orejas grandes." },
  { id: 12, name: "Luffy Gear 5", series: "One Piece", number: "1607", year: 2025, category: "Anime", description: "Monkey D. Luffy en Gear 5 (Nika). Pelo blanco, ropa blanca, expresión de risa." },
  { id: 13, name: "Wonder Woman", series: "DC Comics", number: "242", year: 2022, category: "DC Comics", description: "Wonder Woman con lazo de la verdad y tiara. Basada en el diseño clásico del cómic." },
  { id: 14, name: "Link (Tears of the Kingdom)", series: "Zelda", number: "1534", year: 2024, category: "Gaming", description: "Link con el brazo de Rauru y la Master Sword dañada. Basado en TotK." },
  { id: 15, name: "Vegeta (Super Saiyan)", series: "Dragon Ball", number: "154", year: 2022, category: "Anime", description: "Vegeta transformado en Super Saiyan. Pelo rubio en punta, armadura saiyan." },
  { id: 16, name: "Buzz Lightyear", series: "Toy Story", number: "523", year: 2023, category: "Disney", description: "Buzz Lightyear en su pose clásica con las alas desplegadas." },
  { id: 17, name: "Cristiano Ronaldo", series: "Football", number: "07", year: 2024, category: "Deportes", description: "CR7 con la camiseta de Portugal. Pose de celebración SIUU." },
  { id: 18, name: "Kratos", series: "God of War", number: "269", year: 2023, category: "Gaming", description: "Kratos con el Hacha del Leviatán y las Espadas del Caos. Versión Ragnarök." },
  { id: 19, name: "Stitch (Flocked)", series: "Lilo & Stitch", number: "159", year: 2024, category: "Disney", isExclusive: true, description: "Stitch con acabado flocked. Textura aterciopelada en todo el cuerpo azul." },
  { id: 20, name: "Messi (Inter Miami)", series: "Football", number: "50", year: 2025, category: "Deportes", description: "Leo Messi con la camiseta rosa del Inter Miami. Edición especial MLS." },
];

export const ALL_LISTINGS: Listing[] = [
  { id: 1, funkoId: 1, name: "Spider-Man (Symbiote)", series: "Marvel", price: 14.5, condition: "Nuevo", seller: "ComicStore_BCN", sellerId: "comicstore-bcn", rating: 4.9, isExclusive: true, createdAt: "2026-04-04" },
  { id: 2, funkoId: 2, name: "Darth Vader (Chrome)", series: "Star Wars", price: 32.0, condition: "Nuevo", seller: "FunkoMadrid", sellerId: "funko-madrid", rating: 4.8, createdAt: "2026-04-03" },
  { id: 3, funkoId: 3, name: "Goku Ultra Instinct", series: "Dragon Ball", price: 18.9, condition: "Nuevo", seller: "OtakuShop", sellerId: "otaku-shop", rating: 4.7, createdAt: "2026-04-04" },
  { id: 4, funkoId: 4, name: "Batman (Hush)", series: "DC Comics", price: 22.5, condition: "Como nuevo", seller: "HeroesVLC", sellerId: "heroes-vlc", rating: 4.6, createdAt: "2026-04-02" },
  { id: 5, funkoId: 5, name: "Hermione Granger", series: "Harry Potter", price: 11.0, condition: "Nuevo", seller: "WizardCollector", sellerId: "wizard-collector", rating: 5.0, createdAt: "2026-04-01" },
  { id: 6, funkoId: 6, name: "Pikachu (Flocked)", series: "Pokémon", price: 28.0, condition: "Nuevo", seller: "PokeStore_ES", sellerId: "pokestore-es", rating: 4.9, isExclusive: true, createdAt: "2026-04-05" },
  { id: 7, funkoId: 7, name: "Elsa (Diamond)", series: "Frozen", price: 19.9, condition: "Sin caja", seller: "DisneyFan_92", sellerId: "disneyfan-92", rating: 4.3, createdAt: "2026-03-28" },
  { id: 8, funkoId: 8, name: "Master Chief", series: "Halo", price: 15.5, condition: "Bueno", seller: "GamerZone", sellerId: "gamer-zone", rating: 4.5, createdAt: "2026-04-01" },
  { id: 9, funkoId: 9, name: "Naruto (Sage Mode)", series: "Naruto", price: 16.0, condition: "Nuevo", seller: "AnimeWorld_ES", sellerId: "animeworld-es", rating: 4.8, createdAt: "2026-04-05" },
  { id: 10, funkoId: 10, name: "Iron Man (Mark I)", series: "Marvel", price: 24.5, condition: "Nuevo", seller: "StarkCollector", sellerId: "stark-collector", rating: 4.7, isExclusive: true, createdAt: "2026-04-04" },
  { id: 11, funkoId: 11, name: "Grogu (The Child)", series: "The Mandalorian", price: 13.0, condition: "Como nuevo", seller: "MandoShop", sellerId: "mando-shop", rating: 4.6, createdAt: "2026-04-03" },
  { id: 12, funkoId: 12, name: "Luffy Gear 5", series: "One Piece", price: 35.0, condition: "Nuevo", seller: "PirateKing_BCN", sellerId: "pirateking-bcn", rating: 4.9, createdAt: "2026-04-05" },
  { id: 13, funkoId: 1, name: "Spider-Man (Symbiote)", series: "Marvel", price: 16.0, condition: "Como nuevo", seller: "FunkoMadrid", sellerId: "funko-madrid", rating: 4.8, isExclusive: true, createdAt: "2026-04-02" },
  { id: 14, funkoId: 1, name: "Spider-Man (Symbiote)", series: "Marvel", price: 12.9, condition: "Sin caja", seller: "HeroesVLC", sellerId: "heroes-vlc", rating: 4.6, isExclusive: true, createdAt: "2026-04-01" },
  { id: 15, funkoId: 3, name: "Goku Ultra Instinct", series: "Dragon Ball", price: 21.0, condition: "Nuevo", seller: "ComicStore_BCN", sellerId: "comicstore-bcn", rating: 4.9, createdAt: "2026-04-03" },
  { id: 16, funkoId: 12, name: "Luffy Gear 5", series: "One Piece", price: 38.5, condition: "Nuevo", seller: "OtakuShop", sellerId: "otaku-shop", rating: 4.7, createdAt: "2026-04-04" },
  { id: 17, funkoId: 12, name: "Luffy Gear 5", series: "One Piece", price: 29.9, condition: "Bueno", seller: "AnimeWorld_ES", sellerId: "animeworld-es", rating: 4.8, createdAt: "2026-04-02" },
  { id: 18, funkoId: 13, name: "Wonder Woman", series: "DC Comics", price: 13.5, condition: "Nuevo", seller: "HeroesVLC", sellerId: "heroes-vlc", rating: 4.6, createdAt: "2026-04-04" },
  { id: 19, funkoId: 14, name: "Link (Tears of the Kingdom)", series: "Zelda", price: 19.0, condition: "Nuevo", seller: "GamerZone", sellerId: "gamer-zone", rating: 4.5, createdAt: "2026-04-03" },
  { id: 20, funkoId: 15, name: "Vegeta (Super Saiyan)", series: "Dragon Ball", price: 14.0, condition: "Como nuevo", seller: "OtakuShop", sellerId: "otaku-shop", rating: 4.7, createdAt: "2026-04-01" },
  { id: 21, funkoId: 16, name: "Buzz Lightyear", series: "Toy Story", price: 12.0, condition: "Nuevo", seller: "DisneyFan_92", sellerId: "disneyfan-92", rating: 4.3, createdAt: "2026-04-02" },
  { id: 22, funkoId: 17, name: "Cristiano Ronaldo", series: "Football", price: 22.0, condition: "Nuevo", seller: "FunkoMadrid", sellerId: "funko-madrid", rating: 4.8, createdAt: "2026-04-05" },
  { id: 23, funkoId: 18, name: "Kratos", series: "God of War", price: 17.5, condition: "Nuevo", seller: "GamerZone", sellerId: "gamer-zone", rating: 4.5, createdAt: "2026-04-04" },
  { id: 24, funkoId: 19, name: "Stitch (Flocked)", series: "Lilo & Stitch", price: 26.0, condition: "Nuevo", seller: "ComicStore_BCN", sellerId: "comicstore-bcn", rating: 4.9, isExclusive: true, createdAt: "2026-04-05" },
  { id: 25, funkoId: 20, name: "Messi (Inter Miami)", series: "Football", price: 30.0, condition: "Nuevo", seller: "FunkoMadrid", sellerId: "funko-madrid", rating: 4.8, createdAt: "2026-04-05" },
];

export const SELLERS: Seller[] = [
  {
    id: "comicstore-bcn",
    name: "ComicStore_BCN",
    location: "Barcelona",
    rating: 4.9,
    totalSales: 342,
    memberSince: "2024-03",
    description: "Tienda especializada en cómics y coleccionables. Más de 10 años de experiencia. Envíos en 24-48h a toda España.",
    listings: ALL_LISTINGS.filter(l => l.sellerId === "comicstore-bcn"),
  },
  {
    id: "funko-madrid",
    name: "FunkoMadrid",
    location: "Madrid",
    rating: 4.8,
    totalSales: 528,
    memberSince: "2023-11",
    description: "La mayor colección de Funko Pop en Madrid. Exclusivos, Chase y ediciones limitadas. Tienda física en Malasaña.",
    listings: ALL_LISTINGS.filter(l => l.sellerId === "funko-madrid"),
  },
  {
    id: "otaku-shop",
    name: "OtakuShop",
    location: "Valencia",
    rating: 4.7,
    totalSales: 215,
    memberSince: "2024-06",
    description: "Especialistas en Funko Pop de anime y manga. Importaciones directas de Japón.",
    listings: ALL_LISTINGS.filter(l => l.sellerId === "otaku-shop"),
  },
  {
    id: "heroes-vlc",
    name: "HeroesVLC",
    location: "Valencia",
    rating: 4.6,
    totalSales: 187,
    memberSince: "2024-01",
    description: "Superhéroes y villanos. DC, Marvel y más. Coleccionista particular con precios justos.",
    listings: ALL_LISTINGS.filter(l => l.sellerId === "heroes-vlc"),
  },
  {
    id: "gamer-zone",
    name: "GamerZone",
    location: "Sevilla",
    rating: 4.5,
    totalSales: 156,
    memberSince: "2024-04",
    description: "Funkos de videojuegos: Nintendo, PlayStation, Xbox y PC. También figuras de anime gaming.",
    listings: ALL_LISTINGS.filter(l => l.sellerId === "gamer-zone"),
  },
];

export function conditionColor(c: Condition): string {
  switch (c) {
    case "Nuevo": return "bg-emerald-100 text-emerald-700";
    case "Como nuevo": return "bg-sky-100 text-sky-700";
    case "Bueno": return "bg-amber-100 text-amber-700";
    case "Sin caja": return "bg-slate-100 text-slate-600";
  }
}
