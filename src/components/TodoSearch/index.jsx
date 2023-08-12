import React from 'react'
import { todoContext } from '../../TodoContext'
import './styles.css'

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(todoContext)
  return (
    <input
      className='TodoSearch'
      placeholder='Search your task'
      onChange={(event) => setSearchValue(event.target.value)} value={searchValue}
    />
  )
}

export { TodoSearch }

