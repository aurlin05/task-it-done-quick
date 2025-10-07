import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface MuseumModelProps {
  onLoad?: () => void;
}

export const MuseumModel = ({ onLoad }: MuseumModelProps) => {
  const { scene } = useGLTF("/models/mcn_museum.glb");

  useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  useEffect(() => {
    // Enable shadows for all meshes in the model
    scene.traverse((child) => {
      if ((child as any).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
};

// Preload the model
useGLTF.preload("/models/mcn_museum.glb");
