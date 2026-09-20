import {
  aboutHighlights,
  achievements,
  education,
  profile,
} from "../data/content"
import { aboutIcons, achievementIcons } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle
            id="about-title"
            lead={`About ${profile.firstName}`}
            accent={profile.lastName}
          />
          <p>
            DevOps Lead Engineer focused on AWS, Azure, Terraform, Kubernetes,
            and enterprise platform operations.
          </p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <h3>Building platforms that stay calm in production.</h3>
            <p>{profile.about}</p>
            <p>
              The through-line across banking, public health, and large engineering
              organizations is the same: make environments repeatable, make
              releases boring, and give operators a clear signal when something drifts.
            </p>
            <div className="highlight-grid">
              {aboutHighlights.map((item, index) => {
                const Icon = aboutIcons[index]
                return (
                  <article className="glass highlight-card" key={item.title}>
                    <span className="icon-box">
                      <Icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
          <aside className="about-side">
            <div className="glass panel-block">
              <h3 className="accent-text">Key Achievements</h3>
              <div className="achieve-grid">
                {achievements.map((item, index) => {
                  const Icon = achievementIcons[index]
                  return (
                    <article className="achieve-card" key={item.label}>
                      <span className="icon-box">
                        <Icon />
                      </span>
                      <strong>{item.metric}</strong>
                      <span>{item.label}</span>
                    </article>
                  )
                })}
              </div>
            </div>
            <div className="glass panel-block">
              <h3 className="accent-text">Education</h3>
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-row" key={`${item.credential}-${item.year}`}>
                    <span className="icon-box">{item.credential.charAt(0)}</span>
                    <div>
                      <h3>{item.credential}</h3>
                      <p>{item.school}</p>
                      <p>
                        {item.year}
                        <span className="score"> · {item.score}</span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
