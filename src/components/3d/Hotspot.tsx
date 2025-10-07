import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Hotspot as HotspotType } from "@/types/museum";
import { QrCode } from "lucide-react";

interface HotspotProps {
  hotspot: HotspotType;
  onScan?: (hotspot: HotspotType) => void;
}

export const Hotspot = ({ hotspot, onScan }: HotspotProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = hotspot.position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={[hotspot.position[0], hotspot.position[1], hotspot.position[2]]}>
      <mesh
        ref={meshRef}
        onClick={() => onScan?.(hotspot)}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#4A90E2"
          emissive="#4A90E2"
          emissiveIntensity={hovered ? 1 : 0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Glow effect */}
      <mesh scale={hovered ? 1.5 : 1.2}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color="#4A90E2"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Info popup */}
      {hovered && (
        <Html position={[0, 0.3, 0]} center>
          <div className="glass-effect rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium text-white whitespace-nowrap">
            <QrCode className="w-4 h-4" />
            Scanner le QR Code
          </div>
        </Html>
      )}

      {/* Point light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={hovered ? 2 : 1}
        color="#4A90E2"
        distance={2}
      />
    </group>
  );
};
