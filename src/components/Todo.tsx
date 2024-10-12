
import Button from "../UI/Button/Button";
import React from "react";

interface TodoProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    },
    remove: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({todo, remove, toggleComplete}) => {
    return (
        <div>
            <div className="todo">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="todo__checkbox"
                />
                <span
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        textDecorationColor: todo.completed ? 'grey' : 'inherit',
                    }}
                    className="todo__text"
                >
  {todo.text}
</span>
                <Button onClick={() => remove(todo.id)} className="todo__deleteItem">delete item</Button>
            </div>
            <hr />
        </div>
    );
};

export default Todo;