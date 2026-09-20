import { competencies } from "../data/content"
import { competencyIcons } from "./Icons"
import { SectionTitle } from "./SectionTitle"

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <SectionTitle id="services-title" lead="Core" accent="Competencies" />
          <p>
            Platform work across cloud infrastructure, Kubernetes, CI/CD, and operations.
          </p>
        </div>
        <div className="competency-grid">
          {competencies.map((item, index) => {
            const Icon = competencyIcons[index]
            return (
              <article className="glass competency-card" key={item.title}>
                <span className="icon-box lg">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="dot-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
