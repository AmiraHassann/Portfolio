
const PROJECTS = [
  { id: 1, 
    category: 'web', tag: 'OpenCart', title: 'Educational Platform', 
    description: 'A comprehensive educational platform with intuitive content structure and fully responsive design. Built with OpenCart for seamless course management.', 
    image: 'img/mawred.png', link: 'https://mawred-edu.com/',
    meta: [{ icon: 'fas fa-code', text: 'Web Design' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 2, 
    category: 'wordpress', tag: 'WordPress', title: 'Alwatad Company', 
    description: 'Professional corporate website showcasing services with clean, modern design. Built with WordPress, Elementor, and WooCommerce integration.', 
    image: 'img/alwatad.png', link: 'https://alwatad.net/', 
    meta: [{ icon: 'fas fa-wordpress', text: 'WordPress' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 3, 
    category: 'web', tag: 'HTML & CSS', title: 'Business Landing Page', 
    description: 'A responsive and modern landing page designed with clean UI principles. Features intuitive layout structure and contemporary styling.', 
    image: 'img/business-landing.png', link: 'https://amirahassann.github.io/Business-Landing-Page/', 
    meta: [{ icon: 'fas fa-code', text: 'Frontend' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 4, 
    category: 'web', tag: 'Responsive Design', title: 'Books Landing Page', 
    description: 'An elegant landing page for book promotion with responsive layout. Showcases clean UI design and modern styling best practices.', 
    image: 'img/books.png', link: 'https://amirahassann.github.io/Books-Landing-page/', 
    meta: [{ icon: 'fas fa-code', text: 'Web Design' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 5, 
    category: 'frontend', tag: 'JavaScript', title: 'Water Intake Tracker', 
    description: 'A functional hydration tracking application. Built with vanilla JavaScript featuring real-time calculations and persistent data storage.', 
    image: 'img/water.png', link: 'https://amirahassann.github.io/Water-Tracker/', 
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 6, 
    category: 'frontend', tag: 'JavaScript', title: 'Event Countdown Timer', 
    description: 'A responsive countdown timer application. Demonstrates JavaScript expertise with real-time updates and elegant UI presentation.', 
    image: 'img/event.png', link: 'https://amirahassann.github.io/Event-Countdown/', 
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 7, 
    category: 'frontend', tag: 'JavaScript', title: 'Clinic Appointment Booking', 
    description: 'A full-featured appointment booking system with double-booking prevention. Built with vanilla JavaScript showcasing advanced functionality.', 
    image: 'img/clinic.png', link: 'https://amirahassann.github.io/Clinic-Appointment-Booking-System/', 
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }] },
  
    { id: 8, 
    category: 'frontend', tag: 'FrontEnd', title: 'Restaurant Ordering System', 
    description: 'A full-featured restaurant ordering system with real-time updates and seamless user experience. Built with vanilla JavaScript showcasing advanced functionality.', 
    image: 'img/restaurant.png', link: 'https://amirahassann.github.io/Restaurant-Ordering-System/', 
    meta: [{ icon: 'fas fa-mobile-alt', text: 'Web App' }, { icon: 'fas fa-eye', text: 'Live Project' }] }
]

document.addEventListener('DOMContentLoaded', () => {
  renderProjects()
  setupFilters()
  initUIBehavior()
})

function renderProjects() {
  const grid = document.querySelector('.portfolio-grid')
  if (!grid) return
  grid.innerHTML = ''
  PROJECTS.forEach(project => {
    const article = document.createElement('article')
    article.className = 'pf-card'
    article.setAttribute('data-category', project.category)

    const a = document.createElement('a')
    a.className = 'pf-link'
    a.href = project.link
    a.target = '_blank'
    a.rel = 'noopener noreferrer'

    const imgWrap = document.createElement('div')
    imgWrap.className = 'pf-image'
    const img = document.createElement('img')
    img.src = project.image
    img.alt = project.title
    img.loading = 'lazy'
    img.decoding = 'async'
    imgWrap.appendChild(img)

    const content = document.createElement('div')
    content.className = 'pf-content'
    const cat = document.createElement('p')
    cat.className = 'pf-category'
    cat.textContent = project.tag
    const h3 = document.createElement('h3')
    h3.textContent = project.title
    const p = document.createElement('p')
    p.textContent = project.description
    const metaDiv = document.createElement('div')
    metaDiv.className = 'pf-meta'
    project.meta.forEach(m => {
      const span = document.createElement('span')
      span.className = 'meta-item'
      span.innerHTML = `<i class="${m.icon}"></i> ${m.text}`
      metaDiv.appendChild(span)
    })

    content.appendChild(cat)
    content.appendChild(h3)
    content.appendChild(p)
    content.appendChild(metaDiv)

    a.appendChild(imgWrap)
    a.appendChild(content)
    article.appendChild(a)
    grid.appendChild(article)
  })
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.dataset.filter
      document.querySelectorAll('.pf-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = ''
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

function initUIBehavior() {
  const menuToggle = document.getElementById('menuToggle')
  const mainNav = document.getElementById('mainNav')
  const header = document.querySelector('.site-header')

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open')
      menuToggle.innerHTML = mainNav.classList.contains('open') ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>'
    })

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open')
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>'
      })
    })

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('open')
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>'
      }
    })
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

  // Reveal on scroll
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  document.querySelectorAll('.service, .pf-card, .counter').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })

  // Skills
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.skill-bar > div')
        if (bar && !bar.classList.contains('animated')) {
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

  // Contact form
  const form = document.querySelector('form[aria-label="Contact form"]')
  if (form) {
    form.addEventListener('submit', (e) => {
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
    })
  }

  const scrollBtn = document.getElementById('scrollToTop')
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) scrollBtn.classList.add('visible')
      else scrollBtn.classList.remove('visible')
    })
  }
}

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

