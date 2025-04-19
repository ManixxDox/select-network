// portfolio.html
const filters = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    // Filter logic here
  });
});s
gsap.from(".service-card", { 
    opacity: 0, y: 50, stagger: 0.2, scrollTrigger: {
      trigger: "#services"
    }
  });