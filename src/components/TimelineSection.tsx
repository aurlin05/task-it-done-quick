import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Scroll } from "lucide-react";

const timelineEvents = [
  {
    year: "3000 av. J-C",
    title: "Civilisation de l'Égypte Ancienne",
    description: "Naissance de l'une des plus grandes civilisations africaines",
    region: "Afrique du Nord",
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "500 av. J-C",
    title: "Royaume de Koush",
    description: "Émergence du puissant royaume nubien",
    region: "Nubie",
    color: "from-blue-500 to-cyan-600",
  },
  {
    year: "300-1500",
    title: "Empire du Ghana",
    description: "L'âge d'or du commerce transsaharien",
    region: "Afrique de l'Ouest",
    color: "from-green-500 to-emerald-600",
  },
  {
    year: "1200-1600",
    title: "Empire du Mali",
    description: "Apogée culturelle et économique sous Mansa Moussa",
    region: "Afrique de l'Ouest",
    color: "from-yellow-500 to-amber-600",
  },
  {
    year: "1300-1897",
    title: "Royaume du Bénin",
    description: "Centre artistique majeur et puissance commerciale",
    region: "Afrique de l'Ouest",
    color: "from-red-500 to-rose-600",
  },
  {
    year: "1464-1591",
    title: "Empire Songhaï",
    description: "Expansion territoriale et rayonnement intellectuel",
    region: "Afrique de l'Ouest",
    color: "from-purple-500 to-pink-600",
  },
];

const TimelineSection = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section id="timeline" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Voyage dans le Temps</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-hero">Timeline</span> Historique
          </h2>
          <p className="text-lg text-muted-foreground">
            Parcourez 5000 ans d'histoire africaine à travers les grandes civilisations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          {/* Events */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveEvent(index)}
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeEvent === index
                        ? "bg-secondary scale-150 animate-pulse-glow"
                        : "bg-primary"
                    }`}
                  />
                </div>

                {/* Event Card */}
                <Card
                  className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                    activeEvent === index
                      ? "border-primary shadow-depth -translate-y-2"
                      : "border-transparent shadow-md hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <div className="space-y-2">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color}`}
                    >
                      {event.year}
                    </div>
                    <h3 className="font-bold text-sm line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{event.region}</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Active Event Detail */}
          <Card className="mt-12 p-8 glass-effect border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div
                  className={`inline-block px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r ${timelineEvents[activeEvent].color}`}
                >
                  {timelineEvents[activeEvent].year}
                </div>
                <h3 className="text-3xl font-bold">
                  {timelineEvents[activeEvent].title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {timelineEvents[activeEvent].description}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{timelineEvents[activeEvent].region}</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-xl animate-float">
                  <Scroll className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
