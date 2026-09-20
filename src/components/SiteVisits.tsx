import { useEffect, useState } from "react"
import { IconEye } from "./Icons"

const WORKSPACE = "venkat-yanapothula-portfolio"
const COUNTER = "site-visits"
const SESSION_KEY = "venkat-portfolio-visit-counted"
const COUNTER_API = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}`
const ABACUS_API = `https://abacus.jasoncameron.dev`

function isLiveHost() {
  const host = window.location.hostname
  return host !== "localhost" && host !== "127.0.0.1"
}

function parseCount(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") {
    return null
  }
  const record = payload as Record<string, unknown>
  const nested =
    record.data && typeof record.data === "object"
      ? (record.data as Record<string, unknown>)
      : record
  const value = nested.value ?? nested.count ?? nested.up_count
  const count = Number(value)
  return Number.isFinite(count) ? count : null
}

async function readJson(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Counter request failed: ${response.status}`)
  }
  return response.json() as Promise<unknown>
}

async function fetchCount(increment: boolean) {
  try {
    const data = await readJson(increment ? `${COUNTER_API}/up` : COUNTER_API)
    const count = parseCount(data)
    if (count !== null) {
      return count
    }
  } catch {
    // Fall through to the public Abacus counter.
  }

  const data = await readJson(
    increment
      ? `${ABACUS_API}/hit/${WORKSPACE}/${COUNTER}`
      : `${ABACUS_API}/get/${WORKSPACE}/${COUNTER}`,
  )
  const count = parseCount(data)
  if (count === null) {
    throw new Error("Visit count was missing from the response")
  }
  return count
}

export function SiteVisits() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      const live = isLiveHost()
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1"
      const increment = live && !alreadyCounted

      try {
        const nextCount = await fetchCount(increment)
        if (cancelled) {
          return
        }
        if (increment) {
          sessionStorage.setItem(SESSION_KEY, "1")
        }
        setCount(nextCount)
      } catch {
        if (!cancelled) {
          setCount(null)
        }
      }
    }

    void run()
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
