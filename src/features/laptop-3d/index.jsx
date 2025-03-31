'use client'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MacBook } from './MacBook';
import { Vector3 } from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { Suspense } from 'react';
import { Spin } from 'antd';
const TextOnScreen = () => {
	return (
		<h1 style={{ fontSize: "40px", color: "black" }}>Salam</h1>
	);
};
const LoaderModel = () => {
	return (
		<Spin size="large" />
	)
}
export const Laptop3d = () => {
	return (
		<Canvas camera={{ position: [5, 12, 15], fov: 55 }}>
			<pointLight position={[10, 10, 10]} intensity={1.5} />
			{/* <axesHelper />
			<gridHelper/> */}
			<Suspense fallback={null}>
				<group rotation={[0, 0, 0]} position={[0, 1, 0]}>
					<MacBook />
				</group>
				<Environment preset="city" />
			</Suspense>
			<ContactShadows position={[0, -3, 0]} scale={20} blur={4} far={4.5} />
			<OrbitControls enablePan={false} enableZoom={true} minDistance={15} maxDistance={18} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
		</Canvas>
	)
}