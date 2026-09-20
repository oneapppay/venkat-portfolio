import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { OwnerVisits } from "./components/OwnerVisits"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { VisitBeacon } from "./components/VisitBeacon"

function isOwnerHash() {
  return window.location.hash === "#owner-visitors"
}

export default function App() {
  const [ownerView, setOwnerView] = useState(isOwnerHash)

  useEffect(() => {
    const sync = () => setOwnerView(isOwnerHash())
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <VisitBeacon />
      {ownerView ? <OwnerVisits /> : null}
      <Footer />
    </>
  )
}
