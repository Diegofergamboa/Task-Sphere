import React from 'react'

const TodoList = ({  children }) => {
    return (
        <div className='TodoList'>
            {children}
        </div>
    )
}

export { TodoList }
