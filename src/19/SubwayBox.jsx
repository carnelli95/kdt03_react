import React from 'react';
import scode from './scode.json';

export default function SubwayBox({ item }) {
  return (
    <div className="w-full flex flex-col justify-start my-2 rounded-md p-2 ">
      <div className="w-full px-2 text-lime-800 font-bold mb-2">
        {item.office} {item.site} {item.city} (
        {item.controlnumber.slice(0, 4)}.
        {item.controlnumber.slice(4, 6)}.
        {item.controlnumber.slice(6, 8)} &nbsp;
        {item.controlnumber.slice(8, 10)}시)
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {Object.keys(scode).map((c, idx) => (
          <div key={c} className="w-full flex flex-col">
            <div
              className={`${idx === 0 ? 'bg-green-700' : 'bg-amber-700'} 
                        text-white p-2 font-bold text-sm flex flex-col justify-center rounded text-center`}>
              <div>{scode[c].name}</div>
              <div>({scode[c].unit})</div>
              <div className="w-fulltext-xs mt-1 bg-white text-black">{item[c]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
