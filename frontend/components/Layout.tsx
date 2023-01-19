import Meta from "./Meta"
type Props = {
	children?: React.ReactNode
}
export default function Layout({ children }: Props) {
	return(
		<>
			<Meta />
			<div className="container">
				<div className="main">
					{ children }
				</div>
			</div>
		</>
	)
}