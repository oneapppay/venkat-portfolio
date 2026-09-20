import { useEffect, useState } from "react"
import {
  contactTiles,
  expertiseTopics,
  highlightTiles,
  profile,
} from "../data/content"
import {
  contactIcons,
  IconArrowDown,
  IconCode,
  IconStar,
  IconUser,
  IconZap,
} from "./Icons"
import portrait from "../assets/portrait.png"

export function Hero() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState<string>(expertiseTopics[0])
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setText(expertiseTopics[0])
      return
    }

    const current = expertiseTopics[index]
    const delay = !deleting && text === current ? 1800 : deleting ? 28 : 42
    const timer = window.setTimeout(() => {
      if (!deleting && text !== current) {
        setText(current.slice(0, text.length + 1))
      } else if (deleting && text !== "") {
        setText(current.slice(0, text.length - 1))
      } else if (!deleting && text === current) {
        setDeleting(true)
      } else {
        setDeleting(false)
        setIndex((value) => (value + 1) % expertiseTopics.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, index, reduceMotion, text])

  return (
    <section id="home" aria-labelledby="hero-title">
      <div className="hero container">
        <div>
          <p className="eyebrow">
            <IconUser width={16} height={16} />
            {profile.title}
          </p>
          <h1 id="hero-title">
            <span className="name-line">{profile.firstName}</span>
            <span className="accent-text">{profile.lastName}</span>
          </h1>
          <p className="hero-org">{profile.organization}</p>
          <p className="glass expertise">
            <span className="expertise-label">Expertise in:</span>
            <span>
              {text}
              {reduceMotion ? null : <span className="cursor">|</span>}
            </span>
          </p>
          <p className="hero-copy">{profile.summary}</p>
          <div className="contact-tiles">
            {contactTiles.map((tile, tileIndex) => {
              const Icon = contactIcons[tileIndex]
              const inner = (
                <>
                  <span className={`contact-glyph ${tile.id}`}>
                    <Icon width={24} height={24} />
                  </span>
                  <span className="tile-copy">
                    <span>{tile.label}</span>
                    <strong>{tile.value}</strong>
                  </span>
                </>
              )
              if (!tile.href) {
                return (
                  <div className="glass contact-tile" key={tile.id}>
                    {inner}
                  </div>
                )
              }
              const external = tile.href.startsWith("http")
              return (
                <a
                  className="glass contact-tile"
                  key={tile.id}
                  href={tile.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  {inner}
                </a>
              )
            })}
          </div>
          <div className="stat-tiles">
            {highlightTiles.map((tile) => (
              <div className="glass stat-tile" key={tile.label}>
                <strong>{tile.metric}</strong>
                <span>{tile.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#skills">
              View Technical Skills
            </a>
            <a className="button button-ghost" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-card">
            <span className="float-icon star">
              <IconStar width={20} height={20} />
            </span>
            <span className="float-icon code">
              <IconCode width={20} height={20} />
            </span>
            <span className="float-icon zap">
              <IconZap width={20} height={20} />
            </span>
            <div className="portrait-blob">
              <img
                src={portrait}
                alt={`${profile.name}, ${profile.title}`}
                width={640}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-row">
        <a className="scroll-btn" href="#skills" aria-label="Scroll to skills">
          <IconArrowDown />
        </a>
      </div>
    </section>
  )
}
