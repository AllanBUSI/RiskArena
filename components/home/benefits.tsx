"use client"
import { LockClosedIcon, UsersIcon, GiftIcon, StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: StarIcon,
    title: "Exclusivité",
    desc: "Accède à des contenus et expériences réservés aux membres." 
  },
  {
    icon: UsersIcon,
    title: "Communauté",
    desc: "Participe à une communauté engagée autour du sport et de tes athlètes préférés."
  },
  {
    icon: GiftIcon,
    title: "Récompenses",
    desc: "Gagne des tokens, badges NFT et des avantages à chaque interaction."
  },
  {
    icon: LockClosedIcon,
    title: "Sécurité",
    desc: "Profite d’une plateforme Web3 fiable, transparente et respectueuse de tes données."
  }
];

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.benefit-card');
    const onScroll = () => {
      const trigger = window.innerHeight * 0.92;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) {
          card.classList.add('fade-in-up');
          card.classList.remove('opacity-0');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="relative w-full max-w-7xl mx-auto py-20 px-4 flex flex-col items-center overflow-hidden">
      {/* SVG décoratifs */}
      <svg className="absolute left-[-60px] top-[-60px] w-[120px] h-[120px] opacity-20 -z-10" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="70" rx="70" ry="60" fill="url(#benefits-grad1)" />
        <defs>
          <linearGradient id="benefits-grad1" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06D6A0" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-60px] bottom-[-60px] w-[160px] h-[160px] opacity-20 -z-10" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="90" cy="90" rx="90" ry="70" fill="url(#benefits-grad2)" />
        <defs>
          <linearGradient id="benefits-grad2" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#06D6A0" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Pourquoi choisir RiskArena&nbsp;?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className={`benefit-card opacity-0 flex flex-col items-center text-center bg-card rounded-xl shadow-sm p-8 transition hover:shadow-lg`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <b.icon className="w-12 h-12 text-primary mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-base">{b.desc}</p>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) scale(1);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .benefit-card {
          transform: translateY(40px) scale(0.98);
        }
      `}</style>
    </section>
  );
} 