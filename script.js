document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle for small screens
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Close menu when clicking a nav link
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mainNav.classList.remove('open'))
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return; // skip top links
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Simple contact form handler (demo)
  const form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Minimal demo feedback
      alert('Thanks! Your message was received (demo).');
      form.reset();
    });
  }
});
