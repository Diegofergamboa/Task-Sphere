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
  { text: 'FIve Task To Do', completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  return (
    <>
      <div className="App">
        <TodoCounter />
        <TodoSearch />
      <TodoList>
        {todos.map((todo) => {
          return (
            <TodoItem
              completed={todo.completed}
              text={todo.text}
              key={todo.text} // Añade una clave única para cada TodoItem
            />
          );
        })}
      </TodoList>
        <CreateTodoButton />
        </div>
    </>
  );
}

export default App;
