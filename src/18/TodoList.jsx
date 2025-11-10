import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useAtomValue } from 'jotai'
import { todosAtom, completedAtom, incompletedAtom } from './atomsTodo'

export default function TodoList() {
    const todos = useAtomValue(todosAtom);
    const completed = useAtomValue(completedAtom)
    const incompleted = useAtomValue(incompletedAtom)
    
    console.log(todos)
    return (
        <div className='flex flex-col w-full 
                        justify-center items-center
                        m-5'>
            <h1 className='text-2xl max-w-3xl font-bold text-center'>
                할일목록
            </h1>
            <div className='flex justify-start items-center
                            w-3/4 h-10 p-3
                            bg-amber-100 border-amber-900'>
                전체 : {todos.length}개 | 완료 : {completed} 개 | 미완료 : {incompleted} 개
            </div>
            <TodoInput />
            {
                todos.map (todo => <TodoItem key={todo.id} todo={todo}/>)
            }
            
        </div>
    )
}
