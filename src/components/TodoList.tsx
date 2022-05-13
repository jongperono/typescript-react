import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'


interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todo, todos, setTodos }) => {
    return (
        <div className="todos">
            <SingleTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos} />

        </div>
    )
}

export default TodoList
