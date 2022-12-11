import { useGLTF, useKeyboardControls, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import * as THREE from "three";

function Driver(props) {
  const logo = useGLTF("./models/logo.gltf");
  console.log(logo);

  const sphereRef = useRef();
  const sphereMeshRef = useRef();

  const [susbscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    susbscribeKeys(
      () => {},
      () => {}
    );
  }, []);

  useFrame((state, delta) => {
    const { leftward, rightward } = getKeys();
    const impulseStrength = 30 * delta;

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    // Controls

    if (leftward) {
      console.log("left?");
      impulse.x -= impulseStrength;
      torque.y -= impulseStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
      torque.y -= impulseStrength;
    }

    sphereRef.current.applyImpulse(impulse);
    sphereRef.current.applyTorqueImpulse(torque);

    // Camera
    const spherePosition = sphereRef.current.translation();
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(spherePosition);
    cameraPosition.z += 20;
    cameraPosition.y += 2;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(spherePosition);
    cameraTarget.y += 0.25;

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(cameraPosition);
  });

  return (
    <Float>
      <RigidBody
        ref={sphereRef}
        colliders="ball"
        position={[-8, 3, 0]}
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <CuboidCollider args={[40, 1, 1]} />
      </RigidBody>
    </Float>
  );
  return null;
}

export default Driver;
