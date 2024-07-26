import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/NavBar/NavBar"
import OfficialDocs from "./components/official-docs"
import bg from "./images/bg.webp"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PDFPreviewPage from "./components/official-docs/PDFPreviewPage"

function App() {
  return (
    <Router>
      <div
        className="overflow-x-hidden bg-one"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Routes>
          <Route
            path="/"
            Component={() => (
              <>
                <NavBar />
                <HeroSection />
                {/* <ProgramsSection />
                <StartJourneySection />
                <TestimonialsSection /> */}
              </>
            )}
          />
          <Route
            path="/official-docs"
            Component={() => (
              <>
                <NavBar />
                <OfficialDocs />
              </>
            )}
          />
          <Route
            path="/preview/:fileName"
            Component={() => <PDFPreviewPage />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
