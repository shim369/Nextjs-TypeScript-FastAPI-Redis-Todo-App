import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'next/router'
import Moment from 'react-moment'

export default function TodoItem({ todo }: any) {

    const router = useRouter()

    const deleteTodo = async (pk: any) => {
        axios.delete(`http://127.0.0.1:8000/todos/${pk}`)
          .then(function (response) {
            swal({
              title: "Todo Deleted!",
              text: "Todo task deleted successfully",
              icon: "danger",
            });
          })
        .catch(function (error) {
            console.log(error);
        });
        router.push("/")
    }

    const updateTodo = async (pk: any) => {
        axios.put(`http://127.0.0.1:8000/todos/${pk}`, {
            title: todo.title,
            description: todo.description,
            completed: !todo.completed,
            time: todo.time
          })
          .then(function (response) {
            swal({
              title: "Todo Updated!",
              text: "Todo task Updated successfully",
              icon: "success",
            });
          })
          .catch(function (error) {
            console.log(error);
          });

          router.push("/")
    }


    return (
        <div className="card mt-4">
            {todo.completed? <h2><del>{ todo.title }</del></h2> : <h2>{ todo.title }</h2>}
            <p>{ todo.description }</p>
			<div className="mt-3 datetime">
				<Icon.Clock />
				<Moment format="YYYY/MM/DD">
					{ todo.time }
				</Moment>
			</div>
			<div className="mt-3 buttons">
            {todo.completed? 
                <Button variant="success" onClick={() => (updateTodo(todo.id))}>Completed</Button>
                :
                <Button variant="primary" onClick={() => (updateTodo(todo.id))}>Complete</Button>
            }
            <Button variant="danger" onClick={() => (deleteTodo(todo.id))}>Delete</Button>
			</div>
        </div>
    )
}