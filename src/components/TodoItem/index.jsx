import React from 'react'
import './styles.css'
import { todoContext } from '../../TodoContext'

const TodoItem = (props) => {
    /* Check if the task is completed */
    const completeText = () => {
        return completed ? 'TodoItem__check' : ''
    }

    return (
        <div className='TodoItem'>
            <span className='TodoItem__Complete' onClick={props.onComplete}></span>
            <p className={completeText()}>{text}</p>
            <span className='TodoItem__Delete' onClick={props.onDelete}></span>
        </div>
    )
}

export { TodoItem }
