import { experience } from "../data/content"
import { IconBuilding, IconPin } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle id="experience-title" lead="Professional Journey" />
          <p>12+ years of DevOps, cloud infrastructure, and enterprise platform operations.</p>
        </div>
        <div className="timeline-wrap">
          <ol className="timeline">
            {experience.map((item) => (
              <li className="timeline-item" key={item.org}>
                <article className="glass timeline-card">
                  <h3>
                    <span className="icon-box sm">
                      <IconBuilding width={16} height={16} />
                    </span>
                    {item.org}
                  </h3>
                  {item.context ? <p className="company-line">{item.context}</p> : null}
                  {item.place ? (
                    <p className="timeline-meta">
                      <IconPin width={14} height={14} /> {item.place}
                    </p>
                  ) : null}
                  <p>{item.summary}</p>
                  <p className="kicker-label">Key Achievements:</p>
                  <ul className="dot-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
