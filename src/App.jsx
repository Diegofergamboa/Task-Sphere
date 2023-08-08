import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoList } from './components/TodoList.jsx';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  { text: 'FIrst Task TO DO', completed: true },
  { text: 'Second Task TO DO', completed: true },
  { text: 'Third Task To Do', completed: false },
  { text: 'Four Task To Do ', completed: false },
  { text: 'FIve Task To Do', completed: false },
];

function App() {
  {/*  Setup for the todos render */ }
  const [todos, setTodos] = useState(defaultTodos)

  {/*  Setup for the todos counter */ }
  const todosCompleted = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

    {/*  Setup for the todos search and filter */ }
    const [searchValue, setSearchValue] = useState('')
    
    const filterTodos =  todos.filter(todo => todo.text.includes(searchValue))
    console.log(filterTodos)

  return (
    <>
      <div className="App">
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
              />
            )
          })}
        </TodoList>
        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
