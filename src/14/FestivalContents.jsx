import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TailButton from '../component/TailButton';

export default function FestivalContents() {
  const location = useLocation()
  const contents = location.state.content;
//   const kakaoMapUrl = `https://map.kakao.com/link/map/` + 
//                         `${item?.MAIN_PLACE.replace(',','').replace('','')},${item?.LAT},${item?.LNG}`;
   console.log(contents)

  return (
    <div className='w-full flex flex-col items-center'>
      <p className='text-2xl font-bold mt-4'>{contents.TITLE}</p>

      <div className='flex flex-row items-center justify-center'>
        <div className='w-1/3 flex justify-center'>
          <img
            src={contents.MAIN_IMG_THUMB}
            alt={contents.TITLE}
            className='rounded-lg shadow-md w-full h-auto'
          />
        </div>

        <div className='flex flex-col w-full h-full'>
          <div className='flex flex-row items-center'>
            <span className='font-semibold text-gray-600'>축제 구군:</span>
            <span className='text-lg'>{contents.GUGUN_NM}</span>
          </div>
          <div className='flex flex-row items-center'>
            <span className='font-semibold text-gray-600'>주소:</span>
            <span className='text-lg'>{contents.ADDR1}</span>
          </div>
          <div className='flex flex-row items-center'>
            <span className='font-semibold text-gray-600'>연락처:</span>
            <span className='text-lg'>{contents.CNTCT_TEL}</span>
          </div>
          <div className='flex flex-row items-center'>
            <span className='font-semibold text-gray-600'>홈페이지:</span>
             {/* <a href={contents.HOMEPAGE_URL}>{contents.HOMEPAGE_URL}</a> */}
          </div>
          <div className='flex flex-row items-center'>
            <span className='font-semibold text-gray-600'>상세내용:</span>
            <span className='text-lg'>{contents.ITEMCNTNTS}</span>
          </div>
        </div>
      </div>

      <Link to="/festival">
        <TailButton color='blue' caption='목록으로' />
      </Link>
    </div>
  )
}
