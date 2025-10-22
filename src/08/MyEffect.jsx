import React from 'react'
import { useState, useEffect } from 'react'
import TailButton from '../component/TailButton';

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState([]);

    const handleClick = () => {
        setIsActive(isActive);
        if isActive
    })

    useEffect(() => {
        // 컴포넌트 생성시 한번 실행
        console.log('컴포넌트 실행')
    }, []);

    useEffect(isActive);

    return (
    <div className="w-full h-full flex justify-center items-center">
      <TailButton color="blue" caption="useEffect" onHandle={handleClick} />
    </div>
  )
}
