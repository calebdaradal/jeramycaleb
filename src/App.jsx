import './App.css'
import LandingNav from './components/landingNav.jsx'
import Hero from './components/hero.jsx'
import InfoBar from './components/infoBar.jsx'
import Skills from './components/skills.jsx'
import Experience from './components/experience.jsx'
import Contact from './components/contact.jsx'

function App() {

  return (
    <>
    <div className="min-h-screen w-full">
      <div className="h-screen hidden md:block">
        <div className="flex justify-center pt-30 hidden lg:flex">
        <LandingNav />
        </div>

        <div className="flex justify-center hidden lg:flex ">
          <Hero/>
        </div>
      </div>
      
      
      <div className="flex justify-center primaryBgColor">
        <InfoBar/>
      </div>

      <div className="flex justify-center mt-0 sm:mt-10 md-10 w-full">
        <Skills/>
      </div>

      <div className="flex justify-center mt-10 md-10 overflow-hidden">
        <Experience/>
      </div>

      <div className="flex justify-center pt-10 md-10">
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default App
