'use client'

import { motion } from 'motion/react'
import './style.scss'

export default function Page() {
	return (
		<>
			<title>Colorful Bg</title>
			<div className='relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[hsl(330,100%,98%)]'>
				<svg className='absolute min-h-full min-w-full overflow-hidden' viewBox='0 0 1400 900' xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<filter id='effect'>
							<feTurbulence baseFrequency='0.05' type='fractalNoise' result='turbulence' seed={50} />
							<feDisplacementMap in='SourceGraphic' in2='turbulence' scale='100' xChannelSelector='B' yChannelSelector='G' />
							<feGaussianBlur stdDeviation='50' />
						</filter>
					</defs>

					<g filter='url(#effect)'>
						<circle r={100} fill='hsla(330,100%,95%,0.8)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M307.43,-88.42 C418.86,-119.85 632.19,69 776,68.72 C919.82,68.44 1037.15,-90.14 1177.15,-90.14 C1317.15,-90.14 1483.61,95.75 1499.43,195.58 C1515.26,295.4 1252.31,266.54 1249.72,367.58 C1247.13,468.62 1490.86,508.15 1488.58,619.58 C1486.3,731.01 1302.86,941.29 1176,959.58 C1049.14,977.87 969.49,779.68 843.43,779.58 C717.38,779.47 584.34,964.16 486.29,959 C388.24,953.84 371.56,782.24 278.86,749.86 C186.17,717.48 -37.71,949.29 -127.42,824.72 C-217.14,700.15 93.42,633.91 90.29,534.43 C87.17,434.95 -160.59,353.11 -149.14,251 C-137.68,148.9 59.76,185.27 134.29,129.86 C208.82,74.45 196,-56.99 307.43,-88.42'
								begin='5s'
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.5;1'
								keyTimes='0;0.5;1'
								dur='8s'
								repeatCount='indefinite'
								begin='5s'
							/>
						</circle>
						<circle r={150} fill='hsla(215,100%,92%,0.6)'>
							<animateMotion
								dur='30s'
								repeatCount='indefinite'
								path='M265.14,907.86 C365.71,744.43 429.72,17 660.57,22.14 C891.43,27.28 387.43,1096.42 642.29,1094.71 C897.14,1093 930.86,2.71 1178.86,5.57 C1426.86,8.43 959.43,1093 1214.86,1094.71 C1470.29,1096.43 1398.29,24.43 1669.71,23.29 C1941.14,22.14 1440,1105 1815.43,1082.71 '
								begin='5s'
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.5;1'
								dur='8s'
								repeatCount='indefinite'
								begin='1s'
							/>
						</circle>
						<circle r={400} fill='hsla(215,100%,95%,0.6)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M245.71,137 C285.71,45.57 385.14,19.29 478.29,41.57 C571.43,63.86 642.86,138.14 613.14,231.86 C583.43,325.57 484,368.43 376,339.29 C268,310.14 205.71,228.43 245.71,137 '
								begin='5s'
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.5;1'
								dur='8s'
								repeatCount='indefinite'
								begin='5s'
							/>
						</circle>
						<circle r={400} fill='hsla(215,100%,95%,0.6)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M1666,770 C1597.25,836.37 1543.12,997.12 1604,1074 C1664.88,1150.88 1827.45,1131.11 1898,1063 C1968.55,994.89 2021.14,822.71 1951,739 C1880.86,655.29 1734.75,703.63 1666,770 '
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.7;1'
								keyTimes='0;0.6;1'
								dur='8s'
								repeatCount='indefinite'
								begin='1s'
							/>
						</circle>
						<circle r={500} fill='hsla(330,100%,95%,0.6)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M1673.14,31.86 C1574.86,63.86 1510.86,132.43 1537,235 C1563.14,337.57 1716,383.86 1861.71,338.14 C2007.43,292.43 2042.86,194.14 1992,101 C1941.14,7.86 1771.43,-0.14 1673.14,31.86 '
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.5;1'
								dur='8s'
								repeatCount='indefinite'
								begin='0s'
							/>
						</circle>
						<circle r={500} fill='hsla(330,100%,95%,0.6)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M256.57,920.43 C293.14,815.29 357.14,770.71 481.14,769 C605.14,767.29 708.57,851.29 670.29,969 C632,1086.71 513.71,1111.29 412,1110 C310.29,1108.71 220,1025.57 256.57,920.43 '
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.6;1'
								dur='8s'
								repeatCount='indefinite'
								begin='2s'
							/>
						</circle>
						<circle r={300} fill='hsla(330,100%,95%,0.4)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M420.86,358.43 C444.86,267 505.07,203.28 582,179 C658.93,154.72 830.57,139.57 903.72,235 C976.86,330.43 921.77,452.57 858.57,515.57 C795.37,578.57 649.43,620.71 546,575.57 C468.46,541.73 396.86,449.86 420.86,358.43 '
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.7;1'
								dur='8s'
								repeatCount='indefinite'
								begin='6s'
							/>
						</circle>
						<circle r={200} fill='hsla(288,100%,95%,0.4)'>
							<animateMotion
								dur='20s'
								repeatCount='indefinite'
								path='M-163.71,298.43 C-163.71,298.43 -26.03,541 93.43,549.29 C212.89,557.57 288.11,338.09 412.86,338.43 C537.6,338.77 596.12,551.81 720.86,551 C845.6,550.19 910.97,330.67 1031.72,334.43 C1152.46,338.19 1187.71,583.1 1307.72,569.29 C1427.72,555.48 1539.43,276 1539.43,276 '
							/>
							<animateTransform
								attributeName='transform'
								attributeType='XML'
								type='scale'
								values='1;0.8;1'
								keyTimes='0;0.6;1'
								dur='8s'
								repeatCount='indefinite'
								begin='1s'
							/>
						</circle>
					</g>
				</svg>
			</div>
		</>
	)
}
