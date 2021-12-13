import React from 'react';
import './Button.css';

const Button = (props) => {
    return <button className="button" type={props.type} onClick={props.onClick}>
        <h4>{props.children}</h4>
    </button>;
};

export { Button };