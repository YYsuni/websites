import './globals.css'

interface Props {
	children: React.ReactNode
}

export const metadata = {
	title: 'WEBSITES'
}

export default function RootLayout({ children }: Props) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}
