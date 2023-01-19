import Layout from '../components/Layout'
import TodoList from '../components/TodoList'
import { Button, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'next/router'

type Props = {
	todos?: string
}


export default function Home({ todos }: Props) {
	const router = useRouter()

  const registerUser = (e: any) => {
    e.preventDefault()

    const todo_title = e.target.title.value
    const todo_description = e.target.description.value

    axios.post('http://127.0.0.1:8000/todos', {
      title: todo_title,
      description: todo_description,
      completed: false,
      time: Date()
    })
    .then(function (response) {
      swal({
        title: "Todo Created!",
        text: "Todo task created successfully",
        icon: "success",
      });
    })
    .catch(function (error) {
      console.log(error);
    });


    // reset the form empty
    e.target.reset()

    router.push("/")

  }
	return (
		<>
			<Layout>
				<Row>
					<Col>
					<div className="card">
						<Form onSubmit={registerUser}>
						<Form.Group className="mb-3" controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Title" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Description" />
						</Form.Group>

						<Button className="btn-create" variant="primary" type="submit">
							Create Todo
						</Button>

						</Form>
					</div>
					</Col>
				</Row>
				
				<TodoList todos={todos}/>
			</Layout>
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch ("http://127.0.0.1:8000/todos")
	return {
		props: {
			todos: await res.json()
		}
	}
}