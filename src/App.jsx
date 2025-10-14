import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProductView from './Pages/ProductView'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import ContactUs from './Pages/ContactUs'
import LogIn from './Pages/LogIn'
import MobileVerification from './Pages/MobileVerification'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
        <Route path='/productview' element={<ProductView />} />
        <Route path='/productdetailspage' element={<ProductDetailsPage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/mobileverification' element={<MobileVerification />} />
      </Routes>
      <div className='mt-10'>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
