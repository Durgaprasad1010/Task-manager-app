import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import { v4 as uuidv4 } from 'uuid'
import Task from './Task';
import EditTaskForm from './EditTaskForm';


uuidv4();

const TaskWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTask = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <div className='TodoWrapper'>
            <header>
                <h1>Task Manager</h1>
            </header>
            <AddTaskForm addTask={addTask}></AddTaskForm>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTaskForm editTodo={editTask} task={todo}></EditTaskForm>
                ) : (

                    <Task task={todo} toggleComplete={toggleComplete} key={index} deleteTodo={deleteTodo} editTodo={editTodo}></Task>
                )
            ))}


        </div>
    )
}

export default TaskWrapper