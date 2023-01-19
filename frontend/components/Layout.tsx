import Meta from './Meta'
type Props = {
	children?: React.ReactNode
}
export default function Layout({ children}: Props) {
	return(
		<>
			<Meta />
			<header>
				<h1>Next FastAPI App</h1>
			</header>
			<main className="main">
				<div className="container">
					{ children }
				</div>
			</main>
			<footer>
				©2023 Next FastAPI App
			</footer>
		</>
	)
}