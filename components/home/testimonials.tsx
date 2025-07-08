"use client"
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Lucas M.",
    role: "Fan de football",
    img: "/placeholder1.jpg",
    text: "RiskArena m’a permis de soutenir mes sportifs préférés et d’accéder à des contenus vraiment exclusifs. La communauté est incroyable !"
  },
  {
    name: "Sophie R.",
    role: "Athlète - Natation",
    img: "/placeholder2.jpg",
    text: "Grâce à la plateforme, je partage mes coulisses et reçois un vrai soutien de mes fans. Les interactions sont motivantes et bienveillantes."
  },
  {
    name: "Karim D.",
    role: "Fan multisport",
    img: "/placeholder3.jpg",
    text: "J’adore le système de récompenses et la transparence. On se sent vraiment impliqué dans la carrière des athlètes."
  },
  {
    name: "Emma T.",
    role: "Athlète - Tennis",
    img: "/placeholder4.jpg",
    text: "La DAO et les votes communautaires m’ont permis de créer du contenu qui plaît vraiment à mes abonnés. Super expérience !"
  }
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.testimonial-card');
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
        <ellipse cx="70" cy="70" rx="70" ry="60" fill="url(#testimonials-grad1)" />
        <defs>
          <linearGradient id="testimonials-grad1" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-60px] bottom-[-60px] w-[160px] h-[160px] opacity-20 -z-10" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="90" cy="90" rx="90" ry="70" fill="url(#testimonials-grad2)" />
        <defs>
          <linearGradient id="testimonials-grad2" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06D6A0" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Ils parlent de RiskArena</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`testimonial-card opacity-0 flex flex-col items-center text-center bg-card rounded-xl shadow-sm p-8 transition hover:shadow-lg`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="w-16 h-16 rounded-full bg-muted mb-4 overflow-hidden flex items-center justify-center">
              <img src={t.img} alt={t.name} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
            <span className="text-xs text-muted-foreground mb-2">{t.role}</span>
            <p className="text-muted-foreground text-base">“{t.text}”</p>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) scale(1);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .testimonial-card {
          transform: translateY(40px) scale(0.98);
        }
      `}</style>
    </section>
  );
} 