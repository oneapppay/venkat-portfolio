import { useEffect } from "react"
import { recordPublicVisit } from "../lib/visits"

export function VisitBeacon() {
  useEffect(() => {
    void recordPublicVisit().catch(() => undefined)
  }, [])

  return null
}
