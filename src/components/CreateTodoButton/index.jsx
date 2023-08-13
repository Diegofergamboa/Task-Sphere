import React from 'react'

const CreateTodoButton = ({ openModal , setOpenModal }) => {
    return (
        <button
            className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }>
        </button>
    )
}

export { CreateTodoButton }