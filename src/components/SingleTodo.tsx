import React from 'react'
import { Todo } from '../model'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <form className="todos__single">
            <span className="todos__single--text">
                {todos.map(t =>
                    t.todo)}
            </span>
        </form>


    )
}

export default SingleTodo