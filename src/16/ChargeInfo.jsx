import React from 'react'
import zcode from './data/zcode.json'
import zscode from './data/zscode.json'
import kind from './data/kind.json'
import kinddetail from './data/kinddetail.json'

import TailSelect from '../component/TailSelect'
import TailButton from '../component/TailButton'

export default function ChargeInfo() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='w-full text-2xl font-bold p-5 mb-4 text-left'>
            전기차 충전소 정보
        </h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4'>
            <TailSelect id='sel1' 
                        title='시도'
                        opk={Object.keys(zcode)}
                        opv={Object.values(zcode)}
                        />
            <TailSelect id='sel2' 
                        title='지역동'/>
            <TailSelect id='sel3' 
                        title='충전소구분'/>
            <TailSelect id='sel4' 
                        title='충전소상세'/>
            <TailButton caption='검색' color='blue' onHandle={() => {}} />
            <TailButton caption='취소' color='orange' onHandle={() => {}} />
        </div>
    </div>
  )
}
