import React from 'react'
// 1. useState import
import { useState } from 'react';

export default function MyListCard({title, imgUrl, content}) {
    // 2. useState 선언
    const [scnt, setScnt] = useState(0);
    const [dcnt, setDcnt] = useState(0);
    
    let cnt = 0;
    const handleClick = () => {
        cnt = cnt + 1;
        console.log(scnt);
        setScnt(scnt + 1);
        console.log(`${title} click : ${cnt}`)
    }

    const handleClick2 = () => {
        setDcnt(dcnt + 1);
        console.log(`${title} click : ${cnt}`)
    }
  
    return (
    <div className='w-full flex justify-start items-start border-4 border-amber-50
                    p-3'>
        <div className="w-1/3">
            <img src={imgUrl} alt={title}></img>
        </div>
        <div className='w-2/3 h-40 flex flex-col justify-between'>
            <div>
                <h1 className='font-bold text-3xl text-amber-400'>{title}</h1>
                <p className='flex flex-wrap font-light font-serif '>{content}</p>
            </div>
            <div className='flex justify-end font-bold text-xl text-violet-700'>
                <div className='cursor-pointer hover:text-red-500'
                        onClick={handleClick}>
                        💛좋아요 {scnt}
                </div>
                    
                <div className='cursor-pointer hover:text-red-500'
                        onClick={handleClick2}>    
                        ❌싫어요 {dcnt}
                </div>
            </div>
        </div>
    </div>
  )
}
