import React from 'react'
import TailButton from '../component/TailButton'
import { todosAtom } from './atomsTodo'
import { useSetAtom } from 'jotai'
import { useRef } from 'react'

export default function TodoInput() {
    const setTodos = useSetAtom(todosAtom)
    const inRef = useRef();

    const handleAdd = () => {
        if (inRef.current.value == "") {
            alert('값을 입력해 주세요.')
            inRef.current.focus()
            return
        }

        const newItem = {
            id: Date.now(),
            text: inRef.current.value,
            completed : false
        }
        setTodos(prev => [newItem, ...prev])
        inRef.current.value = "";
        inRef.current.focus();
    }

  return (
    <div className='flex justify-center items-center
                    w-3/4 p-5 my-5'>
       <input type='text' ref={inRef}
                className='flex-1 p-2 border border-gray-200
                            focus:outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='새로운 할 일을 입력하세요'/>
        <TailButton caption="추가" color="blue" onHandle={handleAdd} />
    </div>
  )
}
