// =============================================
//  PRACHI GANVIR PORTFOLIO — main.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR scroll effect ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── HAMBURGER menu ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ── INTERSECTION OBSERVER for animations ──
  const animEls = document.querySelectorAll('.animate-fade-up, .animate-slide-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  animEls.forEach(el => obs.observe(el));

  // ── SKILL BARS animation ──
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const w = bar.getAttribute('data-width');
          setTimeout(() => { bar.style.width = w + '%'; }, 200);
        });
        skillObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) skillObs.observe(skillsSection);

  // ── ACTIVE NAV link highlight ──
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const activateNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--cyan)'
        : '';
    });
  };
  window.addEventListener('scroll', activateNav);

  // ── CONTACT FORM submission ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#22c55e';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  }

  // ── HERO animations: trigger immediately ──
  document.querySelectorAll('.hero .animate-fade-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });

});
