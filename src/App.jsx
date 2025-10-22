import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MyClock from './02/Clock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'
import MyToggle from './05/MyToggle'
import Lotto from './06/Lotto'
import FoodMain from './07/FoodMain'
// import MyEffect from './08/myEffect'
import BoxOffice from './09/BoxOffice'


function App() {

  return (
      <div className='w-full h-screen flex flex-col overflow-hidden'>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto h-fu'>
          <BoxOffice />
        </main>
        <Footer />
      </div>
  )
}

export default App
