// animations.js
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.glitch', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out"
      })
      .from('.typing-animation', {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.5")
      .from('.cta-button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out"
      }, "-=0.3");
  
    // Service card animations
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1,
        ease: "back.out"
      });
    });
  
    // Floating background elements
    gsap.to('.animate-float', {
      y: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  
    gsap.to('.animation-delay-2000', {
      y: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  
    // Glow effect for CTA button
    gsap.to('.cta-button', {
      boxShadow: '0 0 15px rgba(62, 146, 204, 0.7)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  
    // Scroll indicator animation
    gsap.to('.animate-bounce', {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });