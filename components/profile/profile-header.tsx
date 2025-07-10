import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, Star, Flame, Sparkles, Shield } from "lucide-react";

interface Profile {
  id: string;
  name: string;
  image: string;
  rarity: "normal" | "rare" | "super-rare" | "limited";
  fans: number;
  subscribers: number;
}

const rarityConfig = {
  normal: { label: "Normal", color: "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 text-gray-900", icon: <Star className="h-4 w-4 mr-1 text-gray-400" /> },
  rare: { label: "Rare", color: "bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 text-gray-900", icon: <Flame className="h-4 w-4 mr-1 text-orange-500" /> },
  "super-rare": { label: "Super Rare", color: "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-yellow-900", icon: <Sparkles className="h-4 w-4 mr-1 text-yellow-500" /> },
  limited: { label: "Limitée", color: "bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white", icon: <Shield className="h-4 w-4 mr-1 text-white" /> },
};

export function ProfileHeader({ profile }: { profile: Profile }) {
  const rarity = rarityConfig[profile.rarity];
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg" />
      <div className="flex-1 space-y-2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <Badge className={`${rarity.color} px-3 py-1 text-xs font-semibold flex items-center`}>{rarity.icon}{rarity.label}</Badge>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-6 mt-2">
          <div className="flex items-center gap-1 text-gray-600"><Users className="h-4 w-4" /> <span className="font-semibold">{profile.fans.toLocaleString()}</span> <span className="text-xs">fans</span></div>
          <div className="flex items-center gap-1 text-gray-600"><UserCheck className="h-4 w-4" /> <span className="font-semibold">{profile.subscribers.toLocaleString()}</span> <span className="text-xs">abonnés</span></div>
        </div>
      </div>
    </div>
  );
} 