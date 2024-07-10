import Aos from "aos"
import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/NavBar/NavBar"
import ProgramsSection from "./components/ProgramsSection/ProgramsSection"
import StartJourneySection from "./components/StartJourneySection/StartJourneySection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import bg from "./images/bg.webp"
import "aos/dist/aos.css";


function App() {
  Aos.init({
    easing: "ease-in-out",
  })
  return (
    <div
      className="overflow-x-hidden bg-one"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <NavBar />
      <HeroSection />
      <ProgramsSection />
      <StartJourneySection />
      <TestimonialsSection />
    </div>
  )
}

export default App
