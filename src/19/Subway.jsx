import React, { useEffect, useState, Suspense } from 'react';
import SubwayBox from './SubwayBox';
import sarea from './sarea.json';
import TailSelect from '../component/TailSelect';

export default function Subway() {
  const [tdata, setTdata] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [loading, setLoading] = useState(false);

  const getFetchData = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;

      const url = `/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?` +
                  `serviceKey=${apiKey}&pageNo=1&numOfRows=5&resultType=json&` +
                  `controlnumber=20251113&areaIndex=${selectedStation}`;

      const resp = await fetch(url);
      if (!resp.ok) throw new Error('Network response was not ok');

      const data = await resp.json();
      const tm = (data.response?.body?.items?.item || []).sort(
        (a, b) => a.controlnumber - b.controlnumber
      );
      setTdata(tm);
    } catch (err) {
      console.error('Fetch error:', err);
      setTdata([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedStation) getFetchData();
  }, [selectedStation]);

  return (
    <div className="w-9/10 flex flex-col justify-start">
      <div className="flex justify-center items-center">
        <h1 className="m-5 p-5 text-xl font-bold">부산 실내공기질 정보</h1>
        <div className="flex flex-col m-5 p-5">
          <TailSelect
            id="stationSelect"
            title="부산지하철역 선택"
            opk={sarea.map((item) => item.코드)}
            opv={sarea.map((item) => item.측정소)}
            onHandle={(e) => setSelectedStation(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500"></div>
      ) : tdata.length > 0 ? (
        tdata.map((item, idx) => <SubwayBox key={idx} item={item} />)
      ) : (
        <div className="text-center text-gray-500"></div>
      )}
    </div>
  );
}
