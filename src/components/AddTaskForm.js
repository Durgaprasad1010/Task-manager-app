import React, { useState } from 'react'

const AddTaskForm = ({ addTask }) => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(value);
        addTask(value);
        setValue("")
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type="text" className='todo-input' value={value} placeholder='Write the task here...'
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm