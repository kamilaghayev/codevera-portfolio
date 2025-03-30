'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { degreesToRadians } from '@/shared/utils';
import { MacBook } from './MacBook';
const TextOnScreen = () => {
	return (
		<mesh>
			<planeGeometry args={[1.5, 1]} />
			<meshBasicMaterial color="white">
				<h1 style={{ fontSize: "40px", color: "black" }}>Salam</h1>
			</meshBasicMaterial>
		</mesh>
	);
};

export const Laptop3d = () => {
	return (
		<Canvas camera={{ position: [120, 0, 1], fov:  75 }}>
			<OrbitControls />
			<gridHelper args={[20, 20, 20]} />
			<axesHelper args={[60]} />
			<MacBook ><TextOnScreen/></MacBook>
			<ambientLight intensity={0.1} />
		</Canvas>
	)
}