export default function TailBall({n}) {

  const BALLCOLOR = [
    'bg-blue-300',
    'bg-red-300',
    'bg-orange-300',
    'bg-green-300',
    'bg-grey-300'
  ]

  return (
    <div  className={`w-20 h-20 rounded-full
                  text-xl font-bold
                  text-white ${BALLCOLOR[Math.floor(n / 10)]}
                  m-2
                  flex justify-center items-center`}>
      {n}
    </div>
  );
}
