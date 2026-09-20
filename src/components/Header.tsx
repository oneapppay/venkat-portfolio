import { useEffect, useState } from "react"
import { navLinks, profile } from "../data/content"
import { IconClose, IconMenu } from "./Icons"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header className={scrolled ? "header is-scrolled" : "header"}>
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          {profile.firstName}
          <small>{profile.lastName}</small>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
        <nav id="site-nav" className={open ? "nav is-open" : "nav"} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={`#${link.href}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
