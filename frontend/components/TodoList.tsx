import { Key } from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos }: any) {
    return (
        <div className="grid">
            {todos.map((todo: { id: Key | null | undefined }) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}