import { type FormEvent, useState } from "react"
import { contactTiles, profile } from "../data/content"
import { contactIcons, IconSend } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const openMail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `${profile.emailHref}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle id="contact-title" lead="Get In" accent="Touch" />
          <p>
            Ready to talk about platform work, cloud delivery, or a new engagement?
            Use a working link or open email from the form.
          </p>
        </div>
        <div className="contact-layout">
          <div className="contact-info">
            {contactTiles.map((tile, index) => {
              const Icon = contactIcons[index]
              const inner = (
                <>
                  <span className={`icon-box lg contact-box ${tile.id}`}>
                    <Icon width={20} height={20} />
                  </span>
                  <span>
                    <span>{tile.label}</span>
                    <strong>{tile.value}</strong>
                  </span>
                </>
              )
              if (!tile.href) {
                return (
                  <div className="glass contact-row" key={tile.id}>
                    {inner}
                  </div>
                )
              }
              const external = tile.href.startsWith("http")
              return (
                <a
                  className="glass contact-row"
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
          <form className="glass form-card" onSubmit={openMail}>
            <h3>Send Message</h3>
            <p className="form-note">
              This opens your email client addressed to {profile.email}. Nothing is sent until you
              send it from there.
            </p>
            <label className="field">
              <span>Name</span>
              <input
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                autoComplete="name"
                placeholder="Your Name"
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                placeholder="your.email@example.com"
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                placeholder="Your message..."
              />
            </label>
            <button className="button button-primary button-block" type="submit">
              <IconSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
