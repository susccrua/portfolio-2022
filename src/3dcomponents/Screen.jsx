import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

function Screen(props) {
  const { position, rotation, scale, isIframe, url } = props;
  const screen = useGLTF("./models/screen/scene.gltf");

  useFrame((state, delta) => {});

  useEffect(() => {}, []);

  return (
    <group position={position} scale={scale}>
      <primitive object={screen.scene} scale={[0.3, 0.3, 0.5]} />
      <Html transform position={[0, 0.45, -0.1]}>
        <div className="bg-white h-[22px] rounded-[1px] gap-[1px] flex p-[2px] items-center justify-center">
          <div className="bg-slate-300 text-[3px] w-[20px] rounded-[1px] p-[1px] hover:bg-slate-200 text-center">
            <a>Schedule a meeting</a>
          </div>
          <div className="bg-slate-300 text-[3px] w-[20px] rounded-[1px] p-[1px] hover:bg-slate-200 items-center justify-center text-center">
            <a>Meeting room</a>
          </div>
        </div>
      </Html>
    </group>
  );
}

export default Screen;
