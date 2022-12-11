import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody, Debug } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import { OrbitControls, Html, Float } from "@react-three/drei";

import Background from "./3dcomponents/Background";
import Project from "./3dcomponents/Project";
import Screen from "./3dcomponents/Screen";
import Mailbox from "./3dcomponents/Mailbox";
import Driver from "./3dcomponents/Driver";

export default function App() {
  const projectCount = 5;
  const projects = useRef();

  useEffect(() => {
    for (let i = 0; i < projectCount; i++) {
      const matrix = new THREE.Matrix4();
      matrix.compose(
        new THREE.Vector3(i * 3, 2, -3),
        new THREE.Quaternion(),
        new THREE.Vector3(0.2, 0.2, 0.2)
      );
      projects.current.setMatrixAt(i, matrix);
    }
  });

  return (
    <>
      <Perf />

      <OrbitControls />

      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} />

      <Physics>
        {/* <Debug /> */}
        <Driver />

        {/* <Screen position={[6, 3, -3]} scale={3} /> */}
        <Screen position={[12, 3, -3]} scale={3} isIframe={false} />

        <Background />
        <Mailbox position={[12, 0, 0]} />

        <instancedMesh ref={projects} args={[null, null, projectCount]}>
          <torusKnotGeometry />
          <meshStandardMaterial color="white" />
        </instancedMesh>
      </Physics>
    </>
  );
}
