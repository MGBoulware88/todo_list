import React, { useState } from 'react';

const TodoList = () => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [todoList, setTodoList] = useState([
        { title: 'get MERN black belt', isDone: false },
        { title: 'move to Orange County', isDone: false },
        { title: 'get a job as a React dev', isDone: false },
        { title: 'get Java black belt', isDone: false }
    ]);

    const addTodoItem = e => {
        e.preventDefault();
        const newItem = [{ title: newTodoTitle, isDone: false }, ...todoList];
        setTodoList(newItem);
    }

    const removeTodoItem = (e, selectIdx) => {
        const filteredTodoList = todoList.filter((oneTodo, i) => selectIdx !== i);
        setTodoList(filteredTodoList);
    }

    const todoListStyling = {
        display: 'flex',
        gap: '1rem'
    }

    // const lineThrough = {
    //     textDecoration: 'line-through'
    // }

    const handleTodoCheck = (e, changedIdx) => {
        const updatedTodoList = todoList.map((oneTodo, i) => {
            if (changedIdx === i) {
                return {
                    ...oneTodo,
                    isDone: e.target.checked
                }
            }
            return oneTodo
        })
        setTodoList(updatedTodoList);
    }

    return (
        <div>
            <form onSubmit={addTodoItem}>
                <input type="text" name="todoItem" id="todoItem" onChange={e => {
                    setNewTodoTitle(e.target.value);
                }} />
                <button type="submit">Add</button>
            </form>
            <form >
                {todoList.map((item, i) => {
                    return (
                        <div className={todoListStyling}>
                            <p>{item.title}</p>
                            <input type="checkbox" checked={item.isDone} onChange={e => {

                                handleTodoCheck(e, i)
                            }

                            } /> Done!{' '}
                            <button onClick={e => {

                                removeTodoItem(e, i)
                            }} key={i} type="button">Delete</button>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default TodoList;
