import React from 'react'
import './styles.css'
import { todoContext } from '../../TodoContext'

const TodoForm = () => {
  const { 
    addTodo, 
    setOpenModal
  } = React.useContext(todoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(state => !state)
  }

  const onCancel = () => {
    setOpenModal(state => !state)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form
      onSubmit={onSubmit}>
      <label>Write your new Task</label>
      <textarea
        placeholder='Write your Task Description here'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >Cancel</button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >Add</button>
      </div>
    </form>
  )
}

export { TodoForm } 