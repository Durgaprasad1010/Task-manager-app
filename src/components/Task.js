import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>

            <div>
                <FontAwesomeIcon icon={faCheck} onClick={() => toggleComplete(task.id)} />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Task