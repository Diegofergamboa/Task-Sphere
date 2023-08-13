import React from 'react'
import './styles.css'

const TodoForm = () => {
  return (
    <form>
        <label>Write your new Task</label>
        <textarea 
          placeholder='Write your Task Description here'
        />
        <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel'
        >Cancel</button>
        <button
          className='TodoForm-button TodoForm-button--add'
        >Add</button>
        </div>
    </form>
  )
}

export { TodoForm } 