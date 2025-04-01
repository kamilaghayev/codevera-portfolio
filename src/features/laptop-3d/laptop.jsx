'use client'
import { Suspense } from 'react'
import { createPortal } from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { MacBook3d } from './MacBook'


export default function Laptop() {

	return createPortal(
		<div className='absolute max-w-screen max-h-screen top-0 md:top-16 right-0 md:right-[-100px] lg:right-[-150px] xl:right-0 overflow-hidden flex items-center justify-center md:block pointer-events-none'>
			<div className='w-[800px] h-[400px] md:w-[1000px] md:h-[500px] mt-[260px] md:mt-4 overflow-hidden'>
				<Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
					<pointLight position={[10, 10, 10]} intensity={1.2} />
					<Suspense fallback={null}>
						<group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
							<MacBook3d />
						</group>
						<Environment preset="city" />
					</Suspense>
					<ContactShadows position={[0, -2.6, 0]} scale={18} blur={4} far={4.5} />
					<OrbitControls
						enablePan={true}
						enableZoom={false}
						minPolarAngle={Math.PI / 2.6}
						maxPolarAngle={Math.PI / 2.1}
						target={[0, 0, 0]}
						keyPanSpeed={0.01}
						enableDamping={true}
						dampingFactor={0.07}
					/>
				</Canvas>
			</div>
		</div>,
		document.body
	);
}
