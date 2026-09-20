const WORKSPACE = "venkat-yanapothula-portfolio"
const COUNTER = "site-visits"
const SESSION_KEY = "venkat-portfolio-visit-counted"
const COUNTER_API = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER}`
const ABACUS_API = "https://abacus.jasoncameron.dev"
const OWNER_EMAIL = "ops.venkat@gmail.com"

export function isLiveHost() {
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

export async function fetchVisitCount(increment: boolean) {
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

async function visitorPlace() {
  try {
    const response = await fetch("https://ipwho.is/")
    const data = (await response.json()) as {
      success?: boolean
      city?: string
      country?: string
    }
    if (!data.success) {
      return "Unknown location"
    }
    return [data.city, data.country].filter(Boolean).join(", ") || "Unknown location"
  } catch {
    return "Unknown location"
  }
}

async function notifyOwner(place: string) {
  const body = {
    _subject: "Portfolio visit",
    _template: "table",
    _captcha: "false",
    visitor: place,
    when: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || "direct",
    browser: navigator.userAgent,
  }

  await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  })
}

export async function recordPublicVisit() {
  const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1"
  const increment = isLiveHost() && !alreadyCounted
  const count = await fetchVisitCount(increment)

  if (increment) {
    sessionStorage.setItem(SESSION_KEY, "1")
    const place = await visitorPlace()
    try {
      await notifyOwner(place)
    } catch {
      // Counting still succeeds if the private notice cannot be sent.
    }
  }

  return count
}
