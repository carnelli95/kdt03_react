import TailButton from '../component/TailButton'

export default function TrafficNav({title, category, selectC, setSelC}) {
  return (
    <div className='w-full h-24 flex justify-between items-center py-2 px-4'>
      <div className='text-xl font-bold'>
        교통사고{title}
      </div>
      <div className='flex justify-end'>
        {
          category.map(item => <TailButton key={item}
                                            color="blue"
                                            caption={item}
                                            onHandle={() => setSelC(item)}
                                            />)
        }
      </div>
    </div>
  )
}
