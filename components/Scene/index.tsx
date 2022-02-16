/* eslint-disable */
import {
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useGlobalState } from "../GlobalProvider";
import { TemplateModel, TemplateSnapshotModel } from "./models";
import "./style.scss";


export default function Scene(props: any) {
  const { editor, wrapClass }: any = props;
  const { characterName, modelNodes, scene, randomize }: any = useGlobalState();
  return (
    <div className={`scene-wrap ${wrapClass && wrapClass}`}>
      <Canvas id="scene">
        <color attach="background" args={["#aaaaaa"]} />
        <gridHelper
          args={[200, 100, "#cccccc", "#eeeeee"]}
          position={[0, 0, 0]}
        />
        <spotLight
          // ref={ref}
          intensity={1}
          position={[0, 3.5, 2]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <spotLight
          // ref={ref}
          intensity={0.2}
          position={[-5, 2.5, 4]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          // castShadow
        />
        <spotLight
          // ref={ref}
          intensity={0.2}
          position={[5, 2.5, 4]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          // castShadow
        />
        <spotLight
          // ref={ref}
          intensity={0.3}
          position={[0, -2, -8]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <OrbitControls
          minDistance={1}
          maxDistance={5}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
          enablePan={false}
          target={[0, 1, 0]}
        />
        <PerspectiveCamera>
          <TemplateModel nodes={modelNodes} scene={scene} />
        </PerspectiveCamera>
      </Canvas>
    </div>
  );
}

export function SnapshotScene(props: any) {
  const { editor, wrapClass }: any = props;
  const { characterName, modelNodes, scene, randomize }: any = useGlobalState();
  const ssScene = scene;
  return (
    <div className="snapshot-scene-wrap">
      <Canvas id="sscene">
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 50, -100]} intensity={6} />
        <pointLight position={[-50, 0, -50]} intensity={1} />
        <spotLight
          castShadow
          intensity={8}
          angle={Math.PI / 10}
          position={[10, 10, 10]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls
          minDistance={1}
          maxDistance={1}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
          enablePan={false}
          target={[0, 1.5, 0]}
        />
        <PerspectiveCamera>
          <TemplateSnapshotModel nodes={modelNodes} scene={ssScene} />
        </PerspectiveCamera>
      </Canvas>
    </div>
  );
}
