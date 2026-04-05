import Link from "next/link";
import { StarIcon, HeartIcon } from "./icons";
import { conditionColor, PLACEHOLDER_COLORS, type Listing } from "@/lib/data";

export function ListingCard({ listing }: { listing: Listing }) {
  const gradientClass = PLACEHOLDER_COLORS[listing.id % PLACEHOLDER_COLORS.length];
  return (
    <Link
      href={`/funko/${listing.funkoId}`}
      className="group bg-white rounded-2xl border border-border-light overflow-hidden card-hover block"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <div className={`relative aspect-square bg-gradient-to-br ${gradientClass}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-3/4 bg-white/20 rounded-t-full rounded-b-lg" />
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {listing.isExclusive && (
            <span className="px-2.5 py-1 bg-accent text-white text-xs font-bold rounded-lg shadow-sm">
              EXCLUSIVO
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-primary">
          <HeartIcon className="w-4 h-4" />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${conditionColor(listing.condition)}`}>
            {listing.condition}
          </span>
        </div>
      </div>
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
          <span className="text-xs font-semibold text-primary">Ver →</span>
        </div>
      </div>
    </Link>
  );
}
