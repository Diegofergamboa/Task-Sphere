import React from 'react'
import './styles.css'
import listGif from '../../assets/list.gif'

function EmptyTodos() {
    return (
        <div className='EmptyTodos'>
            <p>¡Crea tu primer TODO!</p>
            <img src={listGif} alt='A list of items' width="160px"/> 
        </div>
    )
}

export { EmptyTodos }
