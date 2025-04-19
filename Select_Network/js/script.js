// script.js
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.05)';
    link.style.textShadow = '0 0 10px rgba(62, 146, 204, 0.7)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.textShadow = 'none';
  });
});
gsap.utils.toArray('.service-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('bg-[#3E92CC]'));
    // Add active class to clicked button
    button.classList.add('bg-[#3E92CC]');
    
    const filterValue = button.getAttribute('data-filter');
    
    projects.forEach(project => {
      if (filterValue === 'all' || project.classList.contains(filterValue)) {
        project.classList.remove('hidden');
        gsap.from(project, { opacity: 0, y: 20, duration: 0.5 });
      } else {
        project.classList.add('hidden');
      }
    });
  });
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  // Toggle menu visibility
  mobileMenu.classList.toggle('hidden');
  mobileMenuButton.classList.toggle('active');
  
  // Animate menu (optional)
  if (!mobileMenu.classList.contains('hidden')) {
    gsap.from(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.3
    });
  }
});
// Lazy loading
const lazyImages = document.querySelectorAll('.lazy-load');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('blur-up');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));