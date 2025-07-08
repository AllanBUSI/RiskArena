import { UserGroupIcon, KeyIcon, ChatBubbleLeftRightIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const steps = [
  {
    icon: UserGroupIcon,
    title: "Découvre les athlètes",
    desc: "Explore les profils, contenus et univers de sportifs uniques."
  },
  {
    icon: KeyIcon,
    title: "Abonne-toi en 1 clic",
    desc: "Choisis ton niveau d’accès et débloque des contenus exclusifs."
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Participe & interagis",
    desc: "Commente, envoie des tips, vote et rejoins la communauté."
  },
  {
    icon: TrophyIcon,
    title: "Gagne des récompenses",
    desc: "Reçois des tokens, badges NFT et accède à des expériences inédites."
  }
];

export function HowItWorks() {
  // Animation d'apparition au scroll
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.howit-card');
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
      <svg className="absolute left-[-80px] top-[-60px] w-[180px] h-[180px] opacity-20 -z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="100" rx="100" ry="80" fill="url(#howitworks-grad1)" />
        <defs>
          <linearGradient id="howitworks-grad1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#06D6A0" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-60px] bottom-[-60px] w-[140px] h-[140px] opacity-20 -z-10" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="80" cy="80" rx="80" ry="60" fill="url(#howitworks-grad2)" />
        <defs>
          <linearGradient id="howitworks-grad2" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Comment ça marche&nbsp;?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`howit-card opacity-0 flex flex-col items-center text-center bg-card rounded-xl shadow-sm p-8 transition hover:shadow-lg`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <step.icon className="w-12 h-12 text-primary mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-base">{step.desc}</p>
            <span className="mt-4 text-xs text-muted-foreground">Étape {i + 1}</span>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) scale(1);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .howit-card {
          transform: translateY(40px) scale(0.98);
        }
      `}</style>
    </section>
  );
} 