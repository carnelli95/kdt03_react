import React, { useEffect } from 'react'
import TailCard from '../component/TailCard'
import TailInput from '../component/TailInput';
import TailButton from '../component/TailButton';
import { useRef } from 'react';
import { useState } from 'react';


export default function Gallery() {

    const [tags, setTags] = useState([]);
    const kwRef = useRef();

    const onClick = (() => {

    })
    
    const getFetchData = async () => {

        const apiKey = import.meta.env.VITE_MV_API;
        let baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        let url = `${baseUrl}serviceKey=${apiKey}` ;
        console.log(url)
        
        const resp = await fetch(url);
        const data = await resp.json();

        setTags(data.responnse.body.items.item);
    }

    useEffect(() => {
        getFetchData();
    },[])

    return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h1 className='w-9/10 p-5 mt-5 text-2xl font-bold text-center'>
        한국관광공사 사진 정보 서비스
      </h1>

      <div className='w-9/10 p-5
                      bg-grey-50
                      flex justify-center'>
        <div className="grid grid-cols-2">
            <TailInput type='text' name='txt1' ref={kwRef}/>
            <div>
                <TailButton color='blue' caption='확인' onHandle={onClick} />
                <TailButton color='blue' caption='취소' onHandle={onClick} />
            </div>
        </div>
      </div>
      <div >
        <TailCard data={tags}/>
      </div>
    </div>
  )
}
