import React from 'react'
import { todoContext } from '../../TodoContext'
import './styles.css'

const TodoCounter = () => {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(todoContext)
    return (
        <div className='TodoCounter'>
            <h1>You have completed {completedTodos} of {totalTodos} tasks</h1>
        </div>
    )
}

export { TodoCounter }