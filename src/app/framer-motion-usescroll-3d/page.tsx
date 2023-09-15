'use client'

import './page.css'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { useLayoutEffect } from 'react'
import THREE, { Group, Vector3 } from 'three'

export default function Page() {
	return (
		<main className='fixed inset-0 flex items-center justify-center'>
			<Canvas gl={{ antialias: false }}>
				<Scene />
			</Canvas>
		</main>
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
				(0.5 + (Math.random() - 0.5) * 0.1) * Math.PI,
				Math.random() * 2 * Math.PI
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
