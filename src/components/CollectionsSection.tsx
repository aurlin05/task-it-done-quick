import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import artifactMask from "@/assets/artifact-mask.jpg";
import artifactTextile from "@/assets/artifact-textile.jpg";
import artifactSculpture from "@/assets/artifact-sculpture.jpg";

const collections = [
  {
    id: 1,
    title: "Masques Cérémoniels",
    region: "Afrique de l'Ouest",
    period: "XVème - XIXème siècle",
    count: 234,
    image: artifactMask,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "Textiles Traditionnels",
    region: "Afrique Subsaharienne",
    period: "XVIème - XXème siècle",
    count: 456,
    image: artifactTextile,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Sculptures Ancestrales",
    region: "Afrique Centrale",
    period: "XIIème - XVIIIème siècle",
    count: 189,
    image: artifactSculpture,
    color: "from-rose-500 to-pink-600",
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tribal-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Collections Permanentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Découvrez nos{" "}
            <span className="text-gradient-gold">Trésors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explorez des millénaires d'art et de culture africaine à travers nos collections exceptionnelles
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={collection.id}
              className="group relative overflow-hidden border-0 shadow-elevation hover:shadow-depth transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4 glass-effect rounded-full px-3 py-1 text-sm font-medium">
                  {collection.count} pièces
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-gradient-gold transition-all">
                  {collection.title}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium">{collection.region}</p>
                  <p>{collection.period}</p>
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full group/btn mt-4"
                >
                  <span>Explorer la collection</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors pointer-events-none`} />
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Voir toutes les collections
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
