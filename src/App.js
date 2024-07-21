import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/NavBar/NavBar"
import ProgramsSection from "./components/ProgramsSection/ProgramsSection"
import StartJourneySection from "./components/StartJourneySection/StartJourneySection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import bg from "./images/bg.webp"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div
        className="overflow-x-hidden bg-one"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            Component={() => (
              <>
                <HeroSection />
                <ProgramsSection />
                <StartJourneySection />
                <TestimonialsSection />
              </>
            )}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
