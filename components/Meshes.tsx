/*
 * 코인 예제
 */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Meshes() {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01)); // #2
	return (
		<mesh ref={mesh} scale={0.9}>
			<cylinderBufferGeometry args={[1, 1, 0.3, 50]} /> // #1
			<meshLambertMaterial attach="material" color="#ff9800" />
		</mesh>
	);
}

export default Meshes;
