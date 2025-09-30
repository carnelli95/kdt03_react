

export default function ClockTime() {
  return (
    <div className="text-center font-bold  bg-amber-100 
                    text-blue-600 p-5 m-5 rounded-2xl">
        <span>현재시각 : </span>
        <span> {new Date().toLocaleTimeString()}</span>
    </div>
  )
}
