import React, { useState } from 'react'
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

const defaultTodos = [
  { text: 'First Task TO DO', completed: true },
  { text: 'Second Task TO DO', completed: true },
  { text: 'Third Task To Do', completed: false },
  { text: 'Four Task To Do ', completed: false },
  { text: 'FIve Task To Do', completed: false },
]

function App() {
  {/*  Setup for the todos render */ }
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  {/*  Setup for the todos counter */ }
  const todosCompleted = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  {/*  Setup for the todos search and filter */ }
  const [searchValue, setSearchValue] = useState('')
  const filterTodos = todos.filter(todo => (todo.text.toLowerCase()).includes(searchValue.toLowerCase()))

  {/* Setup for complete and delete Todos */ }
  const completeTodo = (textTodo) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == textTodo)
    newTodos[todoIndex].completed = true
    return saveTodos(newTodos)
  }

  const deleteTodo = (textTodo) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == textTodo)
    newTodos.splice(todoIndex, 1)
    return saveTodos(newTodos)
  }

  return (
    <AppUI
      todosCompleted={todosCompleted}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
