import './App.css'
import LandingNav from './components/landingNav.jsx'
import Hero from './components/hero.jsx'
import InfoBar from './components/infoBar.jsx'

function App() {

  return (
    <>
      <div className="flex justify-center mt-30">
        <LandingNav />
      </div>

      <div className="flex justify-center">
        <Hero/>
      </div>
      
      <div className="flex justify-center primaryBgColor">
        <InfoBar/>
      </div>
    </>
  )
}

export default App
