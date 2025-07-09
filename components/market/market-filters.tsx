"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Flame, Sparkles, Shield, XCircle } from "lucide-react";

interface MarketFiltersProps {
  selectedRarity: string;
  onRarityChange: (rarity: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const rarityOptions = [
  { value: "all", label: "Toutes", icon: <Shield className="h-4 w-4 mr-1" /> },
  { value: "normal", label: "Normal", icon: <Star className="h-4 w-4 mr-1 text-gray-400" /> },
  { value: "rare", label: "Rare", icon: <Flame className="h-4 w-4 mr-1 text-orange-500" /> },
  { value: "super-rare", label: "Super Rare", icon: <Sparkles className="h-4 w-4 mr-1 text-yellow-500" /> },
  { value: "limited", label: "Limitée", icon: <Shield className="h-4 w-4 mr-1 text-black" /> }
];

export function MarketFilters({
  selectedRarity,
  onRarityChange,
  searchTerm,
  onSearchChange
}: MarketFiltersProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md px-6 py-4 mb-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {/* Recherche */}
      <div className="flex-1 flex items-center gap-3 min-w-0">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un athlète, un club..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-gray-900 placeholder:text-gray-400 text-base shadow-sm transition-all"
          />
        </div>
      </div>
      {/* Séparateur */}
      <div className="hidden md:block h-10 w-px bg-gray-200 mx-2" />
      {/* Filtres de rareté */}
      <div className="flex flex-wrap gap-2 items-center">
        {rarityOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onRarityChange(option.value)}
            className={`flex items-center px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150
              ${selectedRarity === option.value
                ? "bg-purple-600 text-white border-purple-600 shadow"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:border-purple-300"}
            `}
          >
            {option.icon}
            {option.label}
          </button>
        ))}
        {/* Bouton réinitialiser */}
        {selectedRarity !== "all" && (
          <button
            type="button"
            onClick={() => onRarityChange("all")}
            className="flex items-center px-3 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-medium hover:bg-red-50 hover:text-red-600 ml-2 transition-all"
          >
            <XCircle className="h-4 w-4 mr-1" />
            Réinitialiser
          </button>
        )}
      </div>
      {/* Séparateur */}
      <div className="hidden md:block h-10 w-px bg-gray-200 mx-2" />
      {/* Statistiques rapides */}
      <div className="flex flex-row flex-wrap gap-4 items-center justify-end min-w-[220px]">
        <div className="text-center">
          <div className="text-lg font-bold text-purple-600">1,247</div>
          <div className="text-xs text-gray-500">Athlètes</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">89.5%</div>
          <div className="text-xs text-gray-500">Disponibilité</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">2.4 ETH</div>
          <div className="text-xs text-gray-500">Prix moyen</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-600">+12.3%</div>
          <div className="text-xs text-gray-500">Croissance 24h</div>
        </div>
      </div>
    </div>
  );
} 