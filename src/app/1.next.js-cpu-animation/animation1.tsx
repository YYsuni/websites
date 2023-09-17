'use client'

import { motion } from 'framer-motion'

export default function Animation1() {
	return (
		<svg
			className='rounded-lg border border-dashed bg-white'
			viewBox='0 0 400 200'
			xmlns='http://www.w3.org/2000/svg'
			width={400}
			height={200}>
			<path d='M0 50, L400 50' stroke='#000' strokeOpacity='0.1' strokeWidth='2' />
			<path d='M0 100, L400 100' stroke='url(#blue-pulse-1)' strokeWidth='2' />
			<path d='M0 150, L200 150, L200 180, L400 180' stroke='url(#blue-pulse-2)' strokeWidth='2' fill='none' />

			<defs>
				<motion.linearGradient
					gradientUnits='userSpaceOnUse'
					id='blue-pulse-1'
					initial={{ x1: -100, x2: 0 }}
					animate={{ x1: 400, x2: 500 }}
					transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
					y1='0'
					y2='0'>
					<stop stopColor='#2EB9DF' stopOpacity='0'></stop>
					<stop offset='0.95' stopColor='#2EB9DF'></stop>
					<stop offset='1' stopColor='#2EB9DF' stopOpacity='0'></stop>
				</motion.linearGradient>

				<motion.linearGradient
					gradientUnits='userSpaceOnUse'
					id='blue-pulse-2'
					initial={{ x1: -100, y1: -(30 / 400) * 100, x2: 0, y2: 0 }}
					animate={{ x1: 400, y1: 180, x2: 500, y2: 400 + (30 / 400) * 100 }}
					transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
					y1='0'
					y2='0'>
					<stop stopColor='#2EB9DF' stopOpacity='0'></stop>
					<stop offset='0.95' stopColor='#2EB9DF'></stop>
					<stop offset='1' stopColor='#2EB9DF' stopOpacity='0'></stop>
				</motion.linearGradient>
			</defs>
		</svg>
	)
}
