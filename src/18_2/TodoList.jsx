import React, { useState, useEffect, useRef } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TailButton from '../component/TailButton';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [incompleted, setInCompleted] = useState(0);

    const inRef = useRef();
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

   

    const getTodos = async () => {
      const resp = await fetch(
        `${supabaseUrl}/rest/v1/todos?select=*&order=id.desc`,
        {
          method: "GET",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        setTodos(data);
      } else {
        console.error("Error fetching todos:", resp.statusText);
        setTodos([]);
      }
    };

    const handleAdd = async () => {
      if (inRef.current.value == "") {
        alert("값을 입력해 주세요.");
        inRef.current.focus();
        return;
      }
      const response = await fetch(`${supabaseUrl}/rest/v1/todos`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inRef.current.value, completed: false }),
      });

      if (response.ok) {
        getTodos();
        inRef.current.value = "";
        inRef.current.focus();
      } else {
        console.error("Error adding todo:", response.statusText);
      }
    };

    useEffect(() => {
        //문자열 -> 자바스크립트 객체 : JSON.parse()
       getTodos();
    }, []);

    useEffect(() => {
        setCompleted(todos.filter(todo => todo.completed).length);
        setInCompleted(todos.filter(todo => !todo.completed).length);
    }, [todos]);

    return (
      <div className="flex flex-col w-full justify-center items-center m-5">
        <h1 className="text-2xl max-w-3xl font-bold text-center">
          할일목록(Supabase Fetch함수)
        </h1>
        <div className="flex justify-start items-center w-3/4 h-10 p-3 bg-amber-100 border-amber-900">
          전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 :{" "}
          {incompleted}개
        </div>

        <div className="flex justify-center items-center w-3/4 p-5 my-5">
          <input
            type="text"
            ref={inRef}
            className="flex-1 p-2 border border-gray-200
                                       focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="새로운 할 일을 입력하세요"
          />
          <TailButton caption="추가" color="blue" onHandle={handleAdd} />
        </div>

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    );
}
