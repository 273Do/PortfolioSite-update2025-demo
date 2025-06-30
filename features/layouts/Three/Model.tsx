"use client";
import { Edges, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Depth,
  Displace,
  Fresnel,
  Gradient,
  LayerMaterial,
  Noise,
  Normal,
} from "lamina";
import { useRef } from "react";
import * as THREE from "three";
import { MeshStandardNodeMaterial } from "three/webgpu";

export const Model = () => {
  const { nodes } = useGLTF("./model/logo.glb");

  const { camera, mouse } = useThree(); // ビューポートの幅を取得
  const gradient = 0.5; // グラデーションの強さを調整する値
  const ref = useRef<THREE.Mesh>(null!);
  const gradient_ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    const targetX = -mouse.x * 1;
    const targetY = -mouse.y * 1;
    // 緩やかに追従させる
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 0.8);
    const cos = Math.cos(state.clock.elapsedTime / 0.8);

    const layers = (gradient_ref.current as any).layers as any[];
    if (layers && layers.length >= 4) {
      layers[0].origin.set(cos / 2, 2, 2);
      layers[1].origin.set(cos, sin, cos);
      layers[2].origin.set(sin, cos, sin);
      layers[3].origin.set(cos, sin, cos);
    }
  });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        scale={20}
        geometry={(nodes.mesh as THREE.Mesh).geometry}
        rotation={[2, 0.3, 0.25]}
        position={[-1.5, -1.2, 0]}
        ref={ref}
      >
        {/* <MeshTransmissionMaterial
          roughness={0.25}
          backside
          backsideThickness={1}
          thickness={0.1}
          distortion={0.5}
          temporalDistortion={0.03}
          resolution={1024}
        /> */}
        <Edges linewidth={1} scale={1} threshold={10} color="white" />

        {/* <meshStandardMaterial wireframe /> */}

        <LayerMaterial ref={gradient_ref} toneMapped={false}>
          <Depth
            colorA="#ff0080"
            colorB="black"
            alpha={1}
            mode="normal"
            near={0.3 * gradient}
            far={1}
            origin={[1, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#ffaa20"
            alpha={0.7}
            mode="add"
            near={3 * gradient}
            far={5}
            origin={[2, -2, 0.5]}
          />
          <Depth
            colorA="green"
            colorB="#f7b955"
            alpha={0.4}
            mode="multiply"
            near={4 * gradient}
            far={3}
            origin={[0, -2, 0]}
          />
          <Depth
            colorA="white"
            colorB="red"
            alpha={0.3}
            mode="overlay"
            near={1.5 * gradient}
            far={1.5}
            origin={[1.5, -1.5, 0.5]}
          />
          <Fresnel
            mode="add"
            color="white"
            intensity={0.1}
            power={10}
            bias={0.01}
          />
          <Noise
            scale={1}
            opacity={0.15}
            speed={0.5}
            mode="overlay"
            type="curl"
          />
        </LayerMaterial>
      </mesh>
    </>
  );
};
