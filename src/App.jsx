import React from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch.jsx'
import { TodoList } from './components/TodoList.jsx'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { text: 'FIrst Task TO DO', completed: true },
  { text: 'Second Task TO DO', completed: false },
  { text: 'Third Task To Do', completed: false },
  { text: 'Four Task To Do ', completed: false },
  { text: 'FIve Task To Do', completed: true },
];

function App() {
  return (
    <>
      <TodoCounter
      />
      <TodoSearch
      />

      <TodoList>
          <TodoItem
          />
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
