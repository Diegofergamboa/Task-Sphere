import React from 'react'

const TodoCounter = ({
    todosCompleted,
    totalTodos
}) => {
    return (
        <div>
            <h1>You have completed {todosCompleted} of {totalTodos} tasks</h1>
        </div>
    )
}

export { TodoCounter }
