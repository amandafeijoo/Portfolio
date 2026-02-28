import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import FibonacciPoster from "./FibonacciPoster"; 


export default function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;

  const scale = useMemo(() => {
    if (isMobile) return 0.40; 
    return 0.85; 
  }, [isMobile]);

  const positionY = useMemo(() => {
    if (isMobile) return 0.8;
    return -0.6;
  }, [isMobile]);

  return (
    <group scale={scale} position={[0, positionY, 0]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 6]} intensity={0.8} />
      <directionalLight position={[-4, -3, 2]} intensity={0.4} />
      <FibonacciPoster theme="light" />
    </group>
  );
}
