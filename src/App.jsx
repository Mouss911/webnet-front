import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import NewArrivals from './components/NewArrivals'
import Collections from './components/Collections'
import Brands from './components/Brands'
import Customs from './components/Customs'
import SectionCards from './components/SectionsCards'
import Footer from './components/Footer'
import Category from './components/Category'
import DetailPage from './components/DetailPage'

function App() {
  return (
    <div className="pt-[88px]">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroBanner />
            <NewArrivals />
            <Collections />
            <Brands />
            <Customs />
            <SectionCards />
            {/* <DetailPage /> */}
          </>
        } />
        <Route path="/products" element={<Category />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
