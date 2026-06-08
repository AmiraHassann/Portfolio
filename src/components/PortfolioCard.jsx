import React from 'react'

export default function PortfolioCard({ project }) {
  return (
    <article className="pf-card" data-category={project.category}>
      <a className="pf-link" href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="pf-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="pf-content">
          <p className="pf-category">{project.tag}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="pf-meta">
            {project.meta?.map((m, i) => (
              <span className="meta-item" key={i}><i className={m.icon}></i> {m.text}</span>
            ))}
          </div>
        </div>
      </a>
    </article>
  )
}
