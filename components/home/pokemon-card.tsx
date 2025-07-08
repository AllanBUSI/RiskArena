"use client"
import React from "react";

export function PokemonCard({ title = "ATHLÈTE LÉGENDAIRE", image = "/globe.svg", subtitle = "RiskArena Edition" }) {
  return (
    <div className="w-7xl">
      <div className="flex flex-row gap-20 justify-center items-center w-full">
        {/* Normal (Gris) */}
        <div className="relative flex flex-col items-center justify-center w-64 h-96 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 border-4 border-white/40 overflow-hidden group">
          {/* Glow animated background */}
          <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-gray-200/30 via-gray-400/20 to-gray-500/30 blur-2xl opacity-70 group-hover:opacity-90 transition" />
          {/* Shine effect */}
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-tr from-white/40 via-white/0 to-white/0 rotate-12 animate-shine" />
          </div>
          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
            <img src={image} alt={title} className="w-24 h-24 object-contain drop-shadow-xl mb-4" loading="lazy" />
            <h3 className="text-2xl font-extrabold text-white drop-shadow-lg mb-2 text-center uppercase tracking-widest">
              {title}
            </h3>
            <span className="text-base text-white/80 font-semibold tracking-wide mb-4 text-center">
              {subtitle}
            </span>
            <div className="mt-auto w-full flex justify-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 px-4 py-1 text-xs font-bold text-gray-900 shadow-md animate-pulse">
                Normal
              </span>
            </div>
          </div>
        </div>
        {/* Rare (Orange) */}
        <div className="relative flex flex-col items-center justify-center w-64 h-96 rounded-2xl shadow-2xl bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 border-4 border-white/40 overflow-hidden group">
          <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-orange-200/30 via-orange-400/20 to-orange-600/30 blur-2xl opacity-70 group-hover:opacity-90 transition" />
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-tr from-white/40 via-white/0 to-white/0 rotate-12 animate-shine" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
            <img src={image} alt={title} className="w-24 h-24 object-contain drop-shadow-xl mb-4" loading="lazy" />
            <h3 className="text-2xl font-extrabold text-white drop-shadow-lg mb-2 text-center uppercase tracking-widest">
              {title}
            </h3>
            <span className="text-base text-white/80 font-semibold tracking-wide mb-4 text-center">
              {subtitle}
            </span>
            <div className="mt-auto w-full flex justify-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 px-4 py-1 text-xs font-bold text-gray-900 shadow-md animate-pulse">
                Rare
              </span>
            </div>
          </div>
        </div>
        {/* Super Rare (Gold) */}
        <div className="relative flex flex-col items-center justify-center w-64 h-96 rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 border-4 border-white/40 overflow-hidden group">
          <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-yellow-100/30 via-yellow-400/20 to-yellow-600/30 blur-2xl opacity-70 group-hover:opacity-90 transition" />
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-tr from-white/40 via-white/0 to-white/0 rotate-12 animate-shine" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
            <img src={image} alt={title} className="w-24 h-24 object-contain drop-shadow-xl mb-4" loading="lazy" />
            <h3 className="text-2xl font-extrabold text-yellow-900 drop-shadow-lg mb-2 text-center uppercase tracking-widest">
              {title}
            </h3>
            <span className="text-base text-yellow-900/80 font-semibold tracking-wide mb-4 text-center">
              {subtitle}
            </span>
            <div className="mt-auto w-full flex justify-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 px-4 py-1 text-xs font-bold text-yellow-900 shadow-md animate-pulse">
                Super Rare
              </span>
            </div>
          </div>
        </div>
        {/* Très Limité (Noir) */}
        <div className="relative flex flex-col items-center justify-center w-64 h-96 rounded-2xl shadow-2xl bg-gradient-to-br from-black via-gray-900 to-gray-800 border-4 border-white/40 overflow-hidden group">
          <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-gray-900/40 via-black/30 to-gray-800/40 blur-2xl opacity-70 group-hover:opacity-90 transition" />
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-tr from-white/20 via-white/0 to-white/0 rotate-12 animate-shine" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
            <img src={image} alt={title} className="w-24 h-24 object-contain drop-shadow-xl mb-4" loading="lazy" />
            <h3 className="text-2xl font-extrabold text-white drop-shadow-lg mb-2 text-center uppercase tracking-widest">
              {title}
            </h3>
            <span className="text-base text-white/80 font-semibold tracking-wide mb-4 text-center">
              {subtitle}
            </span>
            <div className="mt-auto w-full flex justify-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-800 px-4 py-1 text-xs font-bold text-white shadow-md animate-pulse">
                Édition Très limitée
              </span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .animate-shine {
            animation: shine-move 2.5s linear infinite;
          }
          @keyframes shine-move {
            0% { transform: translateX(-100%) rotate(12deg); opacity: 0.2; }
            60% { opacity: 0.7; }
            100% { transform: translateX(100%) rotate(12deg); opacity: 0.2; }
          }
        `}</style>
      </div>
    </div>
  );
} 