import { projects } from "../data/content"
import { IconCalendar, projectIcons } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function Projects() {
  return (
    <section className="section section-accent" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle id="projects-title" lead="Enterprise" accent="Solutions" />
          <p>
            Leading complex enterprise projects across financial services and fintech domains.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = projectIcons[index]
            return (
              <article className="glass project-card" key={project.name}>
                <span className="icon-box lg">
                  <Icon width={32} height={32} />
                </span>
                <h3>{project.name}</h3>
                <p className="company-line">{project.company}</p>
                <p className="timeline-meta">
                  <IconCalendar width={14} height={14} /> {project.period}
                </p>
                {project.summaries.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="kicker-label">Key Achievements:</p>
                <ul className="dot-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
