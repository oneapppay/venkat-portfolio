import { profile } from "../data/content"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          {profile.initials} · {profile.name}
        </p>
        <p>{profile.organization}</p>
      </div>
    </footer>
  )
}
