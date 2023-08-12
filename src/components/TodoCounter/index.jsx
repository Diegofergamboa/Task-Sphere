import React from 'react'
import { todoContext } from '../../TodoContext'

const TodoCounter = () => {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(todoContext)
    return (
        <div>
            <h1>You have completed {completedTodos} of {totalTodos} tasks</h1>
        </div>
    )
}

export { TodoCounter }