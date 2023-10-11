import Animation1 from './animation1'
import Animation2 from './animation2'

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-4 bg-[#fefefe]'>
			<Animation1 />
			<Animation2 />
		</main>
	)
}
