import MyDiv2 from "./MyDiv2"
import MyDiv3 from "./MyDiv3"

export default function MyDiv1() {
  return (
    <div className="bg-green-900 w-60 h-60">
        <span className="text-white flex-row justify-center">div1</span>
        <MyDiv2 />
        <MyDiv3 />
    </div>
  )
}
