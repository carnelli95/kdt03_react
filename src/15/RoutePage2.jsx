import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function RoutePage2() {
  const [sParms] = useSearchParams();
  
  
  return (
    <div>
      RoutePage2 {sParms.get("item1")}{sParms.get("item2")}{sParms.get("item3")}
    </div>
  )
}
