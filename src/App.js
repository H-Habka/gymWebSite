import bg from "./images/bg.webp"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const OfficialDocs = lazy(() => import("./components/official-docs"))
const PDFPreviewPage = lazy(() =>
  import("./components/official-docs/PDFPreviewPage")
)
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"))
const NavBar = lazy(() => import("./components/NavBar/NavBar"))

function App() {
  return (
    <Suspense fallback="loading...">
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
    </Suspense>
  )
}

export default App
