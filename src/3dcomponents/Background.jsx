import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Background(props) {
  const meshCount = 100;
  const meshes = useRef();

  useEffect(() => {
    for (let i = 0; i < meshCount; i++) {
      const euler = new THREE.Euler(
        Math.random(),
        Math.random(),
        Math.random()
      );
      const quaternionRot = new THREE.Quaternion().setFromEuler(euler);
      const matrix = new THREE.Matrix4();
      matrix.compose(
        new THREE.Vector3(Math.random() * 160 - 80, Math.random() * 8, -10),
        quaternionRot,
        new THREE.Vector3(1, 1, 1)
      );
      meshes.current.setMatrixAt(i, matrix);
    }
  });

  return (
    <instancedMesh ref={meshes} args={[null, null, meshCount]}>
      <torusGeometry />
      <meshStandardMaterial color="#34294a" />
    </instancedMesh>
  );
}

export default Background;
