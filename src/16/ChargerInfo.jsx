import React, { useEffect, useRef, useState } from 'react';
import zcode from './data/zcode.json';
import zscode from './data/zscode.json';
import kind from './data/kind.json';
import kinddetail from './data/kinddetail.json';
import stat from './data/stat.json'
import TailSelect from '../component/TailSelect';
import TailButton from '../component/TailButton';
import ChargerCard from "./ChargerCard"
import ChargerStat from "./ChargerStat"
import { Link } from "react-router-dom"

export default function ChargeInfo() {
  const [zsc, setZsc] = useState();       
  const [kindData, setKindData] = useState();
  const [tdata, setTdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  

  const sel1Ref = useRef();
  const sel2Ref = useRef();
  const sel3Ref = useRef();
  const sel4Ref = useRef();

  const getFetchData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = 
        `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?` +
        `serviceKey=${apiKey}` +
        `&pageNo=1&numOfRows=100&` +
        `zcode=${sel1Ref.current.value}` + 
        `&zscode=${sel2Ref.current.value}` +
        `&kind=${sel3Ref.current.value}`  +
        `&kinddetail=${sel4Ref.current.value}` +
        `&dataType=JSON`;

        setIsLoading(true)
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data)
        setTdata(data.items.item);
        setIsLoading(false) ;
    console.log("요청 URL:", url);
  }
    

   

  //시도 선택
  const handleZcode = () => {
    setZsc(null);
    setTdata([]);
    setIsLoading(false);

    if (sel1Ref.current.value == "")
      setZsc(null);
    else
      setZsc(zscode[sel1Ref.current.value]);
  }

  //충전소 구분
  const handleKind = () => {
    setKindData(null);
    setTdata([]);
    setIsLoading(false);

    console.log(sel3Ref.current.value, kinddetail[sel3Ref.current.value])
    if (sel3Ref.current.value == "")
      setKindData(null);
    else
      setKindData(kinddetail[sel3Ref.current.value]);
  }

  const handleCancel = () => {
    sel1Ref.current.value = "";
    sel2Ref.current.value = "";
    sel3Ref.current.value = "";
    sel4Ref.current.value = "";

    setZsc(null);
    setKindData(null);
    setTdata([]);
    setIsLoading(false);
  }

  const handleSearch = async () => {

    if (sel1Ref.current.value == "") {
      alert("시도를 선택하세요.");
      sel1Ref.current.focus();
      return;
    }

    if (sel2Ref.current.value == "") {
      alert("지역동을 선택하세요.");
      sel2Ref.current.focus();
      return;
    }

    if (sel3Ref.current.value == "") {
      alert("충전소 구분을 선택하세요.");
      sel3Ref.current.focus();
      return;
    }

    if (sel4Ref.current.value == "") {
      alert("충전소 상세를 선택하세요.");
      sel4Ref.current.focus();
      return;
    }

    setTdata([]);
    setIsLoading(false);
    getFetchData();
  };


  // fetch가 완료되면
  useEffect(() => {
    if (tdata.length == 0) return;

    console.log(tdata)
  },[tdata])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold p-5 mb-4 text-left">
        전기차 충전소 정보
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <TailSelect id="sel1"
                    ref={sel1Ref}
                    title="시도"
                    opk={Object.keys(zcode)}
                    opv={Object.values(zcode)}
                    onHandle={handleZcode}
        />

        <TailSelect id="sel2"
                    ref={sel2Ref}
                    title="지역동"
                    opk={zsc ? Object.values(zsc) : []}
                    opv={zsc ? Object.keys(zsc) : []}
        />

        <TailSelect id="sel3"
                    ref={sel3Ref}
                    title="충전소 구분"
                    opk={Object.keys(kind)}
                    opv={Object.values(kind)}
                    onHandle={handleKind}
        />

        <TailSelect id="sel4"
                    ref={sel4Ref}
                    title="충전소 상세"
                    opk={kindData ? Object.values(kindData) : []}
                    opv={kindData ? Object.keys(kindData) : []}
        />

       <TailButton caption="검색" color="blue" onHandle={handleSearch} />
       <TailButton caption="취소" color="orange" onHandle={handleCancel} />

      </div>
     
      {isLoading && (
        <p className="w-full text-2xl text-blue-700 font-bold p-5 mb-4 text-center">
          로딩중
        </p>
      )}

      {tdata.length > 0 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-5">
          {tdata.map((item, idx) => (
            <Link
              key={item.statId + idx}
              to="/ChargerInfo/detail"
              state={{ item }}
            >
              <ChargerStat statNm={`${item.statNm}(${item.chgerId})`} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
