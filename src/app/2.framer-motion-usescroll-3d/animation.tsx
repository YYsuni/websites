'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { mix, useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { degreesToRadians } from 'popmotion'
import { useLayoutEffect } from 'react'
import { Vector3 } from 'three'

export default function Animation() {
	return (
		<div style={{ backgroundColor: 'rgb(173, 180, 133)', height: '500vh' }}>
			<main className='fixed inset-0 flex items-center justify-center'>
				<Canvas gl={{ antialias: false }} style={{ imageRendering: 'pixelated' }}>
					<Scene />
				</Canvas>
			</main>
		</div>
	)
}

function Scene() {
	const gl = useThree(state => state.gl)
	const { scrollYProgress } = useScroll()
	const cameraPosPhi = useTransform(scrollYProgress, [0, 1], [0, 0.6 * Math.PI])
	const cameraDistance = useTransform(scrollYProgress, [0, 1], [9, 3])

	useFrame(({ camera }) => {
		camera.position.setFromSphericalCoords(cameraDistance.get(), cameraPosPhi.get(), 0)
		camera.updateProjectionMatrix()

		camera.lookAt(0, 0, 0)
	})

	useLayoutEffect(() => gl.setPixelRatio(0.2))

	return (
		<motion.group
			initial={{ rotateY: 0 }}
			animate={{ rotateY: 2 * Math.PI }}
			transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
			<Icosahedron />
			<Stars />
		</motion.group>
	)
}

function Icosahedron() {
	return (
		<mesh>
			<icosahedronGeometry args={[0.8, 0]} />
			<meshBasicMaterial wireframe color='#222' wireframeLinewidth={10} />
		</mesh>
	)
}

function Star() {
	return (
		<mesh
			position={new Vector3().setFromSphericalCoords(
				Math.random() + 2,
				degreesToRadians(mix(80, 100, Math.random())),
				Math.random() * degreesToRadians(360)
			)}>
			<octahedronGeometry args={[0.05, 0]} />
			<meshBasicMaterial wireframe color='#222' />
		</mesh>
	)
}

function Stars() {
	return (
		<>
			{new Array(80).fill(0).map((_, index) => (
				<Star key={index} />
			))}
		</>
	)
}
