"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart, User, Wallet } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/market", label: "Marché", icon: BarChart },
  { href: "/profile/1", label: "Profil", icon: User },
  { href: "/wallet", label: "Wallet", icon: Wallet },
];

export default function MobileNavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center h-16 md:hidden shadow">
      {links.map(link => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
          >
            <link.icon className="w-6 h-6" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
} 