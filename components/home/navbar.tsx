import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-2" aria-label="Accueil RiskArena">
          <span className="text-xl font-bold tracking-tight text-primary">RISKARENA</span>
        </Link>
        {/* Navigation links */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          </li>
          <li>
            <Link href="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link>
          </li>
          <li>
            <Link href="/staking" className="hover:text-primary transition-colors">Staking</Link>
          </li>
          <li>
            <Link href="/dao" className="hover:text-primary transition-colors">Mini-DAO</Link>
          </li>
        </ul>
        {/* Connexion/CTA */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Connexion</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
} 