"use client";
import {
  // AsciiRenderer,
  Environment,
  Lightformer,
  // OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

const MainCanvas = ({ className }: { className?: string }) => {
  return (
    <div className={`z-50 h-screen w-screen ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <Model />
        <Environment preset="night">
          <Lightformer
            intensity={5}
            position={[1, 6, 3.6]}
            scale={[10, 50, 1]}
            rotation={[Math.PI / 2, 0, 0]}
            // scale={[10, 10, 0]}
            onUpdate={(self: {
              lookAt: (arg0: number, arg1: number, arg2: number) => void;
            }) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        {/* <AsciiRenderer
          invert={false}
          resolution={0.1}
          fgColor="white"
          bgColor="transparent"
        /> */}
        {/* <OrbitControls /> */}
        {/* <EffectComposer></EffectComposer> */}
      </Canvas>
    </div>
  );
};

export default MainCanvas;
