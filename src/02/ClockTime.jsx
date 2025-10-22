import { useState, useEffect } from "react"

export default function ClockTime() {
  const[currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    let timerid = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timerid)
  },[])
  return (
    <div className="text-center font-bold  bg-amber-100 
                    text-blue-600 p-5 m-5 rounded-2xl">
        <span>현재시각 : </span>
        <span> {currentTime.toLocaleTimeString()}</span>
    </div>
  )
}
