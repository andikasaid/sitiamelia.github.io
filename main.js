document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // mobile dropdown toggle (Layanan)
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  const observer = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const t = document.querySelector(targetId);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth' });
          if (navLinks) navLinks.classList.remove('open');
        }
      }
    });
  });
});

function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}
