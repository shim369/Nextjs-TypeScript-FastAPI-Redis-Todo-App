import Head from "next/head"
type Props = {
	children?: React.ReactNode
	title?: string
	description?: string
}
export default function Layout({ children, title, description}: Props) {
	return(
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content={ description } />
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<title>{ title }</title>
			</Head>
			<div className="wrapper">
				<header>
					<h1>{ title }</h1>
				</header>
				<main>
					<div className="container">
						{ children }
					</div>
				</main>
				<footer>
					©2023 { title }
				</footer>
			</div>
		</>
	)
}

Layout.defaultProps = {
	title: 'Next FastAPI Todo App',
	description: 'This is Next FastAPI Todo App',
}