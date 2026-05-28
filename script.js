// Scroll reveal
const reveals = document.querySelectorAll('.stats, .portfolio, .quote-section, .contact');
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);

document.querySelectorAll('.stat, .grid-item, .editorial-quote, .contact-heading, .stats-bio').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Stagger stat reveals
document.querySelectorAll('.stat').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});

document.querySelectorAll('.grid-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.9) {
    nav.style.mixBlendMode = 'normal';
    nav.style.color = '#0a0a0a';
  } else {
    nav.style.mixBlendMode = 'difference';
    nav.style.color = '';
  }
}, { passive: true });
