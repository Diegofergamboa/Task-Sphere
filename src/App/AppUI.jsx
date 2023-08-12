import React from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/index.jsx'git
import { TodoList } from '../components/TodoList/index.jsx'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'

const AppUI = ({
    todosCompleted,
    totalTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    completeTodo,
    deleteTodo
}) => {
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

export { AppUI }
