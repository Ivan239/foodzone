import React from 'react';
import './Button.css';

const Button = (props) => {
    return <button className="button" type={props.type} onClick={props.onClick} style={props.style}>
        {props.children}
    </button>;
};

export { Button };