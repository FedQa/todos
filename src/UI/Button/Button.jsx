import React from 'react';
import classes from './Button.module.css'

const Button = ({onClick, children, className}) => {
    return (
    <button
        className={`${classes.btn} ${className || ''}`}
        onClick={onClick}
    >{children}</button>
    );
};

export default Button;