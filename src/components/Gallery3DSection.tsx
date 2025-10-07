import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Maximize2, MousePointer2, Move3D } from "lucide-react";
import { Museum3DScene } from "./3d/Museum3DScene";

const Gallery3DSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="galerie" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2">
              <Box className="w-4 h-4 text-secondary animate-shimmer" />
              <span className="text-sm font-medium">Expérience Immersive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Galerie Virtuelle{" "}
              <span className="text-gradient-hero">3D</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez le musée comme si vous y étiez. Navigation fluide, éclairage dynamique, 
              et interactions immersives.
            </p>
          </div>

          {/* Main 3D View Card */}
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-depth mb-12">
            <div className="aspect-video bg-black relative">
              <Museum3DScene />
              
              {/* Controls overlay */}
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2 flex items-center gap-2 z-10">
                <MousePointer2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white">Cliquez et glissez pour naviguer • Molette pour zoomer</span>
              </div>

              {/* Fullscreen button */}
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="absolute top-4 right-4 glass-effect rounded-lg p-2 hover:bg-white/20 transition-colors z-10"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-elevation group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Move3D className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Navigation Fluide</h3>
              <p className="text-sm text-muted-foreground">
                Déplacez-vous librement dans les salles avec des contrôles intuitifs au clavier, 
                souris ou tactile.
              </p>
            </Card>

            <Card className="p-6 border-2 border-transparent hover:border-secondary/20 transition-all duration-300 hover:shadow-elevation group">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Œuvres 3D</h3>
              <p className="text-sm text-muted-foreground">
                Visualisez les artefacts sous tous les angles avec des modèles 3D haute résolution 
                et textures réalistes.
              </p>
            </Card>

            <Card className="p-6 border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-elevation group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mode Plein Écran</h3>
              <p className="text-sm text-muted-foreground">
                Immersion totale avec le mode plein écran et support VR pour une expérience 
                encore plus réaliste.
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" className="group">
              <Box className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Entrer dans la Galerie 3D
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery3DSection;
