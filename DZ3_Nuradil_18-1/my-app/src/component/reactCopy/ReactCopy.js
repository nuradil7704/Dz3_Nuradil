import React from 'react';
import classes from "./reactCopy.module.css"

function ReactCopy(props) {
    const user = {name: "Anna", age: 19}
    console.log(user)

    return (
        <ul className={classes.title}>
            <h1>React Copy</h1>
            <li>name: Anna</li>
            <li>age: 19</li>
        </ul>
    );
}

export default ReactCopy;