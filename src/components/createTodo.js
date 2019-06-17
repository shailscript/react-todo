import React, {Fragment} from 'react';

const CreateTodo = ({todo, handleChange, handleSubmit}) => (
    <Fragment>
        <input name="todo" type="text" value={todo} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
    </Fragment>
);

export default CreateTodo;