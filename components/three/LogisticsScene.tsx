"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Truck() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.x = Math.sin(clock.elapsedTime * 0.35) * 0.8;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={group} position={[-0.4, -0.55, 0.6]}>
      <mesh castShadow position={[0, 0.28, 0]}>
        <boxGeometry args={[2.4, 0.85, 1.05]} />
        <meshStandardMaterial
          color="#E7DECD"
          metalness={0.2}
          roughness={0.45}
        />
      </mesh>
      <mesh castShadow position={[1.05, 0.18, 0]}>
        <boxGeometry args={[0.75, 0.65, 1]} />
        <meshStandardMaterial
          color="#3A5135"
          metalness={0.25}
          roughness={0.36}
        />
      </mesh>
      {[
        [-0.75, -0.26, -0.48],
        [-0.75, -0.26, 0.48],
        [0.92, -0.26, -0.48],
        [0.92, -0.26, 0.48],
      ].map((p, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, 0]}
          position={p as [number, number, number]}
        >
          <cylinderGeometry args={[0.22, 0.22, 0.16, 24]} />
          <meshStandardMaterial color="#111722" />
        </mesh>
      ))}
    </group>
  );
}

function Warehouse() {
  return (
    <group position={[-3.4, -0.45, -2.8]}>
      <mesh castShadow position={[0, 0.7, 0]}>
        <boxGeometry args={[2.8, 1.4, 2.2]} />
        <meshStandardMaterial color="#18253c" roughness={0.72} />
      </mesh>
      <mesh castShadow position={[0, 1.62, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2.12, 2.12, 2.2]} />
        <meshStandardMaterial color="#24344c" roughness={0.72} />
      </mesh>
      {[
        [-0.75, 0.35, 1.12],
        [0, 0.35, 1.12],
        [0.75, 0.35, 1.12],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <boxGeometry args={[0.52, 0.7, 0.05]} />
          <meshStandardMaterial
            color="#E7DECD"
            emissive="#E7DECD"
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function City() {
  const blocks = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        x: (i % 6) * 1.15 - 2.8,
        z: Math.floor(i / 6) * 1.1 - 1.8,
        h: 0.5 + ((i * 17) % 10) / 8,
      })),
    [],
  );
  return (
    <group position={[3.1, -0.55, -2.6]}>
      {blocks.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]} castShadow>
          <boxGeometry args={[0.72, b.h, 0.72]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#2e4937" : "#16263a"}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function Packages() {
  return (
    <group>
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.07}
          rotationIntensity={0.5}
          floatIntensity={0.8}
        >
          <mesh
            position={[
              -3 + i * 0.9,
              1.2 + (i % 3) * 0.55,
              -1.2 + (i % 2) * 1.9,
            ]}
            castShadow
          >
            <boxGeometry args={[0.28, 0.28, 0.28]} />
            <meshStandardMaterial
              color={i % 2 ? "#E7DECD" : "#9e8a77"}
              roughness={0.55}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Route() {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-4.8, -0.52, -0.2),
        new THREE.Vector3(-2.8, -0.48, 1.4),
        new THREE.Vector3(-0.6, -0.45, 0.4),
        new THREE.Vector3(1.8, -0.42, 1.4),
        new THREE.Vector3(4.9, -0.4, 0.2),
      ]),
    [],
  );
  const points = useMemo(() => curve.getPoints(80), [curve]);
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  );
  return (
    <threeLine geometry={geometry}>
      <lineBasicMaterial color="#E7DECD" transparent opacity={0.7} />
    </threeLine>
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    camera.position.x = Math.sin(clock.elapsedTime * 0.1) * 0.8;
    camera.position.y = 4.3 + Math.sin(clock.elapsedTime * 0.14) * 0.24;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0B1726"]} />
      <fog attach="fog" args={["#0B1726", 8, 19]} />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 8, 3]}
        intensity={2.2}
        color="#E7DECD"
        castShadow
      />
      <pointLight position={[-4, 3, -1]} intensity={6} color="#3A5135" />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.62, 0]}
        receiveShadow
      >
        <planeGeometry args={[22, 18]} />
        <meshStandardMaterial color="#0f1c2f" roughness={0.92} />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.59, 0.6]}
        receiveShadow
      >
        <planeGeometry args={[14, 2.8]} />
        <meshStandardMaterial color="#171c24" roughness={0.96} />
      </mesh>
      <Warehouse />
      <City />
      <Truck />
      <Packages />
      <Route />
      <CameraRig />
    </>
  );
}

export default function LogisticsScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 4.3, 8.7], fov: 42 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  );
}
