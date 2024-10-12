import React, {useState} from 'react';
import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button";
import './../styles/TodoApp.css'

const AddTodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState<string>('');

    const addNewTodo = (e) => {
        e.preventDefault();
        if (todo.length) {
            addTodo(todo);
            setTodo('');
        }
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }


    return (
        <form className="todoForm">
            <Input
            value={todo}
            type="text"
            onChange={handleChange}
            placeholder={"new todo..."}
            />
            <Button onClick={addNewTodo} className>add todo</Button>
        </form>
    );
};

export default AddTodoForm;