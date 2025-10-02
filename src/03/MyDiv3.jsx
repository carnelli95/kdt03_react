

export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-9/10 h-9/10 p-10 
                       bg-amber-700 text-2xl font-bold
                       flex flex-col justify-start items-start">
           <h1>{d1} &gt; {d2} &gt; {d3}</h1>
    </div>
  )
}
