"use client"
import Image from "next/image";
import { PokemonCard } from "@/components/home/pokemon-card";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[70vh] py-24 px-4 bg-background overflow-hidden">
      {/* Cards décoratives en bg avec animations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
        <div className="flex gap-20">
          <div className="animate-float-slow">
            <PokemonCard title="VIP" image="/globe.svg" subtitle="RiskArena" />
          </div>
          <div className="animate-float-medium">
            <PokemonCard title="LÉGENDE" image="/globe.svg" subtitle="RiskArena" />
          </div>
          <div className="animate-float-fast">
            <PokemonCard title="SUPPORTER" image="/globe.svg" subtitle="RiskArena" />
          </div>
        </div>
        <style jsx global>{`
          @keyframes float-slow {
            0% { transform: translateY(0) rotate(-2deg); }
            50% { transform: translateY(-24px) rotate(2deg); }
            100% { transform: translateY(0) rotate(-2deg); }
          }
          @keyframes float-medium {
            0% { transform: translateY(0) rotate(2deg); }
            50% { transform: translateY(32px) rotate(-2deg); }
            100% { transform: translateY(0) rotate(2deg); }
          }
          @keyframes float-fast {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-16px) rotate(4deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 5.5s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4.5s ease-in-out infinite; }
        `}</style>
      </div>
      {/* Halo doux */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[300px] bg-gradient-to-br from-primary/10 via-fuchsia-400/10 to-emerald-400/10 rounded-full blur-3xl opacity-60" />
      </div>
      {/* SVG décoratifs */}
      <svg className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] opacity-30 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="200" fill="url(#hero-grad1)" />
        <defs>
          <linearGradient id="hero-grad1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#06D6A0" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-100px] bottom-[-100px] w-[260px] h-[260px] opacity-20 -z-10" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="150" rx="150" ry="120" fill="url(#hero-grad2)" />
        <defs>
          <linearGradient id="hero-grad2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <Image
          src="/globe.svg"
          alt="Logo RiskArena"
          width={72}
          height={72}
          className="mb-2 drop-shadow-xl"
          priority
        />
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-center leading-tight bg-gradient-to-r from-primary via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent">
          RISKARENA
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-medium text-center max-w-xl">
          La plateforme Web3 qui connecte les fans et les athlètes autour de contenus exclusifs, de récompenses et d'une vraie communauté sportive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <a
            href="#"
            className="inline-block rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition text-center"
          >
            Découvrir la plateforme
          </a>
          <a
            href="#"
            className="inline-block rounded-full border border-primary text-primary px-8 py-4 font-semibold text-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition text-center"
          >
            Devenir athlète
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8 text-base text-muted-foreground">
          <span>Fan-tokens & badges NFT</span>
          <span aria-hidden className="mx-2">·</span>
          <span>Récompenses & airdrops</span>
          <span aria-hidden className="mx-2">·</span>
          <span>Gouvernance communautaire</span>
        </div>
      </div>
    </section>
  );
} 