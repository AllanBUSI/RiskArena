"use client"
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "Comment fonctionne l’abonnement sur RiskArena ?",
    a: "Tu choisis ton athlète et ton niveau d’abonnement (Supporter, VIP, Légende) pour accéder à différents contenus exclusifs. L’abonnement se paie en tokens natifs ou fan-tokens."
  },
  {
    q: "Est-ce que mes données sont sécurisées ?",
    a: "Oui, la plateforme est basée sur la technologie Web3, garantissant la confidentialité et la sécurité de tes transactions et de tes données personnelles."
  },
  {
    q: "Qu’est-ce qu’un fan-token ?",
    a: "Un fan-token est un jeton numérique lié à un athlète. Il te permet d’accéder à des avantages, de participer à la gouvernance et de recevoir des récompenses."
  },
  {
    q: "Puis-je changer de niveau d’abonnement ?",
    a: "Oui, tu peux à tout moment passer à un niveau supérieur pour débloquer plus de contenus et d’avantages."
  },
  {
    q: "Comment puis-je soutenir un athlète ?",
    a: "En t’abonnant, en envoyant des tips, en participant aux votes et en interagissant sur la plateforme."
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non, la plateforme est totalement transparente sur les frais. Une commission de 15% est prélevée sur les abonnements, tips et reventes, et 5% sont redistribués aux stakers." 
  }
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.faq-card');
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
    <section ref={ref} className="relative w-full max-w-3xl mx-auto py-20 px-4 flex flex-col items-center overflow-hidden">
      {/* SVG décoratifs */}
      <svg className="absolute left-[-60px] top-[-60px] w-[120px] h-[120px] opacity-20 -z-10" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="70" rx="70" ry="60" fill="url(#faq-grad1)" />
        <defs>
          <linearGradient id="faq-grad1" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#06D6A0" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-60px] bottom-[-60px] w-[160px] h-[160px] opacity-20 -z-10" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="90" cy="90" rx="90" ry="70" fill="url(#faq-grad2)" />
        <defs>
          <linearGradient id="faq-grad2" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">FAQ</h2>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className={`faq-card opacity-0 border rounded-xl bg-card shadow-sm transition-all`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded-xl transition"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span className={`ml-4 transition-transform ${open === i ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-muted-foreground text-base animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx global>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) scale(1);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .faq-card {
          transform: translateY(40px) scale(0.98);
        }
      `}</style>
    </section>
  );
} 