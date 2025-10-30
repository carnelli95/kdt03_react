import React, { useEffect } from 'react'
import TailCard from '../component/TailCard'
import TailInput from '../component/TailInput';
import TailButton from '../component/TailButton';
import { useRef } from 'react';
import { useState } from 'react';
import { Fa500Px } from "react-icons/fa";


export default function Gallery() {

    const [tags, setTags] = useState([]);
    const [cards, setCards] = useState([]);
    const kwRef = useRef();

    const handleClick = async () => {

      if(kwRef.current.value == '') {
        alert('키워드를 입력');
        kwRef.current.focus();
        return
      }  
      await getFetchData();
    }
    
    const getFetchData = async () => {
  
        const apiKey = import.meta.env.VITE_API_KEY;
        const kw = kwRef.current.value;
        let url = `/photo-api/gallerySearchList1?`
                  +`serviceKey=${apiKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
                  +`keyword=${kw}&_type=json`
        console.log(url)
        
        const resp = await fetch(url);
        const data = await resp.json();

        setTags(data.response.body.items.item);
    }

    useEffect(() => {
        getFetchData();
    },[])

    useEffect(() => {
        console.log(tags);
        const card = tags.map(item => ({
                              key: item.galContentId,
                              title: item.galTitle,
                              imageUrl: item.galWebImageUrl,
                              location: item.galPhotographyLocation,
                              searchKeyword: item.galSearchKeyword,
                              
        }))
        setCards(card);
    },[tags])

    return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h1 className='w-9/10 p-5 h-1/4 mt-5 text-2xl font-bold text-center'>
        <div className='flex justify-center items-center'>
          <span>한국관광공사 사진 정보 서비스</span>
          <Fa500Px size={25}/>
        </div>
      </h1>

      <div className='w-9/10 p-5
                      bg-grey-50
                      flex justify-center'>
        <div className="grid grid-cols-2">
            <TailInput type='text' name='txt1' ref={kwRef}/>
            <div>
                <TailButton color='blue' caption='확인' onHandle={handleClick} />
                <TailButton color='blue' caption='취소' onHandle={handleClick} />
            </div>
        </div>
      </div>
      <div className="mt-4 w-9/10 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
                      object-cover">
        {cards.map(item => <TailCard 
                              key={item.key}
                              title={item.title}
                              imageUrl={item.imageUrl}
                              location={item.location}
                              searchKeyword={item.searchKeyword}
                            />
        )}
      </div>
    </div>
  )
}
