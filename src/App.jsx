import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
      </div>
      
      <main>
        <div className="min-h-screen bg-white text-black">
          <Banner />
        </div>

      </main>
      
    </>
  )
}

export default App
