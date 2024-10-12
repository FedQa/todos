import React from 'react';
import Todo from "./Todo.tsx";
import './../styles/TodoApp.css'

export const TodoList = ({todos, remove, toggleComplete}) => {
    return (
        <div className="todoList">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} remove={remove} toggleComplete={toggleComplete}/>
            ))}
        </div>
    );
};

