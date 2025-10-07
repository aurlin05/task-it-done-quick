import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scan, Camera, Zap, Sparkles } from "lucide-react";

const QRScannerSection = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanToggle = () => {
    setIsScanning(!isScanning);
    // Simulate scan after 2 seconds
    if (!isScanning) {
      setTimeout(() => {
        setIsScanning(false);
      }, 2000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-soft to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-secondary animate-pulse" />
                <span className="text-sm font-medium">Technologie AR</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Scanner les{" "}
                <span className="text-gradient-gold">Œuvres</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Utilisez votre smartphone pour scanner les codes QR près des œuvres et débloquer 
                une expérience immersive en réalité augmentée avec des informations détaillées, 
                des audio-guides et des visualisations 3D.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scan Instantané</h4>
                    <p className="text-sm text-muted-foreground">
                      Scanner automatique avec détection rapide et précise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contenu Enrichi</h4>
                    <p className="text-sm text-muted-foreground">
                      Audio multilingue, vidéos 360°, et modèles 3D interactifs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mode AR</h4>
                    <p className="text-sm text-muted-foreground">
                      Visualisez les œuvres en réalité augmentée dans votre espace
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="xl"
                onClick={handleScanToggle}
                disabled={isScanning}
              >
                <Scan className="w-5 h-5" />
                {isScanning ? "Scan en cours..." : "Activer le Scanner"}
              </Button>
            </div>

            {/* Right: Scanner Interface */}
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-depth">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative">
                {!isScanning ? (
                  // Idle state
                  <div className="text-center p-8 space-y-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                      <Scan className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Scanner QR</h3>
                      <p className="text-muted-foreground">
                        Cliquez sur le bouton pour commencer
                      </p>
                    </div>
                  </div>
                ) : (
                  // Scanning state
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Scanner Frame */}
                    <div className="relative w-64 h-64">
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-secondary rounded-tl-xl" />
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-secondary rounded-tr-xl" />
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-secondary rounded-bl-xl" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-secondary rounded-br-xl" />
                      
                      {/* Scanning line */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" />
                      </div>

                      {/* Scanning animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="scanning-line" />
                      </div>
                    </div>

                    <p className="absolute bottom-8 text-sm font-medium animate-pulse">
                      Recherche de QR code...
                    </p>
                  </div>
                )}

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-primary/20" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .scanning-line {
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, 
            transparent, 
            hsl(42 78% 55%), 
            transparent
          );
          box-shadow: 0 0 20px hsl(42 78% 55%);
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default QRScannerSection;
