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
  const [text, setText] = useState(expertiseTopics[0].slice(0, 1))

  useEffect(() => {
    let topic = 0
    let pos = 1
    let mode: "type" | "hold" | "delete" = "type"
    let holdTicks = 0
    setText(expertiseTopics[0].slice(0, 1))

    const step = () => {
      const current = expertiseTopics[topic]

      if (mode === "type") {
        pos = Math.min(current.length, pos + 1)
        setText(current.slice(0, pos))
        if (pos >= current.length) {
          mode = "hold"
          holdTicks = 0
        }
        return
      }

      if (mode === "hold") {
        holdTicks += 1
        if (holdTicks >= 18) {
          mode = "delete"
        }
        return
      }

      pos = Math.max(0, pos - 1)
      setText(current.slice(0, pos))
      if (pos === 0) {
        topic = (topic + 1) % expertiseTopics.length
        mode = "type"
      }
    }

    const timer = window.setInterval(step, 90)
    return () => window.clearInterval(timer)
  }, [])

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
            <span className="expertise-typed">
              {text}
              <span className="cursor">|</span>
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
