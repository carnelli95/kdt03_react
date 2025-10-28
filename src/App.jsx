import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MyClock from './02/Clock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'
import MyToggle from './05/MyToggle'
import Lotto from './06/Lotto'
import FoodMain from './07/FoodMain'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import RefCal from './12/RefCal'
import Gallery from './13/Gallery'



function App() {

  return (
      <div className='w-full h-screen flex flex-col overflow-hidden'>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto h-fu'>
          <Gallery />
        </main>
        <Footer />
      </div>
  )
}

export default App
