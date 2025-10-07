import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Scan } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("FR");

  const languages = ["FR", "EN", "WO"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold animate-pulse-glow">
              MCN
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gradient-hero">
                Musée des Civilisations Noires
              </h1>
              <p className="text-xs text-muted-foreground">Dakar, Sénégal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#accueil" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">
              Collections
            </a>
            <a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">
              Histoire
            </a>
            <a href="#galerie" className="text-sm font-medium hover:text-primary transition-colors">
              Galerie 3D
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-1 glass-effect rounded-full px-3 py-1">
              <Globe className="w-4 h-4 text-muted-foreground" />
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* QR Scanner Button */}
            <Button variant="hero" size="default" className="hidden md:flex">
              <Scan className="w-4 h-4" />
              Scanner QR
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3 animate-in slide-in-from-top duration-300">
            <a
              href="#accueil"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </a>
            <a
              href="#collections"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#timeline"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Histoire
            </a>
            <a
              href="#galerie"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie 3D
            </a>
            <div className="pt-3 border-t border-border">
              <Button variant="hero" size="default" className="w-full">
                <Scan className="w-4 h-4" />
                Scanner QR Code
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
