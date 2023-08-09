import React from 'react'

const TodoSearch = ({searchValue , setSearchValue}) => {
  return (
    <input className='TodoSearch' placeholder='Search your task' onChange={(event) => setSearchValue(event.target.value)} value={searchValue}/> 
  )
}

export { TodoSearch }

