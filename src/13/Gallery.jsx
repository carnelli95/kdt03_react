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

    const handleCancel = () => {
      setTags([]) ;
      kwRef.current.value = "" ;
      kwRef.current.focus();
   }

    const handleClick = async () => {

      if(kwRef.current.value == '') {
        alert('키워드를 입력해 주세요');
        kwRef.current.focus();
        return
      }  
      await getFetchData();
    }
    
    const getFetchData = async () => {
  
        const apiKey = import.meta.env.VITE_API_KEY;
        const kw = encodeURI(kwRef.current.value);
        let url = `/api/B551011/PhotoGalleryService1/gallerySearchList1?`
                  +`serviceKey=${apiKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
                  +`keyword=${kw}&_type=json`
        console.log(url)
        
        const resp = await fetch(url);
        const data = await resp.json();

        setTags(data.response.body.items.item);
    }

    useEffect(() => {
        kwRef.current.focus();
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
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='w-9/10 p-5 mt-5 text-2xl font-bold text-center'>
        <h1 className='flex justify-center items-center'>
          <span>한국관광공사 사진 정보 서비스</span>
          <Fa500Px size={25}/>
        </h1>
      </div>
      <div className='w-9/10 p-5
                      bg-gray-50
                      flex justify-center'>
        <div className="grid grid-cols-2">
            <TailInput type='text' name='txt1' ref={kwRef}/>
            <div>
                <TailButton color='blue' caption='확인' onHandle={handleClick} />
                <TailButton color='blue' caption='취소' onHandle={handleCancel} />
            </div>
        </div>
      </div>
      <div className="mt-4 w-9/10 h-3/4 overflow-auto 
                     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
                      ">
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
