
"use client"
import React, { useState } from "react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MessageCircle, Heart, Twitter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PostForm from "@/components/post/post-form";
import Modal from "@/components/ui/modal";
import { ChartContainer } from "@/components/ui/chart";
import * as RechartsPrimitive from "recharts";

// Données de démonstration
const mockProfile = {
  id: "1",
  name: "Lionel Messi",
  image: "/personnage/blaise.jpeg",
  banner: "/globe.svg", // bannière fictive
  bio: "Footballeur argentin, considéré comme l'un des meilleurs joueurs de tous les temps.",
  rarity: "limited" as const,
  fans: 450000000,
  subscribers: 12500000,
  tokensInCirculation: 10000, // nombre de tokens fictif
  photos: [
    "/personnage/blaise.jpeg",
    "/personnage/nouh.jpeg",
    "/personnage/ruben.jpeg",
    "/personnage/yasmine.jpeg",
  ],
  tweets: [
    { id: 1, content: "Incroyable victoire ce soir ! Merci à tous les fans.", date: "2024-05-01" },
    { id: 2, content: "Entraînement intensif pour le prochain match.", date: "2024-04-28" },
  ],
  publications: [
    {
      id: 1,
      image: "/personnage/blaise.jpeg",
      likes: 1200,
      comments: 45,
    },
    {
      id: 2,
      image: "/personnage/nouh.jpeg",
      likes: 980,
      comments: 30,
    },
  ],
};

// Données mockées pour l'évolution du prix
const priceHistory = [
  { date: "2024-05-01", price: 12 },
  { date: "2024-05-02", price: 13 },
  { date: "2024-05-03", price: 13.5 },
  { date: "2024-05-04", price: 14 },
  { date: "2024-05-05", price: 13.8 },
  { date: "2024-05-06", price: 15 },
  { date: "2024-05-07", price: 16 },
  { date: "2024-05-08", price: 15.5 },
  { date: "2024-05-09", price: 16.2 },
  { date: "2024-05-10", price: 17 },
];

export default function ProfilePage() {
  const [tab, setTab] = useState("photos");
  const profile = mockProfile;
  const hasToken = true; // Simule la détention d'au moins 1 token par le wallet
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex-1 w-full py-8 px-2 md:px-8 gap-8">
        <div className="flex justify-end mb-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            onClick={() => setModalOpen(true)}
          >
            Publier
          </button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Créer une publication">
          <PostForm />
        </Modal>
        <main className="w-full">
          {/* Bannière */}
          <div className="relative mb-6">
            <img src={profile.banner} alt="Bannière" className="w-full h-40 object-cover rounded-xl border" loading="lazy" />
            <div className="absolute -bottom-10 left-6 flex items-end">
              <img src={profile.image} alt={profile.name} className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg" loading="lazy" />
            </div>
          </div>
          <div className="mt-12 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-gray-600 mt-1 max-w-xl">{profile.bio}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="text-sm text-gray-500">Tokens en circulation :</div>
              <div className="text-lg font-semibold text-blue-600">{profile.tokensInCirculation.toLocaleString()}</div>
              <div className="flex gap-2 mt-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition">Acheter</button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium transition">Revendre</button>
              </div>
            </div>
          </div>
          {/* Graphique d'évolution de prix */}
          <div className="mb-8 w-full">
            <ChartContainer
              config={{ price: { label: "Prix", color: "#2563eb" } }}
              className="bg-white rounded-xl border shadow p-4 w-full"
              style={{ height: 260, width: '100%' }}
            >
              <RechartsPrimitive.LineChart data={priceHistory} margin={{ top: 16, right: 24, left: 0, bottom: 0 }}>
                <RechartsPrimitive.XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <RechartsPrimitive.YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={40} />
                <RechartsPrimitive.Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
                <RechartsPrimitive.Tooltip />
              </RechartsPrimitive.LineChart>
            </ChartContainer>
          </div>
          {/* Affichage conditionnel selon la détention de tokens */}
          {hasToken ? (
            <>
              <ProfileHeader profile={profile} />
              <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="mb-6 flex gap-2 bg-gray-50 border border-gray-200 rounded-lg p-1">
                  <TabsTrigger value="photos" className="flex items-center gap-2"><img src="/globe.svg" alt="Photos" className="h-4 w-4" />Photos</TabsTrigger>
                  <TabsTrigger value="tweets" className="flex items-center gap-2"><Twitter className="h-4 w-4 text-blue-500" />Tweets</TabsTrigger>
                  <TabsTrigger value="likes" className="flex items-center gap-2"><Heart className="h-4 w-4 text-pink-500" />Likes & Commentaires</TabsTrigger>
                </TabsList>
                {/* Photos */}
                <TabsContent value="photos">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {profile.photos.map((photo, i) => (
                      <img key={i} src={photo} alt="Photo publiée" className="w-full h-32 object-cover rounded-xl border" loading="lazy" />
                    ))}
                  </div>
                </TabsContent>
                {/* Tweets */}
                <TabsContent value="tweets">
                  <div className="space-y-4">
                    {profile.tweets.map((tweet) => (
                      <div key={tweet.id} className="bg-white border rounded-lg p-4 shadow-sm flex gap-3">
                        <Twitter className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="text-gray-800 font-medium">{tweet.content}</div>
                          <div className="text-xs text-gray-400 mt-1">{tweet.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Likes & Commentaires */}
                <TabsContent value="likes">
                  <div className="space-y-4">
                    {profile.publications.map((pub) => (
                      <div key={pub.id} className="flex items-center gap-4 bg-white border rounded-lg p-3 shadow-sm">
                        <img src={pub.image} alt="Publication" className="w-16 h-16 object-cover rounded-lg border" loading="lazy" />
                        <div className="flex-1 flex gap-6">
                          <div className="flex items-center gap-1 text-gray-600"><Heart className="h-4 w-4 text-pink-500" /> <span className="font-semibold">{pub.likes}</span> <span className="text-xs">likes</span></div>
                          <div className="flex items-center gap-1 text-gray-600"><MessageCircle className="h-4 w-4 text-blue-400" /> <span className="font-semibold">{pub.comments}</span> <span className="text-xs">commentaires</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="mt-12 p-8 bg-white border rounded-xl shadow text-center text-gray-500">
              Vous devez posséder au moins 1 token de ce joueur pour accéder à son contenu exclusif.
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 