import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Css from './pages/About-Css'

function App() {

  return (
    <>
      <body>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Css' element=<Css />} />
          </Routes>
        </main>
        <Footer/>
      </body>
    </>
  )
}

export default App
