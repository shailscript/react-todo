import React, {Fragment, useState} from 'react';
import { Layout } from 'antd';
import CreateTodo from "./createTodo";
import TodoList from "./todoList";

const TodoLayout = props => {
    const [data, setData] = useState({
        todo: '',
        list: [
            {id: 0, title: 'First Todo', status: 'CREATED'},
            {id: 1, title: 'Second Todo', status: 'CREATED'},
            {id: 2, title: 'Third Todo', status: 'CREATED'},
        ]
    });

    const updateState = obj => setData({ ...data, ...obj});

    const handleChange = e => {
        e.preventDefault();
        updateState({todo: e.target.value})
    };

    const handleSubmit = () =>
        updateState({
            list: [
                ...data.list,
                {id: data.list.length, title: data.todo, status: 'CREATED'}
            ]
        });

    const handleDelete = id =>
        updateState({ list: data.list.filter(todo => todo.id !== id) });

    const handleComplete = id => {
        data.list[data.list.findIndex(todo => todo.id === id)].status = 'COMPLETED';
        updateState({ ...data });
    };

    return(
        <Fragment>
            <Layout>
                <CreateTodo
                    todo={data.todo}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}/>
                <TodoList
                    list={data.list}
                    handleDelete={handleDelete}
                    handleComplete={handleComplete}/>
            </Layout>
        </Fragment>
    )
};

export default TodoLayout;