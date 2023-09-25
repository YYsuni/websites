'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import src_gltf from './flowers.gltf'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls, PivotControls, TransformControls, useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { useLayoutEffect, useRef } from 'react'
import { HemisphereLightHelper, PointLightHelper, Vector3 } from 'three'
import { degreesToRadians } from 'popmotion'
import { motion } from 'framer-motion-3d'

export default function Main() {
	return (
		<main className='h-screen'>
			<Canvas camera={{ position: [0, 50, 100], near: 0.1, far: 1000, zoom: 50 }}>
				<ambientLight intensity={1} />
				<OrbitControls />

				<Sence />
			</Canvas>
		</main>
	)
}

function Sence() {
	const gltf = useLoader(GLTFLoader as any, src_gltf)

	const light = useRef<any>()
	useHelper(light, PointLightHelper, 0.5, 'green')

	// const config = useControls({
	// transmission: { value: 1, min: 0, max: 1 },
	// roughness: { value: 0, min: 0, max: 1, step: 0.01 },
	// thickness: { value: 0.4, min: 0, max: 10, step: 0.01 }
	// ior: { value: 1.3, min: 1, max: 5, step: 0.01 },
	// chromaticAberration: { value: 0.1, min: 0, max: 1 },
	// })

	return (
		<>
			<group position={[0, -1, 0]}>
				<pointLight intensity={10} position={[0, 4, 0]}></pointLight>
				<pointLight intensity={80} position={[0, 6, -6]}></pointLight>
				<pointLight intensity={30} position={[-3, 5, 3]}></pointLight>
				<pointLight intensity={30} position={[-4, 5, 2]}></pointLight>
				<pointLight intensity={30} position={[4, 5, 2]}></pointLight>

				<group rotation={[0, degreesToRadians(-40), 0]}>
					<mesh geometry={gltf.nodes.floor.geometry}>
						<meshLambertMaterial color='#2E6391' />
					</mesh>
					<mesh geometry={gltf.nodes.flower.geometry}>
						<meshStandardMaterial color='#A07BFF' roughness={0.8} />
					</mesh>
					<mesh geometry={gltf.nodes.plane.geometry}>
						<meshStandardMaterial color='#98BB39' roughness={0.8} />
					</mesh>

					<mesh geometry={gltf.nodes.vase.geometry}>
						<meshPhysicalMaterial color='#E79450' clearcoat={0.8} />
					</mesh>
					<mesh geometry={gltf.nodes.vase2.geometry}>
						<meshPhysicalMaterial color='#4A3584' clearcoat={0.8} />
					</mesh>
				</group>
			</group>
		</>
	)
}
