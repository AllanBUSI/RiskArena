"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wallet, Shield, Zap, Eye, EyeOff } from "lucide-react";

export default function WalletLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulation d'une connexion
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden flex items-center justify-center p-4">
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="w-full max-w-md space-y-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="p-3 bg-purple-100 rounded-full shadow-lg">
              <Wallet className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Connexion Wallet</h1>
          <p className="text-gray-600">
            Connectez-vous à votre wallet pour accéder à RiskArena
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-white/80 border-gray-200 backdrop-blur-sm shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-gray-900">Accès sécurisé</CardTitle>
            <CardDescription className="text-gray-600">
              Choisissez votre méthode de connexion préférée
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Wallet Connect Button */}
            <Button
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 shadow-lg"
            >
              {isConnecting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Connexion en cours...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Connecter avec WalletConnect</span>
                </div>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Ou</span>
              </div>
            </div>

            {/* Manual Connection Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="text-gray-700">
                  Adresse du wallet
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="0x..."
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Mot de passe (optionnel)
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 pr-10 focus:border-purple-500"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-gray-100"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-500"
              >
                Se connecter manuellement
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg border border-gray-200 shadow-sm">
            <Shield className="h-5 w-5 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Connexion sécurisée</p>
              <p className="text-xs text-gray-600">Chiffrement de bout en bout</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg border border-gray-200 shadow-sm">
            <Zap className="h-5 w-5 text-blue-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Connexion rapide</p>
              <p className="text-xs text-gray-600">QR Code ou lien direct</p>
            </div>
          </div>
        </div>

        {/* Supported Wallets */}
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">Wallets supportés</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
              MetaMask
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
              Trust Wallet
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
              Rainbow
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
              Coinbase
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
} 