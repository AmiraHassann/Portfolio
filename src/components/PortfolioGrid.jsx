import React, { useState } from 'react'
import PortfolioCard from './PortfolioCard'

const PROJECTS = [
  {
    id: 1,
    category: 'web',
    tag: 'OpenCart',
    title: 'Educational Platform',
    description: 'A comprehensive educational platform with intuitive content structure and fully responsive design. Built with OpenCart for seamless course management.',
    image: 'img/mawred.png',
    link: 'https://mawred-edu.com/',
    meta: [{ icon: 'fas fa-code', text: 'Web Design' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 2,
    category: 'wordpress',
    tag: 'WordPress',
    title: 'Alwatad Company',
    description: 'Professional corporate website showcasing services with clean, modern design. Built with WordPress, Elementor, and WooCommerce integration.',
    image: 'img/alwatad.png',
    link: 'https://alwatad.net/',
    meta: [{ icon: 'fas fa-wordpress', text: 'WordPress' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 3,
    category: 'web',
    tag: 'HTML & CSS',
    title: 'Business Landing Page',
    description: 'A responsive and modern landing page designed with clean UI principles. Features intuitive layout structure and contemporary styling.',
    image: 'img/business-landing.png',
    link: 'https://amirahassann.github.io/Business-Landing-Page/',
    meta: [{ icon: 'fas fa-code', text: 'Frontend' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 4,
    category: 'web',
    tag: 'Responsive Design',
    title: 'Books Landing Page',
    description: 'An elegant landing page for book promotion with responsive layout. Showcases clean UI design and modern styling best practices.',
    image: 'img/books.png',
    link: 'https://amirahassann.github.io/Books-Landing-page/',
    meta: [{ icon: 'fas fa-code', text: 'Web Design' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 5,
    category: 'frontend',
    tag: 'JavaScript',
    title: 'Water Intake Tracker',
    description: 'A functional hydration tracking application. Built with vanilla JavaScript featuring real-time calculations and persistent data storage.',
    image: 'img/water.png',
    link: 'https://amirahassann.github.io/Water-Tracker/',
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 6,
    category: 'frontend',
    tag: 'JavaScript',
    title: 'Event Countdown Timer',
    description: 'A responsive countdown timer application. Demonstrates JavaScript expertise with real-time updates and elegant UI presentation.',
    image: 'img/event.png',
    link: 'https://amirahassann.github.io/Event-Countdown/',
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 7,
    category: 'frontend',
    tag: 'JavaScript',
    title: 'Clinic Appointment Booking',
    description: 'A full-featured appointment booking system with double-booking prevention. Built with vanilla JavaScript showcasing advanced functionality.',
    image: 'img/clinic.png',
    link: 'https://amirahassann.github.io/Clinic-Appointment-Booking-System/',
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  },
  {
    id: 8,
    category: 'frontend',
    tag: 'FrontEnd',
    title: 'Restaurant Ordering System',
    description: 'A full-featured restaurant ordering system with real-time updates and seamless user experience. Built with vanilla JavaScript showcasing advanced functionality.',
    image: 'img/restaurant.png',
    link: 'https://amirahassann.github.io/Restaurant-Ordering-System/',
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }]
  }
]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('all')

  const filtered = PROJECTS.filter(p => filter === 'all' ? true : p.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <p className="section-sub">Explore my latest projects and case studies showcasing design excellence and technical implementation.</p>

        <div className="portfolio-filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web Design</button>
          <button className={`filter-btn ${filter === 'wordpress' ? 'active' : ''}`} onClick={() => setFilter('wordpress')}>WordPress</button>
          <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
        </div>

        <div className="portfolio-grid">
          {filtered.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
