'use client'

import { motion } from 'motion/react'

export default function Page() {
	return (
		<>
			<title>Colorful Bg</title>
			<div className='relative h-screen w-screen bg-[hsl(330,100%,98%)] blur-[50px]'>
				<motion.div className='absolute left-[20px] top-[5vw] h-[40vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(215,100%,92%)] opacity-80'></motion.div>
				<div className='absolute left-[100vw] top-0 h-[50vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(330,100%,96%)] opacity-60'></div>
				<div className='absolute left-0 top-[100vh] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(330,100%,96%)] opacity-60'></div>
				<div className='absolute left-[100vw] top-[100vh] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(215,100%,95%)] opacity-70'></div>
				<div className='absolute left-[50vw] top-[60vh] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(215,100%,95%)] opacity-70'></div>
				<div className='absolute left-[60vw] top-[30vh] h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(330,100%,95%)] opacity-70'></div>
			</div>
		</>
	)
}
