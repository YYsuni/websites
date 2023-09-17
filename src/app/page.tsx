import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex h-screen flex-col items-center justify-center'>
			<h1 className='border-text font-mono text-5xl font-bold'>WEBSITES</h1>
			<ol className='mt-4 flex flex-wrap gap-4'>
				<li>
					<Link href='/1.next.js-cpu-animation' className='inline-block border-2 border-gray-600 p-2 hover:underline'>
						1. CPU
					</Link>
				</li>
				<li>
					<Link
						href='/2.framer-motion-usescroll-3d'
						className='inline-block border-2 border-gray-600 p-2 hover:underline'>
						2. Pixel Spinning Galaxies
					</Link>
				</li>
				<li>
					<Link href='/3.glass-shapes' className='inline-block border-2 border-gray-600 p-2 hover:underline'>
						3. Glass Shapes
					</Link>
				</li>
				<li>
					<Link href='/4.gatsby-stars' className='inline-block border-2 border-gray-600 p-2 hover:underline'>
						4. Gatsby Stars
					</Link>
				</li>
			</ol>
		</main>
	)
}
