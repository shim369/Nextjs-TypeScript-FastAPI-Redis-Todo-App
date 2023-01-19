import Head from "next/head"

type Props = {
	title?: string
	description?: string
}
const Meta = ({ title, description }: Props) => {
    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    )
  }
  
  Meta.defaultProps = {
    title: 'Next FastAPI App',
    description: 'Next FastAPI App',
  }
  
  export default Meta