import React from 'react'
import { Todo } from '../model'
import './styles.css'


interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map(t =>
                <li>{t.todo} {t.isDone} {t.id}</li>

            )}
        </div>
    )
}

export default TodoList