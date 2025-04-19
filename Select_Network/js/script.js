// Scroll-triggered animations (using GSAP - lightweight)
document.addEventListener('DOMContentLoaded', () => {
  // Animate service cards on scroll
  gsap.from(".service-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%"
    }
  });

  // Pulse CTA button
  gsap.to(".cta-button", {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.5
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