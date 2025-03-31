import { Html, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import { Lights } from './lights';

export const MacBook = () => {
	const { scene, nodes } = useGLTF("/macBook/scene.gltf");
	const laptopRef = useRef();
	const ecranRef= useRef();
	
	
	
	return (
		<group position={[0, 0, 0]} scale={[20, 20, 20]} rotation={[0, degToRad(90), 0]} ref={laptopRef}>
			{/* body */}
			<primitive object={nodes.MacBook_Body_2}  position={[0, 0, 0]} />

			<primitive object={nodes.Ecran_6}  ref={ecranRef} position={[ 0.12, 0.01, 0]}/>

			<primitive object={nodes.Charniere_5} position={[0.12, 0.006, 0]}/>
			
			<ambientLight intensity={0.3}/>
			<Lights/>
		</group>
	);
};
