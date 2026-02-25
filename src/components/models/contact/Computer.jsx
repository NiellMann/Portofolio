import { useGLTF } from "@react-three/drei";

const BASE = "/Portofolio";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    `${BASE}/models/computer-optimized-transformed.glb`
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${BASE}/models/computer-optimized-transformed.glb`);

export default Computer;
