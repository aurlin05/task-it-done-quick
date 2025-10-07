import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Sky, Html } from "@react-three/drei";
import { MuseumModel } from "./MuseumModel";
import { ArtworkFrame } from "./ArtworkFrame";
import { Hotspot } from "./Hotspot";
import { useMuseumData } from "@/hooks/useMuseumData";
import { Artwork, Hotspot as HotspotType } from "@/types/museum";
import { Loader2, Map, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Museum3DScene = () => {
  const { data, loading, error } = useMuseumData();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string>("Main_Gallery");
  const [showMinimap, setShowMinimap] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleHotspotScan = (hotspot: HotspotType) => {
    const artwork = data?.artworks.find(a => a.id === hotspot.artwork_id);
    if (artwork) {
      setSelectedArtwork(artwork);
    }
  };

  const handleRoomChange = (roomName: string) => {
    setCurrentRoom(roomName);
    const room = data?.rooms.find(r => r.name === roomName);
    if (room) {
      // Camera will smoothly transition to room position
    }
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="text-white font-medium">Chargement du musée...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-medium">Erreur de chargement</p>
          <p className="text-white text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  const currentRoomData = data?.rooms.find(r => r.name === currentRoom);
  const roomArtworks = data?.artworks.filter(a => a.room === currentRoom) || [];
  const roomHotspots = data?.hotspots.filter(h => {
    const artwork = data?.artworks.find(a => a.id === h.artwork_id);
    return artwork?.room === currentRoom;
  }) || [];

  return (
    <div className="relative w-full h-full">
      <Canvas shadows camera={{ position: [0, 1.6, 8], fov: 60 }}>
        <PerspectiveCamera makeDefault position={[0, 1.6, 8]} />
        <OrbitControls 
          enablePan={true}
          minDistance={3}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
        />

        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        <hemisphereLight intensity={0.5} groundColor="#2C1810" />

        {/* Environment */}
        <Sky sunPosition={[100, 20, 100]} />
        <Environment preset="city" />

        <Suspense fallback={
          <Html center>
            <div className="glass-effect rounded-lg px-4 py-2 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span className="text-sm font-medium text-white">Chargement du modèle 3D...</span>
            </div>
          </Html>
        }>
          {/* Museum 3D Model */}
          <MuseumModel onLoad={() => setModelLoaded(true)} />

          {/* Artworks */}
          {modelLoaded && roomArtworks.map((artwork) => (
            <ArtworkFrame
              key={artwork.id}
              artwork={artwork}
              onClick={handleArtworkClick}
            />
          ))}

          {/* Hotspots */}
          {modelLoaded && roomHotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              hotspot={hotspot}
              onScan={handleHotspotScan}
            />
          ))}
        </Suspense>

        {/* Floor Grid (for reference) */}
        <gridHelper args={[50, 50, "#D4AF37", "#3D2817"]} position={[0, 0.01, 0]} />
      </Canvas>

      {/* Room Navigation */}
      <div className="absolute top-4 left-4 space-y-2 z-10">
        <Card className="glass-effect p-3">
          <div className="flex items-center gap-2 mb-2">
            <Map className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">Salles</span>
          </div>
          <div className="space-y-1">
            {data?.rooms.map((room) => (
              <Button
                key={room.name}
                variant={currentRoom === room.name ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => handleRoomChange(room.name)}
              >
                {room.name.replace(/_/g, " ")}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Artwork Info Panel */}
      {selectedArtwork && (
        <div className="absolute top-4 right-4 z-10 max-w-sm">
          <Card className="glass-effect p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-white">Détails de l'œuvre</h3>
              </div>
              <button
                onClick={() => setSelectedArtwork(null)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-sm text-white/90">
              <p><strong>Nom:</strong> {selectedArtwork.name.replace(/_/g, " ")}</p>
              <p><strong>Salle:</strong> {selectedArtwork.room.replace(/_/g, " ")}</p>
              <p><strong>Mur:</strong> {selectedArtwork.wall}</p>
              <p className="text-xs text-white/60 mt-3">
                Cliquez sur les sphères bleues pour scanner le QR code et obtenir plus d'informations.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Stats Overlay */}
      <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2 text-sm text-white z-10">
        <div className="flex items-center gap-4">
          <span><strong>{roomArtworks.length}</strong> œuvres</span>
          <span>•</span>
          <span><strong>{currentRoomData?.name.replace(/_/g, " ")}</strong></span>
        </div>
      </div>

      {/* Controls Help */}
      <div className="absolute bottom-4 right-4 glass-effect rounded-lg px-4 py-2 text-xs text-white/80 z-10">
        <div className="space-y-1">
          <p>🖱️ Clic gauche + glisser: Rotation</p>
          <p>🖱️ Molette: Zoom</p>
          <p>🖱️ Clic droit + glisser: Déplacement</p>
        </div>
      </div>
    </div>
  );
};
