'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MacBook } from './MacBook';
import { Vector3 } from 'three';
const TextOnScreen = () => {
	return (
		<h1 style={{ fontSize: "40px", color: "black" }}>Salam</h1>
	);
};

export const Laptop3d = () => {
	return (
		<Canvas>
			<OrbitControls enableDamping={true} minDistance={9} maxDistance={15} target={[0, 1,0]}/>
			<gridHelper args={[20, 20, 20]} />
			<axesHelper args={[60]} />
			<MacBook ><TextOnScreen/></MacBook>

			<ambientLight intensity={0.1} />

			<PerspectiveCamera makeDefault position={[4, 5, 10]} fov={75}/>
		</Canvas>
	)
}