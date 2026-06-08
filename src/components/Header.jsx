import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="left">
          <a className="logo" href="#" aria-label="Amira">
            <span className="logo-mark">A</span>
            <span className="logo-text">Amira</span>
          </a>
        </div>

        <button id="menuToggle" className="menu-toggle" aria-label="Toggle navigation">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <nav className="main-nav" id="mainNav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a className="mobile-only" href="CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
        </nav>

        <div className="right">
          <a className="btn small outline" href="CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
          <a className="btn small dark" href="#contact">Let's Talk</a>
        </div>
      </div>
    </header>
  )
}
