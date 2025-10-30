import React, { useEffect, useRef, useState } from 'react'
import TailSelect from '../component/TailSelect'
import TailCard from '../component/TailCard'

export default function Festival() {
    const[tags, setTags] = useState([]);
    const[cards, setCards] = useState([]);
    const kwRef = useRef();

    const getFetchData = async () => {

        const apiKey = import.meta.env.VITE_API_KEY;
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=ulI8%2FG%2BhOY%2BO3Jtvo57Cd1CymM7pa2CaSPNBS%2B3mFOaYreZM3eOl%2FA0C8qPm%2FDeUjHR8W%2FTm0rTi7HSmbM4u1w%3D%3D&pageNo=1&numOfRows=40&resultType=json';
        
        
        console.log(url);
    }

    useEffect(() => {
        getFetchData();
    },[])

  return (
    <div className='flex flex-col mx-auto'>
        부산축제정보
      <TailSelect />
      {/* <TailCard />/ */}
    </div>
  )
}
