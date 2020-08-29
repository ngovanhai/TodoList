import React from 'react';
import "./style.scss";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null
}


function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setvalue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setvalue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: value,
        }
        onSubmit(formValues);
        setvalue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input type="text"
                value={value}
                onChange={handleValueChange}>
            </Input>
            <AddCircleOutlineIcon className="add" onClick={handleSubmit}></AddCircleOutlineIcon>
        </form>
    );
}

export default TodoForm;