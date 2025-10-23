import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <body>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer/>
      </body>
    </>
  )
}

export default App
