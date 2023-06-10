import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ subsets: ['latin'] })

export const metadata = {
	title: 'Interactive Rating Component',
	description:
		'Frontend Mentor Challenge | Interactive Rating Component | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${overpass.className} grid min-h-screen place-content-center bg-veryDarkBlue px-6 text-white`}>
				{children}
			</body>
		</html>
	)
}
