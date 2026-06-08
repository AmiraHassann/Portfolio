import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Ported behavior from original script.js
    const menuToggle = document.getElementById('menuToggle')
    const mainNav = document.getElementById('mainNav')
    const header = document.querySelector('.site-header')

    function handleDocClick(e) {
      if (!mainNav || !menuToggle) return
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('open')
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>'
      }
    }

    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open')
        menuToggle.innerHTML = mainNav.classList.contains('open')
          ? '<i class="fa fa-times"></i>'
          : '<i class="fa fa-bars"></i>'
      })

      mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mainNav.classList.remove('open')
          menuToggle.innerHTML = '<i class="fa fa-bars"></i>'
        })
      })

      document.addEventListener('click', handleDocClick)
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1)
        if (!targetId) return
        const target = document.getElementById(targetId)
        if (target && header) {
          e.preventDefault()
          const headerHeight = header.offsetHeight
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        }
      })
    })

    // Intersection observer animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Exclude .skill from the general reveal list so skill bars stay visible by default
    document.querySelectorAll('.service, .pf-card, .counter').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    // Skill bars animation
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.skill-bar > div')
          if (bar && !bar.classList.contains('animated')) {
            // Keep the bar width as initially defined so color remains visible on load.
            // Add an "animated" class to trigger any CSS transition without resetting width to 0.
            bar.classList.add('animated')
          }
          skillObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('.skill').forEach(skill => skillObserver.observe(skill))

    // Counters
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const numElement = counter.querySelector('.num')
          const target = parseInt(numElement?.textContent || '0')
          if (numElement && !numElement.classList.contains('counted')) {
            animateCounter(numElement, target)
            numElement.classList.add('counted')
          }
          counterObserver.unobserve(counter)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('.counter').forEach(counter => counterObserver.observe(counter))

    function animateCounter(element, target) {
      let current = 0
      const increment = target / 50
      const suffix = element.textContent.replace(/[0-9]/g, '')
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          element.textContent = target + suffix
          clearInterval(timer)
        } else {
          element.textContent = Math.floor(current) + suffix
        }
      }, 30)
    }

    // Contact form handler
    const form = document.querySelector('form[aria-label="Contact form"]')
    if (form) {
      const submitHandler = function (e) {
        e.preventDefault()
        const btn = form.querySelector('button[type="submit"]')
        const originalText = btn.textContent
        const originalBg = btn.style.background
        btn.textContent = 'Sending...'
        btn.disabled = true
        setTimeout(() => {
          btn.textContent = '✓ Message Sent!'
          btn.style.background = '#10B981'
          setTimeout(() => {
            btn.textContent = originalText
            btn.style.background = originalBg
            btn.disabled = false
            form.reset()
          }, 2500)
        }, 1000)
      }
      form.addEventListener('submit', submitHandler)
      // cleanup for submit
      return () => {
        form.removeEventListener('submit', submitHandler)
        document.removeEventListener('click', handleDocClick)
      }
    }
  }, [])

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="about" className="about">
          <div className="container about-inner">
            <h2>About Me</h2>
            <p className="about-lead">I'm Amira, a passionate frontend designer. I specialize in crafting intuitive, visually stunning digital experiences with a user-centered approach that transforms ideas into functional, beautiful interfaces.</p>

            <div className="counters">
              <div className="counter">
                <div className="num">7+</div>
                <div className="label">Projects Completed</div>
              </div>
              <div className="counter">
                <div className="num">2+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="counter">
                <div className="num">80+</div>
                <div className="label">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Services</h2>
            <p className="section-sub">From concept to code — explore my services and let’s build something amazing together.</p>
            <div className="services-grid">
              <div className="service">
                <div className="icon"><i className="fas fa-code fa-2x"></i></div>
                <h3>Frontend Development</h3>
                <p>Building responsive and modern user interfaces using HTML, CSS, JavaScript, and React.</p>
              </div>
              <div className="service">
                <div className="icon"><i className="fas fa-mobile-alt fa-2x"></i></div>
                <h3>Responsive Web Design</h3>
                <p>Creating mobile-first layouts that adapt smoothly across all screen sizes.</p>
              </div>
              <div className="service">
                <div className="icon"><i className="fas fa-paint-brush fa-2x"></i></div>
                <h3>UI Implementation</h3>
                <p>Converting designs into clean, pixel-perfect frontend code with attention to detail.</p>
              </div>
              <div className="service">
                <div className="icon"><i className="fab fa-wordpress fa-2x"></i></div>
                <h3>WordPress Development</h3>
                <p>Building custom WordPress themes and plugins with a focus on performance and usability.</p>
              </div>
            </div>
          </div>
        </section>

        <PortfolioGrid />

        <section className="skills">
          <div className="container">
            <h2>Technical Skills</h2>
            <p className="section-sub">Tools and technologies I use to bring ideas to life.</p>
            <div className="skills-grid">
              <div className="skill">
                <div className="skill-label">HTML <span>95%</span></div>
                <div className="skill-bar"><div style={{ width: '95%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">CSS <span>90%</span></div>
                <div className="skill-bar"><div style={{ width: '90%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">JavaScript <span>75%</span></div>
                <div className="skill-bar"><div style={{ width: '75%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">React <span>70%</span></div>
                <div className="skill-bar"><div style={{ width: '70%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">Responsive Design <span>80%</span></div>
                <div className="skill-bar"><div style={{ width: '80%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">GitHub <span>85%</span></div>
                <div className="skill-bar"><div style={{ width: '85%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">WordPress <span>90%</span></div>
                <div className="skill-bar"><div style={{ width: '90%' }}></div></div>
              </div>

              <div className="skill">
                <div className="skill-label">Figma <span>83%</span></div>
                <div className="skill-bar"><div style={{ width: '83%' }}></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div className="contact-left">
              <h2>Let's Work Together</h2>
              <p className="muted">Have a project in mind? I'd love to hear from you. Let's create something amazing together.</p>

              <ul className="contact-list">
                <li>
                  <span className="icon"><i className="fas fa-phone"></i></span>
                  <span className="contact-text">+20 1030836336</span>
                </li>
                <li>
                  <span className="icon"><i className="fas fa-envelope"></i></span>
                  <a href="mailto:merahassn111@gmail.com" className="contact-text">merahassn111@gmail.com</a>
                </li>
                <li>
                  <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                  <span className="contact-text">Sharqia, Zagazig, Egypt</span>
                </li>
              </ul>

              <div className="socials-small">
                <a href="https://github.com/AmiraHassann" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/amira-hassan-902925378" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/amira.hassan.479896/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/01030836336" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            <div className="contact-form">
              <div className="card">
                <form action="#" method="post" aria-label="Contact form">
                  <div className="form-row">
                    <label className="form-field">
                      <span className="label-text">First name</span>
                      <input type="text" name="first" placeholder="First name" required />
                    </label>
                    <label className="form-field">
                      <span className="label-text">Email</span>
                      <input type="email" name="email" placeholder="Email" required />
                    </label>
                  </div>
                  <div className="form-row">
                    <label className="form-field">
                      <span className="label-text">Phone</span>
                      <input type="tel" name="phone" placeholder="Phone number" />
                    </label>
                    <label className="form-field">
                      <span className="label-text">Subject</span>
                      <input type="text" name="subject" placeholder="Subject" />
                    </label>
                  </div>
                  <label className="form-field">
                    <span className="label-text">Message</span>
                    <textarea name="message" rows="6" placeholder="Your message" required></textarea>
                  </label>
                  <button className="btn dark full" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <button id="scrollToTop" className="scroll-to-top" aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      </main>
    </>
  )
}

