import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Css from './pages/About-Css'
import Html5 from './pages/About-Html5'
import JScrip from './pages/About-JScrip'
import Nodejs from './pages/About-Nodejs'
import React from './pages/About-React'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Css' element={<Css />} />
            <Route path='/Html5' element={<Html5 />} />
            <Route path='/JScrip' element={<JScrip />} />
            <Route path='/Nodejs' element={<Nodejs />} />
            <Route path='/React' element={<React />} />
          </Routes>
        </main>
        <Footer />

    </>
  )
}

export default App
