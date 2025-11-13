import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setInCompleted] = useState(0);

    const handleSave = (newItem) => {
        setTodos(newItem);
        localStorage.setItem("todo", JSON.stringify(newItem));
    }

    useEffect(() => {
        //문자열 -> 자바스크립트 객체 : JSON.parse()
        const localTodos = JSON.parse(localStorage.getItem("todo")) || [];
        setTodos(localTodos);
    }, []);

    useEffect(() => {
        setCompleted(todos.filter(todo => todo.completed).length);
        setInCompleted(todos.filter(todo => !todo.completed).length);
    }, [todos]);

    return (
        <div className='flex flex-col w-full justify-center items-center m-5'>
            <h1 className='text-2xl max-w-3xl font-bold text-center'>
                할일목록
            </h1>
            <div className='flex justify-start items-center w-3/4 h-10 p-3 bg-amber-100 border-amber-900'>
                전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {incompleted}개
            </div>

            <TodoInput todos={todos} setTodos={setTodos} handleSave={handleSave}/>

            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={handleSave} />
            ))}
        </div>
    );
}
