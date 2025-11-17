import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Festival from './14/Festival'
import RouteMain from './15/RouteMain'
import FestivalContents from './14/FestivalContents'
import ChargerInfo from './16/ChargerInfo'
import ChargerDetail from './16/ChargerDetail'
// import JotaiCnt from './17/JotaiCnt'
import TodoList from './18_3/TodoList'
import Subway from './19/Subway'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="container mx-auto flex flex-col flex-grow overflow-y-auto h-fu">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/MyClock" element={<MyClock />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/BoxOffice" element={<BoxOffice />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Festival" element={<Festival />} />
            <Route path="/Festival/Contents" element={<FestivalContents />} />
            <Route path="/ChargerInfo" element={<ChargerInfo />} />
            <Route path="/ChargerInfo/detail" element={<ChargerDetail />} />
            {/* <Route path="/JotaiCnt" element={<JotaiCnt />} /> */}
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/Subway" element={<Subway />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
