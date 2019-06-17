import React, {Fragment} from 'react';

const TodoList = ({list, handleDelete, handleComplete}) => (
    <Fragment>
        <ul>
            {
                list.map(todo => (
                    <Fragment key={todo.id}>
                        <li onClick={ () => handleComplete(todo.id)}>
                            {
                                todo.status === 'COMPLETED' ? <del>{todo.title}</del> : todo.title
                            }
                        </li>
                        <button onClick={ () => handleDelete(todo.id)}>Delete</button>
                    </Fragment>
                ))
            }
        </ul>
    </Fragment>
);

export default TodoList;
