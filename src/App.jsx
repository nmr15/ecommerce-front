import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart, Home, Login, ProductDetails, Profile, Register, Shop, Dashboard, ProductListAdmin} from './pages/importPages'
import { Footer, Navbar, Sidebar, ProductCardHome, ProductSlider, Button } from './components/importComponents'
// import './App.scss'

function App() 
{
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
