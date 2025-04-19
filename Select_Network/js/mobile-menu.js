// mobile-menu.js
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Touch gesture variables
let touchStartY = 0;
let touchEndY = 0;
const SWIPE_THRESHOLD = 50;

// Toggle menu function
const toggleMenu = (shouldOpen) => {
  const isOpening = shouldOpen ?? !mobileMenu.classList.contains('hidden');
  
  if (isOpening) {
    mobileMenu.classList.remove('hidden');
    gsap.from(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out"
    });
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      onComplete: () => mobileMenu.classList.add('hidden')
    });
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  }
};

// Event listeners
mobileMenuButton.addEventListener('click', () => toggleMenu());

// Swipe to close
mobileMenu.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

mobileMenu.addEventListener('touchmove', (e) => {
  touchEndY = e.changedTouches[0].clientY;
  // Prevent scrolling when swiping down on menu
  if (touchStartY - touchEndY > 10) {
    e.preventDefault();
  }
}, { passive: false });

mobileMenu.addEventListener('touchend', () => {
  if (touchStartY - touchEndY > SWIPE_THRESHOLD) {
    toggleMenu(false);
  }
}, { passive: true });

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    toggleMenu(false);
  }
});

// Close on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    toggleMenu(false);
  }
});