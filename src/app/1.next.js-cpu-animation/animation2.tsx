'use client'

import { motion } from 'framer-motion'

export default function Animation2() {
	return (
		<div
			className='flex items-center justify-center rounded-lg border border-dashed bg-white'
			style={{ width: 400, height: 200 }}>
			<svg xmlns='http://www.w3.org/2000/svg' width='155' height='115' viewBox='0 0 155 115' fill='none'>
				<path
					d='M64 1H150C152.209 1 154 2.791 154 5V87C154 89.209 152.209 91 150 91H5C2.791 91 1 92.791 1 95V115'
					stroke='black'
					strokeOpacity='0.1'
				/>
				<path
					d='M64 1H150C152.209 1 154 2.791 154 5V87C154 89.209 152.209 91 150 91H5C2.791 91 1 92.791 1 95V115'
					stroke='url(#paint0_linear_14_19)'
					strokeWidth='2'
				/>
				<defs>
					<motion.linearGradient
						id='paint0_linear_14_19'
						initial={{
							x1: -24.5,
							y1: 119,
							x2: -24.5,
							y2: 129.5
						}}
						animate={{
							x1: [-24.5, -24.5, 80, 57, -26],
							y1: [119, 95.5, 65, 30.5, 8],
							x2: [-24.5, -24.5, 41, 57.5, 1],
							y2: [129.5, 112.5, 78, 60.5, 44]
						}}
						transition={{
							duration: 2,
							ease: 'linear',
							repeat: Infinity,
							delay: 0
						}}
						gradientUnits='userSpaceOnUse'>
						<stop stopColor='#FF4A81' stopOpacity='0' />
						<stop offset='0.0364583' stopColor='#FF4A81' stopOpacity='0.859375' />
						<stop offset='0.494792' stopColor='#DF6CF6' />
						<stop offset='1' stopColor='#0196FF' stopOpacity='0' />
					</motion.linearGradient>
				</defs>
			</svg>
		</div>
	)
}
