import React, { useState } from 'react'
import FoodCard from './FoodCard'
import fooddata from './fooddata.json'
import TailButton from '../component/TailButton'

// 카테고리 목록 만들기
const categories = [
  ...new Set(fooddata.map(item => item['운영주체 분류'].replace(' ', '')))
]

export default function FoodMain() {
  const [foodData] = useState(fooddata) // 원본 데이터
  const [foodFilterData, setFoodFilterData] = useState(fooddata) // 필터된 데이터

  // 전체 보기
  const handleShowAll = () => {
    console.log('전체 보기')
    setFoodFilterData(foodData)
  }

  // 카테고리별 보기
  const handleShowCategory = (category) => {
    console.log('선택된 카테고리:', category)
    const filtered = foodData.filter(
      item => item['운영주체 분류'].replace(' ', '') === category
    )
    setFoodFilterData(filtered)
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-10">
      {/* 버튼 영역 */}
      <div className="w-9/10 border border-blue-300 p-5 my-5 flex justify-center items-center gap-2">
        <TailButton color="lime" caption="전체" onHandle={handleShowAll} />
        {categories.map((item) => (
          <TailButton
            key={item}
            color="blue"
            caption={item}
            onHandle={() => handleShowCategory(item)}
          />
        ))}
      </div>

      {/* 카드 리스트 영역 */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {foodFilterData.map((item, idx) => (
          <FoodCard
            key={item['연락처(대표번호)'] + idx}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}
