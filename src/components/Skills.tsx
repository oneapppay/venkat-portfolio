import { focusAreas, skillCategories } from "../data/content"
import { skillIcons } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle id="skills-title" lead="Technical" accent="Expertise" />
          <p>
            Cloud, Kubernetes, CI/CD, and platform operations from 12+ years of
            hands-on DevOps work.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = skillIcons[index]
            return (
              <article
                className={`glass skill-card${category.featured ? " featured" : ""}`}
                key={category.id}
              >
                <span className="icon-box lg">
                  <Icon />
                </span>
                <div className="badge-row">
                  <h3>{category.title}</h3>
                  {category.featured ? <span className="featured-badge">Featured</span> : null}
                </div>
                <div className="skill-bars">
                  {category.skills.map((skill) => (
                    <div className="skill-bar" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
        <div className="glass focus-panel">
          <h3>Current Focus Areas</h3>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <span className="focus-mark">{area.kicker}</span>
                <strong>{area.title}</strong>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
