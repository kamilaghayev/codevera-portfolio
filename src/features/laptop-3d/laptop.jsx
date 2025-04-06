'use client'
import { Suspense } from 'react'
import { createPortal } from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { MacBook3d } from './MacBook'
import Spinner from '@/components/loader/spinner'
import { getLaptop } from '@/app/(initialize)/laptop-initialize'

export default function Laptop() {

	return createPortal(
		<div className='absolute max-w-screen max-h-screen top-0 md:top-16 right-0 md:right-[-100px] lg:right-[-150px] xl:right-[-120px] overflow-hidden flex items-center justify-center md:block pointer-events-none'>
			<div className='w-[800px] h-[400px] md:w-[1300px] md:h-[650px] mt-[180px] md:mt-4 overflow-hidden'>
				<Suspense fallback={(
					<div className='w-full flex items-center justify-center text-primary-500 min-h-96 h-full'>
						<Spinner/>
					</div>
				)}>
					<Canvas camera={{ position: [-5, 0, -19], fov: 55 }}>
						<pointLight position={[10, 10, 10]} intensity={1.2} />
						<group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
							<MacBook3d />
						</group>
						<Environment preset="city" />
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
				</Suspense>
			</div>
		</div>,
		getLaptop()
	);
}
