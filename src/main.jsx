import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full h-screen overflow-hidden">
      <KeyboardControls
        map={[
          {
            name: "leftward",
            keys: ["ArrowLeft", "KeyA"],
          },
          {
            name: "rightward",
            keys: ["ArrowRight", "KeyD"],
          },
          {
            name: "jump",
            keys: ["Space"],
          },
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 2, 20],
            rotation: [-0.03, 0, 0],
          }}
        >
          <color args={["#b7a9c7"]} attach="background" />
          <App />
        </Canvas>
      </KeyboardControls>
    </div>
  </StrictMode>
);
