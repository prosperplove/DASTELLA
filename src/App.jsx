import React from 'react'
import MainSection from './Components/MainSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Pages/Footer'
import WhiteList from './Pages/WhiteList'
import Whitepaper from './Pages/Whitepaper'
import TokenUtility from './Pages/TokenUtility'

const App = () => {
  return (
     <Router>
    <div>
    
     <NavBar/>
      <Routes>
         <Route path='/' element={ <MainSection/>}></Route>
         <Route path='/WhiteList' element={<WhiteList/>}></Route>
         <Route path='/Whitepaper' element={<Whitepaper/>}></Route>
         <Route path='/TokenUtility' element={<TokenUtility/>}></Route>
      </Routes>
     <Footer/>
      </div>

     </Router>
  )
}

export default App
