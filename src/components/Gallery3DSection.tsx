import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Maximize2, MousePointer2, Move3D, Scan, Map } from "lucide-react";
import { Museum3DScene } from "./3d/Museum3DScene";

const Gallery3DSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.getElementById('museum-3d-container');
    if (element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <section id="galerie" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 tribal-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 animate-in fade-in slide-in-from-top">
              <Box className="w-4 h-4 text-secondary animate-shimmer" />
              <span className="text-sm font-medium">Musée des Civilisations Noires</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold animate-in fade-in slide-in-from-bottom">
              Visite Virtuelle{" "}
              <span className="text-gradient-gold">Interactive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom delay-100">
              Explorez le Musée des Civilisations Noires de Dakar en 3D. Découvrez 14 œuvres d'art 
              réparties dans 5 salles authentiques avec navigation immersive et points d'intérêt interactifs.
            </p>
          </div>

          {/* Main 3D View Card */}
          <Card 
            id="museum-3d-container"
            className="relative overflow-hidden border-2 border-primary/20 shadow-depth mb-12 animate-in fade-in slide-in-from-bottom delay-200"
          >
            <div className="aspect-video bg-gradient-to-b from-black to-gray-900 relative">
              <Museum3DScene />
            </div>
          </Card>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="glass-effect p-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-1">14</div>
              <div className="text-sm text-muted-foreground">Œuvres d'Art</div>
            </Card>
            <Card className="glass-effect p-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-1">5</div>
              <div className="text-sm text-muted-foreground">Salles</div>
            </Card>
            <Card className="glass-effect p-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-1">14</div>
              <div className="text-sm text-muted-foreground">Points QR</div>
            </Card>
            <Card className="glass-effect p-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-1">360°</div>
              <div className="text-sm text-muted-foreground">Navigation</div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-elevation group bg-gradient-to-br from-card to-card/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Navigation par Salles</h3>
              <p className="text-sm text-muted-foreground">
                Explorez 5 salles authentiques du musée : Hall d'Entrée, Galerie Principale, 
                et galeries latérales A et B avec navigation intuitive.
              </p>
            </Card>

            <Card className="p-6 border-2 border-transparent hover:border-secondary/20 transition-all duration-300 hover:shadow-elevation group bg-gradient-to-br from-card to-card/50">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Modèle 3D Authentique</h3>
              <p className="text-sm text-muted-foreground">
                Basé sur le véritable plan du MCN avec positions exactes des œuvres, 
                dimensions réelles et architecture fidèle.
              </p>
            </Card>

            <Card className="p-6 border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-elevation group bg-gradient-to-br from-card to-card/50">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scan className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Points Interactifs</h3>
              <p className="text-sm text-muted-foreground">
                Cliquez sur les sphères bleues pour scanner les QR codes et accéder 
                aux informations détaillées de chaque œuvre.
              </p>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="glass-effect p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MousePointer2 className="w-5 h-5 text-primary" />
              Guide de Navigation
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">🖱️ Rotation</p>
                <p className="text-muted-foreground">Clic gauche + glisser pour tourner la caméra</p>
              </div>
              <div>
                <p className="font-medium mb-1">🔍 Zoom</p>
                <p className="text-muted-foreground">Molette de la souris pour zoomer/dézoomer</p>
              </div>
              <div>
                <p className="font-medium mb-1">✋ Déplacement</p>
                <p className="text-muted-foreground">Clic droit + glisser pour se déplacer</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                document.getElementById('museum-3d-container')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
            >
              <Box className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Explorer le Musée en 3D
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery3DSection;
