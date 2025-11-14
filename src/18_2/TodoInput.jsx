import React, { useRef } from "react";
import TailButton from "../component/TailButton";

export default function TodoInput({ todo, todos, setTodos, handleSave }) {

  const inRef = useRef();
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

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

  return (
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
  );
}
