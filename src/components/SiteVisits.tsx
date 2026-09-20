import { useEffect, useState } from "react"
import { IconEye } from "./Icons"
import { recordPublicVisit } from "../lib/visits"

export function SiteVisits() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    void recordPublicVisit()
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
  }, [])

  return (
    <section className="visits" aria-label="Site visits">
      <div className="container visits-inner">
        <p className="visits-label">
          <IconEye width={18} height={18} />
          Site Visits
        </p>
        <p className="visits-count" aria-live="polite">
          {count === null ? "—" : count.toLocaleString("en-US")}
        </p>
        <p className="visits-note">Thank you for visiting! Your visit has been counted.</p>
      </div>
    </section>
  )
}
