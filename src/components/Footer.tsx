import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                MCN
              </div>
              <h3 className="font-bold text-lg">Musée des Civilisations Noires</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Un lieu dédié à la préservation et à la célébration du patrimoine africain 
              à travers l'art, l'histoire et la culture.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#collections" className="text-muted-foreground hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Histoire</a></li>
              <li><a href="#galerie" className="text-muted-foreground hover:text-primary transition-colors">Galerie 3D</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À Propos</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Expositions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Événements</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Recherche</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Publications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Route de l'aéroport,<br />
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+221 33 889 50 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@mcn.sn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Musée des Civilisations Noires. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
