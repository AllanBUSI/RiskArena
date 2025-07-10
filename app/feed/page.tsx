"use client"
import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

// Données mockées
const publicPosts = [
  { id: 1, author: "Alice", content: "Bienvenue sur le feed public !", date: "2024-05-10", image: "/personnage/blaise.jpeg", bio: "Fan de foot et de blockchain." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
  { id: 2, author: "Bob", content: "Tout le monde peut voir ce post.", date: "2024-05-09", video: "https://www.w3schools.com/html/mov_bbb.mp4", bio: "Créateur de contenu sportif." },
];
const premiumPosts = [
  { id: 1, author: "VIPUser", content: "Ceci est un post premium réservé aux membres.", date: "2024-05-10", image: "/personnage/nouh.jpeg", bio: "Expert en analyse sportive." },
  { id: 2, author: "ProMember", content: "Accédez à des analyses exclusives ici !", date: "2024-05-08", video: "https://www.w3schools.com/html/movie.mp4", bio: "Trader de tokens sportifs." },
];

// Simule l'accès premium (à remplacer par ta logique réelle)
const hasPremium = true;

function TikTokCard({ post, color, innerRef, dataIndex }: { post: any; color: string; innerRef?: (el: HTMLDivElement | null) => void; dataIndex?: number }) {
  // Fonction pour passer en plein écran
  const handleFullscreen = (e: React.MouseEvent<HTMLVideoElement | HTMLImageElement>) => {
    const el = e.currentTarget;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if ((el as any).webkitRequestFullscreen) {
      (el as any).webkitRequestFullscreen();
    } else if ((el as any).msRequestFullscreen) {
      (el as any).msRequestFullscreen();
    }
  };

  return (
    <div
      ref={innerRef}
      data-index={dataIndex}
      className="w-full h-screen aspect-[9/16] md:h-[60vh] md:w-[340px] mx-auto rounded-2xl overflow-hidden shadow-lg border bg-black relative flex flex-col justify-end snap-center shrink-0"
    >
      {post.video ? (
        <video
          src={post.video}
          controls
          className="absolute inset-0 w-full h-full object-cover cursor-pointer transition duration-200 hover:brightness-90"
          onClick={handleFullscreen}
        />
      ) : post.image ? (
        <img
          src={post.image}
          alt="Post visuel"
          className="absolute inset-0 w-full h-full object-cover cursor-pointer transition duration-200 hover:brightness-90"
          loading="lazy"
          onClick={handleFullscreen}
        />
      ) : null}
      <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${color}`}>{post.author[0]}</div>
          <div>
            <div className="font-semibold text-white drop-shadow">{post.author}</div>
            <div className="text-xs text-gray-300">{post.date}</div>
          </div>
        </div>
        <div className="text-white text-base drop-shadow max-w-full break-words">{post.content}</div>
      </div>
    </div>
  );
}

// Regroupe les posts par 2 pour affichage 2 par 2 sur desktop
function chunkArray<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function FeedPage() {
  const [tab, setTab] = useState("public");
  const [currentIndex, setCurrentIndex] = useState(0);
  const posts = tab === "public" ? publicPosts : premiumPosts;
  const color = tab === "public" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700";

  // Scroll infini : concatène les posts plusieurs fois
  const infinitePosts = [...posts, ...posts, ...posts];

  // Profil dynamique selon le post affiché (par défaut le premier)
  const currentPost = posts[currentIndex] || posts[0];

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-2 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8">
        {/* Colonne feed */}
        <div>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mb-8 flex gap-2 bg-gray-100 border border-gray-200 rounded-lg p-1 w-full">
              <TabsTrigger value="public" className="flex-1">Feed public</TabsTrigger>
              <TabsTrigger value="premium" className="flex-1">Feed premium</TabsTrigger>
            </TabsList>
            <TabsContent value="public">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                {infinitePosts.map((post, i) => (
                  <TikTokCard
                    key={post.id + '-' + i}
                    post={post}
                    color="bg-blue-100 text-blue-700"
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="premium">
              {hasPremium ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                  {infinitePosts.map((post, i) => (
                    <TikTokCard
                      key={post.id + '-' + i}
                      post={post}
                      color="bg-yellow-100 text-yellow-700"
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500 border-2 border-yellow-300">
                  <div className="text-lg font-semibold mb-2 text-yellow-700">Accès réservé</div>
                  <div>Ce contenu est réservé aux membres premium.<br/>Achetez un token ou abonnez-vous pour débloquer ce feed !</div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        {/* Colonne profil (droite, desktop uniquement) */}
        <aside className="hidden md:block">
          <div className="sticky top-10 transition-all duration-300">
            <div className="bg-white rounded-2xl shadow-xl border p-8 flex flex-col items-center transition-all duration-300">
              <Link href={`/profile/${currentPost.author.toLowerCase().replace(/\s+/g, "")}`}>
                <img
                  src={currentPost.image || "/personnage/blaise.jpeg"}
                  alt={currentPost.author}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow mb-4 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                />
              </Link>
              <div className="text-xl font-bold text-gray-900 mb-1 transition-all duration-300">{currentPost.author}</div>
              <div className="text-gray-500 text-center mb-4 transition-all duration-300">{currentPost.bio || "Utilisateur du feed."}</div>
              <div className="flex gap-6 text-sm mt-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-blue-700 text-lg">{currentIndex + 1}</span>
                  <span className="text-gray-400">Post</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-green-600 text-lg">2024</span>
                  <span className="text-gray-400">Année</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 