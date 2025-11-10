import React, { useState } from 'react'
import TailButton from '../component/TailButton'
import { useSetAtom } from 'jotai'
import { todosAtom } from './atomsTodo'

export default function TodoItem({ todo }) {
  const setTodos = useSetAtom(todosAtom);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = () => {
    setTodos(
        prev => prev.map(t => t.id == todo.id ? { ...t, completed: !t.completed } : t)
    );
  };

  const handleSave = () => {
    setTodos(
        prev => prev.map(t => t.id == todo.id ? { ...t, text: editText } : t)
    )
    setIsEdit(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleDelete = () => {
    setTodos(prev => prev.filter(t => t.id != todo.id )
    )
    setIsEdit(false);
  };

  return (
    <div className='flex justify-between items-center w-3/4 p-2'>
      <input
        type="checkbox"
        className='w-5 h-5 cursor-pointer'
        checked={todo.completed}
        onChange={handleToggle}
      />

      <div className='flex-1 mx-4'>
        {isEdit ? (
          <input
            type='text'
            value={editText}
            onChange={e => setEditText(e.target.value)}
            className='border px-2 py-1 rounded w-full'
          />
        ) : (
          <span className={`flex-1 p-2 ${todo.completed ? "line-through" : ""}`}>
            {todo.text}
          </span>
        )}
      </div>

      <div className='flex gap-2'>
        {isEdit ? (
          <>
            <TailButton caption="확인" color="lime" onHandle={handleSave} />
            <TailButton caption="취소" color="orange" onHandle={handleCancel} />
          </>
        ) : (
          <>
            <TailButton caption="수정" color="lime" onHandle={handleEdit} />
            <TailButton caption="삭제" color="orange" onHandle={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
}
