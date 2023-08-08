import React, { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { text: 'First Task TO DO', completed: true },
  { text: 'Second Task TO DO', completed: true },
  { text: 'Third Task To Do', completed: false },
  { text: 'Four Task To Do ', completed: false },
  { text: 'FIve Task To Do', completed: false },
]

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem
  if (!parsedItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else (
    parsedItem = JSON.parse(localStorageItem)
  )
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

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
    <>
      <main className="App">
        <TodoCounter
          todosCompleted={todosCompleted}
          totalTodos={totalTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {filterTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.text}
                completed={todo.completed}
                text={todo.text}
                completeTodo={() => completeTodo(todo.text)}
                deleteTodo={() => deleteTodo(todo.text)}
              />
            )
          })}
        </TodoList>
        <CreateTodoButton />
      </main>
    </>
  )
}

export default App
