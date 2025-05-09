import { useState } from 'react'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import NewArrivals from './components/NewArrivals'
import Collections from './components/Collections'
import Brands from './components/Brands'
import Customs from './components/Customs'
import SectionCards from './components/SectionsCards'
import Footer from './components/Footer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <h1 class="text-3xl font-bold underline">
    //     Hello world!
    //   </h1>
    // </>
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <NewArrivals />
      <Collections />
      <Brands />
      <Customs />
      <SectionCards />
      <Footer />
      
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App
