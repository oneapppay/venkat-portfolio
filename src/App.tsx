import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { SiteVisits } from "./components/SiteVisits"
import { Skills } from "./components/Skills"

export default function App() {
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
      <SiteVisits />
      <Footer />
    </>
  )
}
