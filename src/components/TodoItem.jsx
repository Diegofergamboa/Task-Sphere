import React from 'react'

const TodoItem = ({ text, completed }) => {

    {/* Check of the completed tasks */ }
    const completeText = () => {
        return (completed) ? 'TodoItem__check' : ''
    }

    return (
        <div className='TodoItem'>
            <span className='TodoItem__Complete'></span>
            <p className={completeText()}>{text}</p>
            <span className='TodoItem__Delete'></span>
        </div>
    )
}

export { TodoItem }
