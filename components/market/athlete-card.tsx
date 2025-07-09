"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, UserCheck, Coins } from "lucide-react";

interface AthleteCardProps {
  id: string;
  name: string;
  image: string;
  rarity: "normal" | "rare" | "super-rare" | "limited";
  tokensRemaining: number;
  totalTokens: number;
  currentPrice: number;
  priceChange: number;
  fans: number;
  subscribers: number;
  onBuy: (id: string) => void;
}

const rarityConfig = {
  normal: {
    gradient: "from-gray-300 via-gray-400 to-gray-500",
    glow: "from-gray-200/30 via-gray-400/20 to-gray-500/30",
    badge: "from-gray-200 via-gray-400 to-gray-500",
    textColor: "text-gray-900",
    label: "Normal",
    shadow: "shadow-[0_0_32px_0_rgba(156,163,175,0.7)]",
    hover: "hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 hover:text-gray-900"
  },
  rare: {
    gradient: "from-orange-300 via-orange-400 to-orange-600",
    glow: "from-orange-200/30 via-orange-400/20 to-orange-600/30",
    badge: "from-orange-200 via-orange-400 to-orange-600",
    textColor: "text-gray-900",
    label: "Rare",
    shadow: "shadow-[0_0_32px_0_rgba(251,146,60,0.7)]",
    hover: "hover:bg-gradient-to-r hover:from-orange-300 hover:via-orange-400 hover:to-orange-600 hover:text-gray-900"
  },
  "super-rare": {
    gradient: "from-yellow-200 via-yellow-400 to-yellow-600",
    glow: "from-yellow-100/30 via-yellow-400/20 to-yellow-600/30",
    badge: "from-yellow-200 via-yellow-400 to-yellow-600",
    textColor: "text-yellow-900",
    label: "Super Rare",
    shadow: "shadow-[0_0_32px_0_rgba(253,224,71,0.7)]",
    hover: "hover:bg-gradient-to-r hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-600 hover:text-yellow-900"
  },
  limited: {
    gradient: "from-black via-gray-900 to-gray-800",
    glow: "from-gray-900/40 via-black/30 to-gray-800/40",
    badge: "from-gray-900 via-black to-gray-800",
    textColor: "text-white",
    label: "Édition Limitée",
    shadow: "shadow-[0_0_32px_0_rgba(0,0,0,0.7)]",
    hover: "hover:bg-gradient-to-r hover:from-black hover:via-gray-900 hover:to-gray-800 hover:text-white"
  }
};

export function AthleteCard({
  id,
  name,
  image,
  rarity,
  tokensRemaining,
  totalTokens,
  currentPrice,
  priceChange,
  fans,
  subscribers,
  onBuy
}: AthleteCardProps) {
  const config = rarityConfig[rarity];
  const isPriceUp = priceChange >= 0;
  const availabilityPercentage = (tokensRemaining / totalTokens) * 100;

  return (
    <div className="relative flex flex-col w-80 h-142 rounded-3xl border-4 border-white/60 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Effet foil animé */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-tr from-white/30 via-white/0 to-white/0 rotate-12 animate-foil" />
      </div>
      {/* Glow background */}
      <div className={`absolute inset-0 z-0 animate-pulse bg-gradient-to-br ${config.glow} blur-2xl opacity-70 group-hover:opacity-90 transition`} />
      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image section - 75% de la carte */}
        <div className="h-3/4 relative overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-2xl border-b-4 border-white/30 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            style={{ filter: 'brightness(1.08) saturate(1.2)' }}
          />
          {/* Reflet animé sur l'image */}
          <div className="absolute left-1/4 top-0 w-1/2 h-full pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-white/60 via-transparent to-transparent opacity-40 blur-2xl animate-reflect" />
          </div>
          {/* Badge de rareté */}
          <div className="absolute top-3 left-3">
            <Badge className={`bg-gradient-to-r ${config.badge} ${config.textColor} border-0 animate-pulse`}>{config.label}</Badge>
          </div>
          {/* Prix et variation */}
          <div className="absolute top-3 right-3 text-right">
            <div className="text-white font-bold text-lg drop-shadow-lg">
              {currentPrice.toFixed(2)} ETH
            </div>
            <div className={`flex items-center text-sm ${isPriceUp ? 'text-green-400' : 'text-red-400'}`}>
              {isPriceUp ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(priceChange).toFixed(2)}%
            </div>
          </div>
          {/* Nom de l'athlète sur la photo */}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg text-center">
              {name}
            </h3>
          </div>
        </div>
        {/* Info section - 25% de la carte */}
        <div className="h-1/4 bg-white/90 backdrop-blur-sm p-3 flex flex-col rounded-b-2xl">
          {/* Disponibilité des tokens */}
          <div className="bg-black/50 rounded-lg p-2 mb-2">
            <div className="flex items-center justify-between text-white text-sm">
              <span>Tokens restants</span>
              <span className="font-bold">{tokensRemaining}/{totalTokens}</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${availabilityPercentage}%` }}
              />
            </div>
          </div>
          {/* Stats */}
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-600 mb-2">
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{fans.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <UserCheck className="h-3 w-3 mr-1" />
              <span>{subscribers.toLocaleString()}</span>
            </div>
          </div>
          {/* Bouton d'achat */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onBuy(id);
            }}
            className={`bg-green-500 hover:scale-110 text-white rounded-lg font-bold transition-all duration-200 border-2 border-white/70 ${config.hover} w-full mt-auto flex items-center justify-center text-base h-[38px] md:h-[10%] min-h-[38px]`}
            style={{ height: '10%' }}
          >
            <Coins className="h-5 w-5 mr-2" />
            Acheter
          </Button>
        </div>
      </div>
              <style jsx>{`
          .animate-foil {
            animation: shine-move 2.5s linear infinite;
          }
          .animate-reflect {
            animation: reflect-move 3s linear infinite;
          }
          @keyframes shine-move {
            0% { transform: translateX(-100%) rotate(12deg); opacity: 0.2; }
            60% { opacity: 0.7; }
            100% { transform: translateX(100%) rotate(12deg); opacity: 0.2; }
          }
          @keyframes reflect-move {
            0% { transform: translateY(-80%) scaleX(1.2); opacity: 0.2; }
            50% { opacity: 0.5; }
            100% { transform: translateY(80%) scaleX(1.2); opacity: 0.2; }
          }
        `}</style>
    </div>
  );
} 