import './index.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import FinanceCards from './components/FinanceCards'

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroCarousel />
      <FinanceCards />
    </div>
  )
}

export default App
