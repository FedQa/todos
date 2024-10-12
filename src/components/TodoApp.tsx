import React, {useState} from 'react';
import AddTodoForm from "./AddTodoForm.tsx";
import {TodoList} from "./TodoList.tsx";
import '../styles/TodoApp.css'
import Button from "../UI/Button/Button";
import Todo from "./Todo";


interface TodoProps {
    id: number;
    text: string;
    completed: boolean;
}


const TodoApp = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');


    const addTodo = (newTodo: string) => {
        const newTodoObj = {id: Date.now(), text: newTodo, completed: false};
        setTodos([...todos, newTodoObj]);
    }

    const removeTodo = (todoId: number) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const toggleComplete = (id: number) => {
        setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    }

    const getFilteredTodos = () => {
        if (filter === 'active') return todos.filter((todo) => !todo.completed);
        if (filter === 'completed') return todos.filter((todo) => todo.completed);
        return todos; //all
    }

    const getItemsLeft = () => {
        let count = 0;
        for (let todo of todos) {
            if (!todo.completed) count++;
        }

        return count > 1 ? `${count} items left` : `${count} item left`;
    }


    return (
        <div className="todoApp">
            <h1 className="todoApp__header">todos</h1>

            <div className="todo__panel">
                <AddTodoForm addTodo={addTodo}/>
                <TodoList todos={getFilteredTodos()} remove={removeTodo} toggleComplete={toggleComplete}/>
                <div className="todo__panel__buttons">
                    <div className="todo__itemsLeft">
                        {getItemsLeft()}
                    </div>
                    <Button onClick={() => setFilter('all')} className="todo__panel__button">All</Button>
                    <Button onClick={() => setFilter('active')} className="todo__panel__button">Active</Button>
                    <Button onClick={() => setFilter('completed')} className="todo__panel__button">Completed</Button>
                    <Button onClick={clearCompleted} className="todo__panel__button">Clear completed</Button>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;