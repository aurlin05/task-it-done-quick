import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Sky, Text } from "@react-three/drei";
import * as THREE from "three";
import { ArtifactDisplay } from "./ArtifactDisplay";
import { MuseumRoom } from "./MuseumRoom";

export const Museum3DScene = () => {
  const [currentRoom, setCurrentRoom] = useState(0);

  const rooms = [
    { name: "Salle des Masques", artifacts: ["mask1", "mask2", "mask3"] },
    { name: "Salle des Textiles", artifacts: ["textile1", "textile2", "textile3"] },
    { name: "Salle des Sculptures", artifacts: ["sculpture1", "sculpture2", "sculpture3"] },
  ];

  return (
    <div className="relative w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1.6, 5]} />
        <OrbitControls 
          enablePan={false}
          minDistance={2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
        />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        {/* Environment */}
        <Sky sunPosition={[100, 20, 100]} />
        <Environment preset="warehouse" />

        {/* Museum Room */}
        <MuseumRoom roomIndex={currentRoom} />

        {/* Artifacts */}
        <ArtifactDisplay position={[-2, 1.5, -3]} type="mask" color="#D4AF37" />
        <ArtifactDisplay position={[0, 1.5, -3]} type="sculpture" color="#CD7F32" />
        <ArtifactDisplay position={[2, 1.5, -3]} type="textile" color="#8B4513" />

        {/* Room Title */}
        <Text
          position={[0, 3, -4]}
          fontSize={0.3}
          color="#D4AF37"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {rooms[currentRoom].name}
        </Text>

        {/* Navigation Portals */}
        {currentRoom > 0 && (
          <mesh
            position={[-4, 1, 0]}
            onClick={() => setCurrentRoom(currentRoom - 1)}
            onPointerOver={(e) => (document.body.style.cursor = "pointer")}
            onPointerOut={(e) => (document.body.style.cursor = "default")}
          >
            <boxGeometry args={[0.5, 2, 0.5]} />
            <meshStandardMaterial color="#4A90E2" emissive="#4A90E2" emissiveIntensity={0.5} />
          </mesh>
        )}
        
        {currentRoom < rooms.length - 1 && (
          <mesh
            position={[4, 1, 0]}
            onClick={() => setCurrentRoom(currentRoom + 1)}
            onPointerOver={(e) => (document.body.style.cursor = "pointer")}
            onPointerOut={(e) => (document.body.style.cursor = "default")}
          >
            <boxGeometry args={[0.5, 2, 0.5]} />
            <meshStandardMaterial color="#4A90E2" emissive="#4A90E2" emissiveIntensity={0.5} />
          </mesh>
        )}

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#2C1810" />
        </mesh>
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-effect rounded-full px-6 py-3 flex items-center gap-4">
        <button
          onClick={() => currentRoom > 0 && setCurrentRoom(currentRoom - 1)}
          disabled={currentRoom === 0}
          className="text-sm font-medium disabled:opacity-30"
        >
          ← Salle précédente
        </button>
        <span className="text-sm font-bold text-secondary">
          {currentRoom + 1} / {rooms.length}
        </span>
        <button
          onClick={() => currentRoom < rooms.length - 1 && setCurrentRoom(currentRoom + 1)}
          disabled={currentRoom === rooms.length - 1}
          className="text-sm font-medium disabled:opacity-30"
        >
          Salle suivante →
        </button>
      </div>
    </div>
  );
};
