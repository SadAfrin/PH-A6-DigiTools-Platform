import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import StatsSection from "./components/StatsSection";
import './App.css'
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main>
          <Banner />
          <StatsSection />
          <ProductSection />

        </main>
      </div>
      
      
      
    </>
  )
}

export default App
