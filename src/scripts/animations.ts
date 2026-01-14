// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Number counter animation
  const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
    const startTimestamp = Date.now();
    const step = () => {
      const timestamp = Date.now();
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
  // Observe number counters
  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const end = parseInt(entry.target.getAttribute('data-count') || '0');
        animateValue(entry.target as HTMLElement, 0, end, 2000);
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.counter').forEach(el => numberObserver.observe(el));
});