"use client"
import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Benefits } from "@/components/home/benefits";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";
import { PokemonCard } from "@/components/home/pokemon-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted px-4 py-16">
        <Hero />
        <PokemonCard/>
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
