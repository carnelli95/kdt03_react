import React from 'react'
import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import market from '../assets/market.png'
import { useState } from 'react'

export default function FoodCard({data}) {
    const[isActive, setIsActive] = useState(false);
    
    
    return (
    <div className='w-full flex justify-start items-start
                    border border-blue-500
                    rounded-sm'>
      <div className='w-1/3 px-5 py-2 flex justify-center'>
        <img src={data['구분'] == '광역지원센터' ? busan :
                    data['구분'] == '기초푸드뱅크' ? bank : market
                 } 
             alt={data['구분']} 
             className='w-6/10 h-1/2' />
      </div>
      <div className='flex flex-col m-3 w-2/3 justify-end'>
            <div>
                <div className='font-bold'>{data['사업장명']}</div>
                <div>{data['운영주체명']}</div>
                <div>{data['사업장 소재지']}</div>
                <div>{data['연락처(대표번호)']}</div>
                <div>{data['연락처(대표번호)']}</div>
            </div>
            <div className='w-full h-10 bg-gray-300 text-white cursor-pointer'>
        </div>
      </div>
    </div>
  )
}
