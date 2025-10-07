import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import * as THREE from "three";
import { Artwork } from "@/types/museum";

interface ArtworkFrameProps {
  artwork: Artwork;
  onClick?: (artwork: Artwork) => void;
}

export const ArtworkFrame = ({ artwork, onClick }: ArtworkFrameProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1);
    } else if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <group position={artwork.position} rotation={artwork.rotation}>
      {/* Frame */}
      <mesh
        ref={meshRef}
        onClick={() => onClick?.(artwork)}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        castShadow
      >
        <boxGeometry args={[1.2, 1.6, 0.1]} />
        <meshStandardMaterial
          color={hovered ? "#D4AF37" : "#8B6914"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#D4AF37" : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {/* Artwork placeholder (image would go here) */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1, 1.4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Spotlight on artwork */}
      <spotLight
        position={[0, 0, 1]}
        angle={0.4}
        penumbra={1}
        intensity={hovered ? 2 : 1}
        color="#D4AF37"
        distance={3}
      />

      {/* Label */}
      {hovered && (
        <Html position={[0, -1, 0.2]} center>
          <div className="glass-effect rounded-lg px-3 py-2 text-sm font-medium text-white whitespace-nowrap">
            {artwork.name.replace(/_/g, " ")}
          </div>
        </Html>
      )}
    </group>
  );
};
