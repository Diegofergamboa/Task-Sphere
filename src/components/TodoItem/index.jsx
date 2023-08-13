import React from 'react'
import './styles.css'

const TodoItem = (props) => {
    console.log(props.completed)
    /* Check if the task is completed */
    const completeText = () => {
        return props.completed ? 'TodoItem__check' : ''
    }

    return (
        <div className='TodoItem'>
            <span className='TodoItem__Complete' onClick={props.onComplete}></span>
            <p className={completeText()}>{props.text}</p>
            <span className='TodoItem__Delete' onClick={props.onDelete}></span>
        </div>
    )
}

export { TodoItem }
