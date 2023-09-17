'use client'

import { PointMaterial, Points, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useState } from 'react'
import { random } from 'maath'

export default function Main() {
	const [sphere] = useState(random.inSphere(new Float32Array(1500), { radius: 8 }) as Float32Array)

	return (
		<main className='h-screen ' style={{ backgroundColor: '#12071f' }}>
			<Canvas>
				<motion.group
					animate={{ rotateY: -2 * Math.PI, rotateX: -2 * Math.PI }}
					transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}>
					<Points positions={sphere} frustumCulled={false}>
						<PointMaterial transparent size={0.04} color='#ffa0e0' depthWrite={false} />
					</Points>
				</motion.group>
			</Canvas>

			<div className='fixed inset-0 flex items-center justify-center'>
				<h1
					className='bg-gradient-to-r from-red-300 to-violet-500 bg-clip-text font-bold text-transparent'
					style={{ fontSize: 80 }}>
					Hi, Suni Space!
				</h1>
			</div>
		</main>
	)
}
