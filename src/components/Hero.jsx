import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><i className="fas fa-star"></i> Frontend Developer & Designer</span>
          <h1>Hi, I'm <span className="name">Amira Abdelhafeez</span></h1>
          <p className="hero-lead">I create beautiful, intuitive digital experiences that blend creativity with functionality. Let's build something extraordinary together.</p>
          <div className="hero-ctas">
            <a className="btn dark" href="#contact">
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              Get in Touch
            </a>
            <a className="btn outline" href="#portfolio">
              <i className="fas fa-briefcase" style={{ marginRight: '0.5rem' }}></i>
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-graphic">
            <img src="img/Profile.jpeg" alt="Amira Abdelhafeez - Frontend Developer" />
          </div>
        </div>
      </div>
    </section>
  )
}
