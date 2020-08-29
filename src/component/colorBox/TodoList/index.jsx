import React, { useState } from 'react';
import './style.scss';
import ProTYpes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';


TodoList.proTypes = {
    todos: ProTYpes.array,
    onTodoClick: null,
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick, onItemCompleted } = props;
    const handleChange = (todo) => {
        if (onItemCompleted) {
            onItemCompleted(todo.id)
        }
    };

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);

        }
    }



    return (
        <div >
            {todos.map(todo => (
                <li key={todo.id} className={"todolist todolist-" + todo.complete} >
                    <Checkbox
                        color="primary"
                        onChange={() => handleChange(todo)}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    {todo.title}
                    <HighlightOffIcon className="delete" onClick={() => handleClick(todo)}></HighlightOffIcon>
                </li>
            ))}
        </div>
    );
}
export default TodoList;