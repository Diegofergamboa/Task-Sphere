import React from 'react'

const TodoSearch = ({searchValue , setSearchValue}) => {
  return (
    <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue}/> 
  )
}

export { TodoSearch }

