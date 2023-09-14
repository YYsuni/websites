import Link from 'next/link'
import './page.css'

export default function Home() {
	return (
		<main className='flex h-screen flex-col items-center justify-center'>
			<h1 className='border-text font-mono text-5xl font-bold'>WEBSITES</h1>
			<ol className='mt-4 gap-2'>
				<li>
					<Link href='/next.js-cpu-animation' className='border-2 border-gray-600 p-2 hover:underline'>
						CPU
					</Link>
				</li>
			</ol>
		</main>
	)
}
