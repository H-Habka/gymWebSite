import bg from "./images/bg.webp"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import "aos/dist/aos.css"
import Aos from "aos"
import Loader from "./components/Loader"

const OfficialDocs = lazy(() => import("./components/official-docs"))
const SoftwareExperience = lazy(() => import("./components/softwareExperience"))
const CompaniesIworkedWith = lazy(() =>
  import("./components/CompaniesIworkedWith")
)
const PDFPreviewPage = lazy(() =>
  import("./components/official-docs/PDFPreviewPage")
)
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"))
const AboutMeSection = lazy(() => import("./components/AboutMeSection/index"))
const LatestWork = lazy(() => import("./components/latestWork/index"))
const NavBar = lazy(() => import("./components/NavBar/NavBar"))
const GetInTouchSection = lazy(() => import("./components/GetInTouchSection"))

function App() {
  Aos.init({
    easing: "ease-in-out",
  })
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div
          className="bg-one"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <Routes>
            <Route
              path="/"
              Component={() => (
                <>
                  {/* <NavBar /> */}
                  <HeroSection />
                  <AboutMeSection />
                  <SoftwareExperience />
                  <LatestWork />
                  <CompaniesIworkedWith />
                  <GetInTouchSection />
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
