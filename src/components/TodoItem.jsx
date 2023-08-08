import React from 'react'

const TodoItem = ({ text, completed, completeTodo, deleteTodo }) => {

    {/* Check of the completed tasks */ }
    const completeText = () => {
        return (completed) ? 'TodoItem__check' : ''
    }

    return (
        <div className='TodoItem'>
            <span className='TodoItem__Complete' onClick={completeTodo}></span>
            <p className={completeText()}>{text}</p>
            <span className='TodoItem__Delete' onClick={deleteTodo}></span>
        </div>
    )
}

export { TodoItem }
