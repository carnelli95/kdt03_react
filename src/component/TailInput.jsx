import React from 'react'
import { useRef } from 'react'

export default function TailInput({type, name, ref}) {
  return (
    <div>
      <input type={type} name={name}
                ref={ref}
                className='w-full p-2 text-gray-900 border'>
      
      </input>
    </div>
  )
}
