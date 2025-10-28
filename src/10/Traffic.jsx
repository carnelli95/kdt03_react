import React, { useState, useEffect } from 'react'
import TrafficNav from './TrafficNav'
// import trafficData from './교통사고통계.json'
import TrafficInfo from './TrafficInfo'

export default function Traffic() {
    // 전체데이터
    const [tdata, setTdata] = useState([]);

    // 대분류데이터
    const [c1, setC1] = useState([]);
    const [selC1, setSelC1] = useState();

    // 중분류데이터
    const [c2, setC2] = useState([]);
    const [selC2, setSelC2] = useState();

    // 사고데이터
    const [tinfo, setTinfo] = useState([]);

    // API 불러오기
    const getFetchData = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        console.log(apiKey)
        let baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&'
        let url = `${baseUrl}serviceKey=${apiKey}`;
        
        const resp = await fetch(url);
        const data = await resp.json();
        const trafficData = data.data;
        console.log(data);
        setTdata(trafficData);
    }

    //JSON 불러오기
    useEffect(() => {
        getFetchData();
    }, []);

    // 대분류 추출
    useEffect(() => {
        if (tdata.length === 0) return;

        let tm = tdata.map(item => item["사고유형대분류"]);
        tm = [...new Set(tm)];
        setC1(tm);
    }, [tdata]);

    // 중분류 추출
    useEffect(() => {
        if (!selC1) return;

        let tm = tdata
            .filter(item => item["사고유형대분류"] === selC1)
            .map(item => item["사고유형"]);

        tm = [...new Set(tm)];
        setC2(tm);
        setSelC2(null);   // 이전 선택 초기화
        setTinfo([]);     // 사고정보 초기화
    }, [selC1]);

    // 선택된 사고 자료
    useEffect(() => {
        if (!selC1 || !selC2) return;

        let tm = tdata.filter(
            item =>
                item["사고유형대분류"] === selC1 &&
                item["사고유형"] === selC2
        );
        setTinfo(tm);
    }, [selC2]);

    return (
        <div className='w-full flex flex-col justify-start items-center mt-10'>
            {c1.length > 0 &&
                <TrafficNav title="대분류" category={c1} selectC={selC1} setSelC={setSelC1} />
            }
            {c2.length > 0 &&
                <TrafficNav title="사고유형" category={c2} selectC={selC2} setSelC={setSelC2} />
            }
            {tinfo.length > 0 &&
                tinfo.map((item) => (
                    <TrafficInfo key={["사고유형"]} infoData={item} />
                ))
            }
        </div>
    );
}
