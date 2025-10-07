import * as THREE from "three";

interface MuseumRoomProps {
  roomIndex: number;
}

export const MuseumRoom = ({ roomIndex }: MuseumRoomProps) => {
  const wallColors = ["#3D2817", "#2C1810", "#4A3728"];
  const wallColor = wallColors[roomIndex] || wallColors[0];

  return (
    <group>
      {/* Back Wall */}
      <mesh position={[0, 2, -5]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Decorative Pillars */}
      <mesh position={[-3, 2, -4]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 4, 8]} />
        <meshStandardMaterial color="#8B6914" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[3, 2, -4]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 4, 8]} />
        <meshStandardMaterial color="#8B6914" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Decorative Wall Patterns */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[-4.8, 2 + i * 0.3, -3 + i * 0.5]}>
          <boxGeometry args={[0.05, 0.2, 0.2]} />
          <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
};
