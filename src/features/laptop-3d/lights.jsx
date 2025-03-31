import { Environment, Lightformer } from "@react-three/drei";

export const Lights = () => {
	return (
		
		<group name="lights">
			<Environment resolution={256}>
				<group>
					<Lightformer
						form="rect"
						intensity={10}
						position={[-1, 0, -10]}
						scale={10}
						color={"#495057"}
					/>
					{/* <Lightformer
						form="rect"
						intensity={10}
						position={[-40, 2, 1]}
						scale={10}
						rotation-y={Math.PI / 2}
					/> */}
					<Lightformer
						form="rect"
						intensity={7}
						position={[30, 8, 80]}
						scale={4}
						rotation-y={Math.PI / 2}
					/>
				</group>
			</Environment>
			<spotLight
				position={[-2, 10, 5]}
				angle={0.15}
				penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
				decay={0} // the amount the light dims as it moves away from the source
				intensity={Math.PI * 0.2} // the light intensity
				color={"#f8f9fa"}
			/>
			<spotLight
				position={[0, -25, 40]}
				angle={0.15}
				penumbra={1}
				decay={0}
				intensity={0.3}
				color={"#f8f9fa"}
			/>
			<spotLight
				position={[20, 15, 70]}
				angle={0.15}
				penumbra={1}
				decay={0.5}
				intensity={Math.PI * 1}
			/>
		</group>
	);
};