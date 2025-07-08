export function FinalCta() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Prêt à rejoindre l’arène&nbsp;?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-xl">
          Rejoins la communauté RiskArena, soutiens tes athlètes favoris et vis le sport autrement. L’aventure commence ici.
        </p>
        <a
          href="#"
          className="rounded-full bg-primary text-primary-foreground px-10 py-4 font-semibold text-lg shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
        >
          Commencer maintenant
        </a>
      </div>
    </section>
  );
} 