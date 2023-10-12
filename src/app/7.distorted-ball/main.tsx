'use client'

import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { geometry } from 'maath'
import { degreesToRadians } from 'popmotion'
import { useLayoutEffect, useRef } from 'react'
import { PlaneGeometry } from 'three'

export default function Main() {
	return (
		<main className='h-screen'>
			<Canvas camera={{ position: [7.3589, 4.9583, 6.9528], zoom: 1 }}>
				<ambientLight intensity={1} />
				<OrbitControls />
				<GizmoHelper alignment='bottom-right' margin={[80, 80]}>
					<GizmoViewport />
				</GizmoHelper>

				<pointLight position={[4.07, 5.9, -1]} intensity={50} />
				<Sence />
			</Canvas>
		</main>
	)
}

function Sence() {
	const planeGeom = useRef<PlaneGeometry>(null)

	useFrame((state, delta) => {
		if (planeGeom.current) {
			const size = planeGeom.current.attributes.position.count

			for (let i = 0; i < size; i++) {
				const x = planeGeom.current.attributes.position.getX(i)
				const xsin = Math.sin(4 * x + Date.now() / 200) / 4
				planeGeom.current!.attributes.position.setZ(i, xsin)
			}
			planeGeom.current.computeVertexNormals()
			planeGeom.current.attributes.position.needsUpdate = true
		}
	})

	return (
		<>
			<mesh rotation={[degreesToRadians(-90), 0, 0]}>
				<planeGeometry args={[6, 4, 100, 10]} ref={planeGeom} />
				<meshPhongMaterial color='yellow' />
			</mesh>
		</>
	)
}
