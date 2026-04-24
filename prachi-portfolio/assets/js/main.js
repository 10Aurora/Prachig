/* ============================================================
   Prachi . G — Portfolio JavaScript
   ============================================================ */

'use strict';

/* ── YEAR ──────────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── NAVBAR: scroll shadow + active link ────────────────────── */
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateNav() {
  // Shadow on scroll
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active link based on scroll position
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 80;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── MOBILE HAMBURGER ───────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navLinksList = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinksList.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close nav when a link is clicked
navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Close nav on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    navLinksList.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── SKILL BAR ANIMATION ─────────────────────────────────────── */
const barObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.w + '%';
        barObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll('.bar-fill').forEach(bar => barObserver.observe(bar));

/* ── CONTACT FORM ────────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      showFormFeedback('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFormFeedback('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate sending
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Message Sent ✓';
      submitBtn.style.background = 'var(--pink-accent)';
      submitBtn.style.borderColor = 'var(--pink-accent)';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled = false;
      }, 3500);
    }, 1200);
  });
}

function showFormFeedback(msg, type) {
  let fb = document.getElementById('formFeedback');
  if (!fb) {
    fb = document.createElement('p');
    fb.id = 'formFeedback';
    fb.style.cssText = 'font-size:.85rem;margin-top:.5rem;';
    contactForm.appendChild(fb);
  }
  fb.textContent = msg;
  fb.style.color = type === 'error' ? 'var(--pink-dark)' : 'var(--ink-muted)';
  setTimeout(() => { if (fb) fb.remove(); }, 4000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── SMOOTH SCROLL (fallback for older Safari) ──────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
