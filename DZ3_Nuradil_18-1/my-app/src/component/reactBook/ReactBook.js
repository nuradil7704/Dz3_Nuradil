import React from 'react';
import classes from "./reactBook.module.css"

function ReactBook(props) {
    const user = {name: "Anna", age: 19}
    console.log(user)

    return (
        <ul className={classes.title}>
            <h1>ReactBook</h1>
            <li>name: Anna</li>
            <li>age: 19</li>
        </ul>
    );
}

export default ReactBook;