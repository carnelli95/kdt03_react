import React from 'react'
import { useState, useEffect } from 'react';


export default function BoxOffice() {
    const [tags, setTags] = useState([]);
    const [info, setInfo] = useState();

    const handleSelectDt = (e) => {
        let dt = e.target.value.replaceAll('-', '');
        console.log(dt);
        getFetchData(dt);
    }

    const handleShowInfo = (mv) => {
        let tm = `[${mv.rankOldAndNew} : ${mv.openDt}] ${mv.movieNm} `;
        tm = `${tm} 상영한 스크린수 : ${parseInt(mv.scrnCnt).toLocaleString()}`;
        tm = `${tm} 상영횟수 : ${parseInt(mv.showCnt).toLocaleString()}`;

        setInfo(tm);
    }

    const getYesterday = () => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        return yesterday.toISOString().slice(0, 10);
    }


    const getFetchData = async (dt) => {
        
       
        // console.log(apiKey)

        const apiKey = import.meta.env.VITE_MV_API;
        let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        let url = `${baseUrl}key=${apiKey}&targetDt=${dt}` ;
        console.log(url)
        
        const resp = await fetch(url);
        const data = await resp.json();
        setTags(data.boxOfficeResult.dailyBoxOfficeList);

        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         setTags(data.boxOfficeResult.dailyBoxOfficeList)})
        //     .catch(err => console.log(err));
    }

    //컴포넌트 생성시 한번
    useEffect(()=>{
        let dt = getYesterday().replaceAll('-', '') ;
        getFetchData(dt) ;
    }, []) ;

    return (
    <div className="relative overflow-x-auto">
        <div className='flex justify-center items-center p-3 m-3 text-2xl'>
            <h1 className='font-bold '>
                일일 박스오피스
            </h1>
        </div>
        <div className='w-9/10 flex justify-end'>
            <input type="date"
                        max={getYesterday()}
                        value={getYesterday()} 
                        onChange={handleSelectDt} />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                
                <tr>
                    <th scope="col" className="px-6 py-3">
                        순위
                    </th>
                    <th scope="col" className="px-6 py-3">
                        영화명
                    </th>
                    <th scope="col" className="px-6 py-3">
                        매출액
                    </th>
                    <th scope="col" className="px-6 py-3">
                        관객수
                    </th>
                    <th scope="col" className="px-6 py-3">
                        누적 매출액
                    </th>
                    <th scope="col" className="px-6 py-3">
                        누적 관객수
                    </th>
                    <th scope="col" className="px-6 py-3">
                        증감율
                    </th>
                </tr>
            </thead>
            <tbody>
                {tags.map((item) => (
                    <tr key={item.movieCd}
                        onClick = {() => handleShowInfo(item) }>
                       <td className="px-6 py-4 text-right">
                            {item.rank}
                       </td>
                       <td className="px-6 py-4 text-right">
                            {item.movieNm}
                       </td>
                       <td className="px-6 py-4 text-right">
                            {parseInt(item.salesAmt).toLocaleString()}
                       </td>
                       <td className="px-6 py-4 text-right">
                             {parseInt(item.audiCnt).toLocaleString()}
                       </td>
                       <td className="px-6 py-4 text-right">
                            {parseInt(item.salesAcc).toLocaleString()}
                       </td>
                       <td className="px-6 py-4 text-right">
                            {parseInt(item.audiAcc).toLocaleString()}
                       </td>
                       <td className="px-6 py-4 text-right">
                            {item.rankInten > 0 ? <span className='text-red-600 font-bold'>🔺{item.rankInten}</span>
                                : item.rankInten < 0? <span className='text-blue-600 font-bold'>🔻{item.rankInten}</span>
                                : <span>➖</span>}
                       </td>
                    </tr>
                   
                ))}
            </tbody>
        </table>
        <div className='w-9/10 h-14 p-5 flex justify-center items-center
                        text-lg text-red-400 font-bold mt-5 border border-blue-400'>
            {info}
        </div>
    </div>
  )
}
