import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { degToRad } from 'three/src/math/MathUtils'
export const MacBook = (props) =>  {
	const group = useRef();
	const notebookHead = useRef()
	// Load model
	const { nodes, materials } = useGLTF('/mac-book.glb');

	// Make it float
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
		group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
		group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
	});

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (notebookHead.current.rotation.x >= -0.425) {
			notebookHead.current.rotation.x -= 0.01;
		}

		
	})
	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation-x={1.25} position={[0, -0.04, 0.41]} ref={notebookHead}>
				<group position={[0, 2.96, -0.13]} rotation={[degToRad(90), 0, 0]}>
					<mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
					<mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
					<mesh geometry={nodes['Cube008_2'].geometry}>

						{/* Drei's HTML component can "hide behind" canvas geometry */}
						<Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
							<div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
								<h1>Salam sdfghjfdsfgh</h1>
							</div>
						</Html>
					</mesh>
				</group>
			</group>
			<mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
			<group position={[0, -0.1, 3.39]}>
				<mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
				<mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
			</group>
			<mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
		</group>
	)
}