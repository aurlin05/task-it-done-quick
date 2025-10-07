import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

interface ArtifactDisplayProps {
  position: [number, number, number];
  type: "mask" | "sculpture" | "textile";
  color: string;
}

export const ArtifactDisplay = ({ position, type, color }: ArtifactDisplayProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case "mask":
        return <boxGeometry args={[0.8, 1.2, 0.2]} />;
      case "sculpture":
        return <cylinderGeometry args={[0.3, 0.4, 1.5, 8]} />;
      case "textile":
        return <planeGeometry args={[1, 1.2]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Pedestal */}
        <mesh position={[0, -0.5, 0]} castShadow>
          <cylinderGeometry args={[0.4, 0.5, 1, 8]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Artifact */}
        <mesh
          ref={meshRef}
          position={[0, 0.3, 0]}
          castShadow
          onClick={() => setClicked(!clicked)}
          onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "default";
          }}
          scale={hovered ? 1.1 : 1}
        >
          {getGeometry()}
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.4}
            emissive={hovered ? color : "#000000"}
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>

        {/* Info Label */}
        {clicked && (
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.15}
            color="#D4AF37"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
          >
            {type === "mask" && "Masque cérémoniel du Royaume Kongo"}
            {type === "sculpture" && "Sculpture Nok - 500 av. J.-C."}
            {type === "textile" && "Kente royal ashanti"}
          </Text>
        )}

        {/* Spotlight */}
        <spotLight
          position={[0, 3, 1]}
          angle={0.3}
          penumbra={1}
          intensity={hovered ? 2 : 1}
          color="#D4AF37"
          target={meshRef.current || undefined}
        />
      </group>
    </Float>
  );
};
