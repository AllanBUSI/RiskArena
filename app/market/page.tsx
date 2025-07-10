"use client";

import React, { useState, useMemo } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { AthleteCard } from "@/components/market/athlete-card";
import { MarketFilters } from "@/components/market/market-filters";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Données de démonstration
const mockAthletes = [
  {
    id: "1",
    name: "Lionel Messi",
    image: "/personnage/blaise.jpeg",
    rarity: "limited" as const,
    tokensRemaining: 15,
    totalTokens: 100,
    currentPrice: 5.2,
    priceChange: 12.5,
    fans: 450000000,
    subscribers: 12500000
  },
  {
    id: "2",
    name: "Cristiano Ronaldo",
    image: "/personnage/nouh.jpeg",
    rarity: "limited" as const,
    tokensRemaining: 23,
    totalTokens: 150,
    currentPrice: 4.8,
    priceChange: -3.2,
    fans: 500000000,
    subscribers: 15000000
  },
  {
    id: "3",
    name: "Kylian Mbappé",
    image: "/personnage/ruben.jpeg",
    rarity: "super-rare" as const,
    tokensRemaining: 45,
    totalTokens: 200,
    currentPrice: 3.1,
    priceChange: 8.7,
    fans: 120000000,
    subscribers: 8000000
  },
  {
    id: "4",
    name: "Erling Haaland",
    image: "/personnage/yasmine.jpeg",
    rarity: "super-rare" as const,
    tokensRemaining: 67,
    totalTokens: 250,
    currentPrice: 2.9,
    priceChange: 15.3,
    fans: 80000000,
    subscribers: 5000000
  },
  {
    id: "5",
    name: "Kevin De Bruyne",
    image: "/personnage/blaise.jpeg",
    rarity: "rare" as const,
    tokensRemaining: 89,
    totalTokens: 300,
    currentPrice: 1.8,
    priceChange: -1.5,
    fans: 60000000,
    subscribers: 3000000
  },
  {
    id: "6",
    name: "Virgil van Dijk",
    image: "/personnage/nouh.jpeg",
    rarity: "rare" as const,
    tokensRemaining: 120,
    totalTokens: 400,
    currentPrice: 1.5,
    priceChange: 5.2,
    fans: 45000000,
    subscribers: 2500000
  },
  {
    id: "7",
    name: "Jude Bellingham",
    image: "/personnage/ruben.jpeg",
    rarity: "normal" as const,
    tokensRemaining: 200,
    totalTokens: 500,
    currentPrice: 0.8,
    priceChange: 22.1,
    fans: 30000000,
    subscribers: 1500000
  },
  {
    id: "8",
    name: "Vinícius Jr.",
    image: "/personnage/yasmine.jpeg",
    rarity: "normal" as const,
    tokensRemaining: 180,
    totalTokens: 450,
    currentPrice: 0.9,
    priceChange: 18.7,
    fans: 35000000,
    subscribers: 2000000
  }
];

export default function MarketPage() {
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrage des athlètes
  const filteredAthletes = useMemo(() => {
    return mockAthletes.filter((athlete) => {
      const matchesRarity = selectedRarity === "all" || athlete.rarity === selectedRarity;
      const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRarity && matchesSearch;
    });
  }, [selectedRarity, searchTerm]);

  const handleBuyToken = (athleteId: string) => {
    const athlete = mockAthletes.find(a => a.id === athleteId);
    if (athlete) {
      toast.success(`Achat de token pour ${athlete.name} en cours...`, {
        description: `Prix: ${athlete.currentPrice} ETH`,
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Contenu principal */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* En-tête */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Marché des Athlètes</h1>
            <p className="text-gray-600">
              Découvrez et investissez dans les tokens de vos athlètes préférés
            </p>
          </div>

          {/* Filtres */}
          <MarketFilters
            selectedRarity={selectedRarity}
            onRarityChange={setSelectedRarity}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Grille d'athlètes */}
          <div className="space-y-6">
            {/* Résultats */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {filteredAthletes.length} athlète{filteredAthletes.length > 1 ? 's' : ''} trouvé{filteredAthletes.length > 1 ? 's' : ''}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Trier par:</span>
                <Button variant="outline" size="sm">
                  Prix
                </Button>
                <Button variant="outline" size="sm">
                  Popularité
                </Button>
                <Button variant="outline" size="sm">
                  Rareté
                </Button>
              </div>
            </div>

            {/* Grille */}
            {filteredAthletes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAthletes.map((athlete) => (
                  <AthleteCard
                    key={athlete.id}
                    {...athlete}
                    onBuy={handleBuyToken}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">
                  Aucun athlète trouvé
                </div>
                <p className="text-gray-500">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 