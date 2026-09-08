"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const C = {
  wall: "#F3EBE3",
  floor: "#E8DFD4",
  chair: "#E5D5C5",
  wood: "#8B6914",
  woodLight: "#C4A574",
  plant: "#1E4638",
  pot: "#D4C4B0",
  sky: "#B8D4E8",
  hill: "#4A6B52",
  hillFar: "#6B8F71",
  water: "#7BA3B8",
  sun: "#F5D78E",
  cream: "#F7EAE3",
};

function Room() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 0.6, -1.4]}>
        <planeGeometry args={[6, 3.2]} />
        <meshStandardMaterial color={C.wall} />
      </mesh>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.0, 0.2]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color={C.floor} />
      </mesh>
    </group>
  );
}

/** Organic window cutout + painted landscape beyond */
function LandscapeWindow() {
  const sunRef = useRef(null);

  useFrame(({ clock }) => {
    if (!sunRef.current) return;
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 0.6) * 0.04;
    sunRef.current.scale.set(s, s, s);
  });

  // Irregular blob shape via scaled spheres as a soft mask frame
  return (
    <group position={[-0.15, 0.55, -1.35]}>
      {/* Landscape backdrop */}
      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[0.95, 48]} />
        <meshBasicMaterial color={C.sky} />
      </mesh>
      {/* Far hills */}
      <mesh position={[-0.35, -0.25, -0.04]} scale={[0.7, 0.35, 1]}>
        <sphereGeometry args={[0.7, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial color={C.hillFar} />
      </mesh>
      <mesh position={[0.4, -0.3, -0.03]} scale={[0.65, 0.3, 1]}>
        <sphereGeometry args={[0.7, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial color={C.hill} />
      </mesh>
      {/* Water */}
      <mesh position={[0.1, -0.45, -0.02]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.4, 0.35]} />
        <meshBasicMaterial color={C.water} transparent opacity={0.85} />
      </mesh>
      {/* Sun */}
      <mesh ref={sunRef} position={[0.15, 0.35, -0.01]}>
        <circleGeometry args={[0.18, 32]} />
        <meshBasicMaterial color={C.sun} />
      </mesh>
      {/* Soft organic frame (lighter wall rings) */}
      <mesh position={[0, 0, 0.02]} scale={[1.08, 1.18, 1]}>
        <ringGeometry args={[0.88, 1.05, 48]} />
        <meshStandardMaterial color={C.wall} />
      </mesh>
      <mesh position={[0.05, -0.05, 0.025]} scale={[1.02, 1.12, 1]} rotation={[0, 0, 0.15]}>
        <ringGeometry args={[0.9, 1.02, 48]} />
        <meshStandardMaterial color="#EDE4DA" />
      </mesh>
    </group>
  );
}

function Armchair() {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -0.25 + Math.sin(clock.getElapsedTime() * 0.35) * 0.02;
  });

  return (
    <group ref={ref} position={[-0.15, -0.55, 0.35]} rotation={[0, -0.25, 0]}>
      {/* Seat cushion */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.85, 0.28, 0.75]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      {/* Rounded seat top */}
      <mesh position={[0, 0.18, 0.05]} scale={[1, 0.45, 0.9]} castShadow>
        <sphereGeometry args={[0.42, 24, 16]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      {/* Back cushion */}
      <mesh position={[0, 0.45, -0.28]} castShadow>
        <boxGeometry args={[0.8, 0.75, 0.22]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.55, -0.22]} scale={[1, 0.7, 0.45]}>
        <sphereGeometry args={[0.4, 24, 16]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.42, 0.22, 0.05]} rotation={[0, 0, 0.1]}>
        <capsuleGeometry args={[0.1, 0.35, 6, 12]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      <mesh position={[0.42, 0.22, 0.05]} rotation={[0, 0, -0.1]}>
        <capsuleGeometry args={[0.1, 0.35, 6, 12]} />
        <meshStandardMaterial color={C.chair} roughness={0.85} />
      </mesh>
      {/* Legs */}
      {[
        [-0.32, -0.28, 0.28],
        [0.32, -0.28, 0.28],
        [-0.32, -0.28, -0.28],
        [0.32, -0.28, -0.28],
      ].map((p, i) => (
        <mesh key={i} position={p}>
          <cylinderGeometry args={[0.035, 0.04, 0.35, 10]} />
          <meshStandardMaterial color={C.wood} />
        </mesh>
      ))}
    </group>
  );
}

function Rug() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.1, -0.98, 0.4]}>
      <circleGeometry args={[0.95, 48]} />
      <meshStandardMaterial color="#DDD0C0" roughness={1} />
    </mesh>
  );
}

function SideTable() {
  return (
    <group position={[0.95, -0.85, 0.55]}>
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.04, 24]} />
        <meshStandardMaterial color={C.woodLight} roughness={0.6} />
      </mesh>
      {[0, 2.1, 4.2].map((a, i) => (
        <mesh
          key={i}
          position={[Math.sin(a) * 0.12, 0.05, Math.cos(a) * 0.12]}
          rotation={[0.15, a, 0]}
        >
          <cylinderGeometry args={[0.02, 0.025, 0.45, 8]} />
          <meshStandardMaterial color={C.wood} />
        </mesh>
      ))}
      {/* Cup + saucer */}
      <mesh position={[0.05, 0.33, 0.05]}>
        <cylinderGeometry args={[0.1, 0.1, 0.015, 20]} />
        <meshStandardMaterial color="#F7F3EE" />
      </mesh>
      <mesh position={[0.05, 0.4, 0.05]}>
        <cylinderGeometry args={[0.055, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#F7F3EE" />
      </mesh>
    </group>
  );
}

function Plant() {
  const leafRef = useRef(null);
  useFrame(({ clock }) => {
    if (!leafRef.current) return;
    leafRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.7) * 0.04;
  });

  return (
    <group position={[1.35, -0.55, -0.2]}>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.14, 0.12, 0.35, 16]} />
        <meshStandardMaterial color={C.pot} />
      </mesh>
      <group ref={leafRef} position={[0, 0, 0]}>
        {[0, 0.8, 1.6, 2.4, 3.2].map((a, i) => (
          <mesh
            key={i}
            position={[Math.sin(a) * 0.08, 0.25 + i * 0.12, Math.cos(a) * 0.08]}
            rotation={[0.4, a, 0.2]}
          >
            <sphereGeometry args={[0.18 - i * 0.015, 12, 12]} />
            <meshStandardMaterial color={i % 2 ? C.plant : "#2F5A45"} />
          </mesh>
        ))}
        <mesh position={[0, 0.85, 0]}>
          <sphereGeometry args={[0.22, 14, 14]} />
          <meshStandardMaterial color={C.plant} />
        </mesh>
      </group>
    </group>
  );
}

function SoftLightPulse() {
  const lightRef = useRef(null);
  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    lightRef.current.intensity = 0.55 + Math.sin(clock.getElapsedTime() * 0.8) * 0.08;
  });
  return (
    <pointLight
      ref={lightRef}
      position={[-0.15, 0.7, -0.8]}
      intensity={0.55}
      color="#FFF2D8"
      distance={5}
    />
  );
}

function CameraDrift() {
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    camera.position.x = 0.35 + Math.sin(t * 0.25) * 0.08;
    camera.position.y = 0.15 + Math.sin(t * 0.2) * 0.03;
    camera.lookAt(-0.05, 0.05, 0);
  });
  return null;
}

export default function HeroCanvas() {
  const cameraPos = useMemo(() => [0.4, 0.2, 2.8], []);

  return (
    <Canvas
      camera={{ position: cameraPos, fov: 38 }}
      className="h-full w-full"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.75} color="#FFF8F0" />
      <directionalLight position={[2, 3, 2]} intensity={0.65} color="#FFE8D0" castShadow />
      <SoftLightPulse />
      <Room />
      <LandscapeWindow />
      <Rug />
      <Armchair />
      <SideTable />
      <Plant />
      <CameraDrift />
    </Canvas>
  );
}
