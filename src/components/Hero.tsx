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

const TYPE_MS = 48
const DELETE_MS = 32
const HOLD_MS = 1600

export function Hero() {
  const [text, setText] = useState("")

  useEffect(() => {
    let cancelled = false
    let index = 0
    let deleting = false
    let currentText = ""
    let holdUntil = 0
    let leftover = 0
    let last = performance.now()
    let frame = 0

    const tick = (now: number) => {
      if (cancelled) {
        return
      }

      if (typeof document !== "undefined" && document.hidden) {
        last = now
        leftover = 0
        frame = window.requestAnimationFrame(tick)
        return
      }

      leftover += Math.min(now - last, 240)
      last = now

      const current = expertiseTopics[index]

      if (holdUntil > now) {
        frame = window.requestAnimationFrame(tick)
        return
      }

      const step = deleting ? DELETE_MS : TYPE_MS
      while (leftover >= step) {
        leftover -= step

        if (!deleting) {
          if (currentText !== current) {
            currentText = current.slice(0, currentText.length + 1)
            setText(currentText)
            if (currentText === current) {
              holdUntil = now + HOLD_MS
              deleting = true
              leftover = 0
              break
            }
          }
        } else if (currentText) {
          currentText = currentText.slice(0, -1)
          setText(currentText)
        } else {
          deleting = false
          index = (index + 1) % expertiseTopics.length
          leftover = 0
          break
        }
      }

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    const onVisible = () => {
      last = performance.now()
      leftover = 0
    }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      document.removeEventListener("visibilitychange", onVisible)
    }
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
