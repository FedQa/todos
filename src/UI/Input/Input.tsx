import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            <input
                value={props.value}
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className={classes.input}/>
        </div>
    );
};

export default Input;