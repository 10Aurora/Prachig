/* ============================================================
   Prachi . G — Portfolio JavaScript
   ============================================================ */

// ── Mobile navigation toggle ──
function toggleNav() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// ── Smooth scroll + close mobile menu on link click ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('navLinks').classList.remove('open');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Scroll-triggered fade-ins & skill bar animations ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when the skills section scrolls into view
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Navbar shadow on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.boxShadow = window.scrollY > 20
    ? '0 2px 20px rgba(201,112,112,0.1)'
    : 'none';
});

// ── Contact form feedback (basic — no backend) ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = 'var(--accent)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
