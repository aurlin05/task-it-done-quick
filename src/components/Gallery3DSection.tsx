import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Maximize2, MousePointer2, Move3D } from "lucide-react";

const Gallery3DSection = () => {
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
            {/* Mock 3D Environment */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative flex items-center justify-center">
              {/* Grid floor effect */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(0deg, transparent 24%, hsla(var(--primary) / 0.2) 25%, hsla(var(--primary) / 0.2) 26%, transparent 27%, transparent 74%, hsla(var(--primary) / 0.2) 75%, hsla(var(--primary) / 0.2) 76%, transparent 77%, transparent),
                  linear-gradient(90deg, transparent 24%, hsla(var(--primary) / 0.2) 25%, hsla(var(--primary) / 0.2) 26%, transparent 27%, transparent 74%, hsla(var(--primary) / 0.2) 75%, hsla(var(--primary) / 0.2) 76%, transparent 77%, transparent)
                `,
                backgroundSize: '50px 50px',
              }} />

              {/* 3D Objects representation */}
              <div className="relative z-10 flex items-center justify-center gap-8">
                <div className="w-32 h-40 bg-gradient-to-b from-primary/30 to-primary/10 backdrop-blur-sm rounded-lg shadow-depth transform -rotate-12 hover:rotate-0 transition-transform duration-500 border border-primary/30 animate-float" />
                <div className="w-40 h-48 bg-gradient-to-b from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg shadow-depth hover:scale-110 transition-transform duration-500 border border-secondary/30 animate-float" style={{ animationDelay: '1s' }} />
                <div className="w-32 h-40 bg-gradient-to-b from-accent/30 to-accent/10 backdrop-blur-sm rounded-lg shadow-depth transform rotate-12 hover:rotate-0 transition-transform duration-500 border border-accent/30 animate-float" style={{ animationDelay: '2s' }} />
              </div>

              {/* Controls overlay */}
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2 flex items-center gap-2">
                <MousePointer2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Cliquez et glissez pour naviguer</span>
              </div>

              {/* Fullscreen button */}
              <button className="absolute top-4 right-4 glass-effect rounded-lg p-2 hover:bg-white/80 dark:hover:bg-black/40 transition-colors">
                <Maximize2 className="w-5 h-5" />
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
