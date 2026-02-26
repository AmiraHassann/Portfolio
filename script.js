
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const header = document.querySelector('.site-header');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      menuToggle.innerHTML = mainNav.classList.contains('open') 
        ? '<i class="fa fa-times"></i>' 
        : '<i class="fa fa-bars"></i>';
    });

    // Close menu when clicking a nav link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('open');
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll animations using Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate sections on scroll
  document.querySelectorAll('.service, .pf-card, .skill, .counter').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Animate skill bars when visible
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.skill-bar > div');
        if (bar && !bar.classList.contains('animated')) {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
            bar.classList.add('animated');
          }, 200);
        }
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill').forEach(skill => {
    skillObserver.observe(skill);
  });

  // Animate counters when visible
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const numElement = counter.querySelector('.num');
        const target = parseInt(numElement.textContent);
        
        if (!numElement.classList.contains('counted')) {
          animateCounter(numElement, target);
          numElement.classList.add('counted');
        }
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
  });

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 30);
  }

  // Contact form handler
  const form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      const originalBg = btn.style.background;
      
      btn.textContent = 'Sending...';
      btn.disabled = true;
      
      // Simulate sending (replace with actual form submission)
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#10B981';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = originalBg;
          btn.disabled = false;
          form.reset();
        }, 2500);
      }, 1000);
    });
  }

  // Add active state to nav links on scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.main-nav a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});