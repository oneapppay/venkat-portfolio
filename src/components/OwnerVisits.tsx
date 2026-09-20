import { type FormEvent, useEffect, useState } from "react"
import { IconEye } from "./Icons"
import { fetchVisitCount } from "../lib/visits"

const OWNER_KEY = "venkat-portfolio-owner"
const OWNER_PIN_HASH =
  "d4489970cc4f5224da96d5f41421fccd27d176c819493c829dfe6a657409b19f"

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest("SHA-256", bytes)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

export function OwnerVisits() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(OWNER_KEY) === "1",
  )
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    if (!unlocked) {
      return
    }
    let cancelled = false
    void fetchVisitCount(false)
      .then((value) => {
        if (!cancelled) {
          setCount(value)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCount(null)
        }
      })
    return () => {
      cancelled = true
    }
  }, [unlocked])

  const unlock = async (event: FormEvent) => {
    event.preventDefault()
    const hash = await sha256(pin.trim())
    if (hash !== OWNER_PIN_HASH) {
      setError("That PIN does not match.")
      return
    }
    sessionStorage.setItem(OWNER_KEY, "1")
    setError("")
    setUnlocked(true)
  }

  if (!unlocked) {
    return (
      <section className="visits owner-visits" id="owner-visitors">
        <div className="container visits-inner">
          <p className="visits-label">
            <IconEye width={18} height={18} />
            Private visitor log
          </p>
          <form className="owner-gate" onSubmit={(event) => void unlock(event)}>
            <label className="field">
              <span>Owner PIN</span>
              <input
                type="password"
                value={pin}
                onChange={(event) => setPin(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            {error ? <p className="owner-error">{error}</p> : null}
            <button className="button button-primary" type="submit">
              View visits
            </button>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="visits owner-visits" id="owner-visitors">
      <div className="container visits-inner">
        <p className="visits-label">
          <IconEye width={18} height={18} />
          Site Visits
        </p>
        <p className="visits-count" aria-live="polite">
          {count === null ? "—" : count.toLocaleString("en-US")}
        </p>
        <p className="visits-note">
          Only you can see this page. A website cannot read a visitor&apos;s real
          name unless they sign in. Each new live visit is emailed only to{" "}
          <strong>ops.venkat@gmail.com</strong> with city, country, time, and
          browser — not a personal name.
        </p>
      </div>
    </section>
  )
}
