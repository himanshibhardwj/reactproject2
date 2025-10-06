import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
      </Routes>
      <div className='mt-10'>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
