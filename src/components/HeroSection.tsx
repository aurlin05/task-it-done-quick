import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-museum.jpg";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Animated Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-10 pointer-events-none particles-container" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 animate-in fade-in slide-in-from-top duration-700">
            <Sparkles className="w-4 h-4 text-secondary animate-shimmer" />
            <span className="text-sm font-medium">Expérience Immersive 3D • Réalité Augmentée</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Explorez le Patrimoine
            <br />
            <span className="text-gradient-gold">Africain</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Une visite virtuelle révolutionnaire du Musée des Civilisations Noires de Dakar. 
            Découvrez plus de 3000 ans d'histoire à travers une expérience digitale unique.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl font-bold text-gradient-gold">2000+</div>
              <div className="text-sm text-muted-foreground">Œuvres</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl font-bold text-gradient-gold">12</div>
              <div className="text-sm text-muted-foreground">Salles 3D</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-3xl font-bold text-gradient-gold">3</div>
              <div className="text-sm text-muted-foreground">Langues</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button variant="hero" size="xl" className="group">
              Commencer l'Exploration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Voir la Vidéo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .particles-container .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, hsl(42 78% 55%), hsl(45 90% 65%));
          border-radius: 50%;
          opacity: 0;
          animation: float-particle linear infinite;
          box-shadow: 0 0 10px hsla(42 78% 55% / 0.5);
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
