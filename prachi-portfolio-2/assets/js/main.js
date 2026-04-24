/* ============================================================
   Prachi . G — Portfolio JavaScript
   Features: navbar scroll/active, mobile menu, scroll-reveal,
             skill bar animation, contact form validation
   ============================================================ */

'use strict';

/* ── YEAR ──────────────────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── NAVBAR: scroll shadow + active link highlight ─────────── */
const navbar    = document.getElementById('navbar');
const sections  = Array.from(document.querySelectorAll('section[id]'));
const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));

function onScroll() {
  // Shadow
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active nav link
  const scrollMid = window.scrollY + window.innerHeight / 3;
  let current = sections[0]?.id || '';

  sections.forEach(sec => {
    if (sec.offsetTop <= scrollMid) current = sec.id;
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

/* ── MOBILE HAMBURGER ───────────────────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const navLinks    = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close when a nav link is tapped
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Close on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) closeMenu();
});

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealIO = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealIO.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

/* ── SKILL BAR ANIMATION ────────────────────────────────────── */
const barIO = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.w + '%';
        barIO.unobserve(bar);
      }
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll('.bar-fill').forEach(bar => barIO.observe(bar));

/* ── CONTACT FORM ────────────────────────────────────────────── */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const feedback   = document.getElementById('formFeedback');

function setFeedback(msg, isError = false) {
  if (!feedback) return;
  feedback.textContent = msg;
  feedback.style.color = isError ? 'var(--pink-deep)' : 'var(--ink-muted)';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    // Validation
    if (!name) { setFeedback('Please enter your name.', true); return; }
    if (!email || !validateEmail(email)) { setFeedback('Please enter a valid email address.', true); return; }
    if (!message) { setFeedback('Please write a message.', true); return; }

    // Simulate sending
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setFeedback('');

    setTimeout(() => {
      submitBtn.textContent = 'Message Sent ✓';
      submitBtn.style.background    = 'var(--pink-accent)';
      submitBtn.style.borderColor   = 'var(--pink-accent)';
      setFeedback('Thank you! I'll get back to you soon.');
      form.reset();

      setTimeout(() => {
        submitBtn.textContent       = 'Send Message';
        submitBtn.style.background  = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled          = false;
        setFeedback('');
      }, 4000);
    }, 1300);
  });
}

/* ── SMOOTH SCROLL FALLBACK (older Safari) ──────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── KEYBOARD: close menu on Escape ────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
