import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 mt-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Logo & nom */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">RISKARENA</span>
        </div>
        {/* Navigation secondaire */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/staking">Staking</Link></li>
            <li><Link href="/dao">Mini-DAO</Link></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        {/* Réseaux sociaux (placeholders) */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition"><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg></a>
          <a href="#" aria-label="Discord" className="hover:text-primary transition"><svg width="20" height="20" fill="currentColor"><rect x="3" y="6" width="14" height="8" rx="4" /></svg></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition"><svg width="20" height="20" fill="currentColor"><rect x="4" y="4" width="12" height="12" rx="4" /></svg></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} RiskArena. Tous droits réservés.</div>
    </footer>
  );
} 