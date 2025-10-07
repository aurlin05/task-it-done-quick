import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scan, X, RotateCw, Maximize2, Info } from "lucide-react";
import { toast } from "sonner";

export const ARViewer = () => {
  const [isARActive, setIsARActive] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const artifacts = [
    { id: "mask", name: "Masque Baoulé", period: "XIXe siècle" },
    { id: "sculpture", name: "Statue Nok", period: "500 av. J.-C." },
    { id: "textile", name: "Kente Royal", period: "XVIIe siècle" },
  ];

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startAR = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsARActive(true);
        toast.success("Mode AR activé !");
      }
    } catch (error) {
      console.error("Erreur d'accès à la caméra:", error);
      toast.error("Impossible d'accéder à la caméra");
      setIsARActive(true); // Simulation mode
    }
  };

  const stopAR = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsARActive(false);
    setSelectedArtifact(null);
  };

  if (!isARActive) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2">
              <Scan className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-medium">Réalité Augmentée</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Découvrez les Œuvres en{" "}
              <span className="text-gradient-gold">Réalité Augmentée</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visualisez les artefacts en taille réelle dans votre espace. Tournez autour, 
              zoomez et découvrez chaque détail comme si vous y étiez.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {artifacts.map((artifact) => (
                <Card key={artifact.id} className="p-6 hover:shadow-elevation transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Scan className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{artifact.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{artifact.period}</p>
                </Card>
              ))}
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={startAR}
              className="mt-8 group"
            >
              <Scan className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Lancer l'Expérience AR
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Camera Feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AR Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30">
        {/* 3D Artifact Placeholder */}
        {selectedArtifact && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Simulated 3D Object */}
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm rounded-lg animate-float" 
                     style={{ 
                       transform: "perspective(1000px) rotateY(15deg)",
                       boxShadow: "0 20px 60px rgba(212, 175, 55, 0.5)"
                     }}>
                  <div className="absolute inset-0 border-2 border-secondary/50 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-white font-bold text-xl mb-2">
                      {artifacts.find(a => a.id === selectedArtifact)?.name}
                    </p>
                    <p className="text-white/80 text-sm">
                      {artifacts.find(a => a.id === selectedArtifact)?.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* AR Markers */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-secondary" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-secondary" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary" />
            </div>
          </div>
        )}

        {/* AR Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%),
                 linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%)
               `,
               backgroundSize: '40px 40px',
             }}
        />

        {/* Top Controls */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 glass-effect rounded-full px-4 py-2">
          <p className="text-sm font-medium text-white">
            Déplacez votre appareil pour placer l'objet
          </p>
        </div>

        {/* Artifact Selector */}
        {!selectedArtifact && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4">
            {artifacts.map((artifact) => (
              <button
                key={artifact.id}
                onClick={() => {
                  setSelectedArtifact(artifact.id);
                  toast.success(`${artifact.name} placé en AR !`);
                }}
                className="glass-effect rounded-lg px-6 py-3 hover:bg-white/20 transition-all"
              >
                <p className="text-white font-semibold text-sm">{artifact.name}</p>
              </button>
            ))}
          </div>
        )}

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {selectedArtifact && (
            <>
              <button className="glass-effect rounded-full p-4 hover:bg-white/20 transition-all">
                <RotateCw className="w-6 h-6 text-white" />
              </button>
              <button className="glass-effect rounded-full p-4 hover:bg-white/20 transition-all">
                <Maximize2 className="w-6 h-6 text-white" />
              </button>
              <button className="glass-effect rounded-full p-4 hover:bg-white/20 transition-all">
                <Info className="w-6 h-6 text-white" />
              </button>
            </>
          )}
          
          <button
            onClick={stopAR}
            className="bg-red-500/80 backdrop-blur-sm rounded-full p-4 hover:bg-red-600/80 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
