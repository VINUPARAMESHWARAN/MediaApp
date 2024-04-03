import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import LandingPages from './Pages/LandingPages'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPages/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<WatchHistory/>}/>
      <Route/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
