// typing-effect.js
class TypingAnimation {
    constructor(element) {
      this.element = element;
      this.words = JSON.parse(element.getAttribute('data-words'));
      this.delay = parseInt(element.getAttribute('data-delay')) || 2000;
      this.loop = true;
      this.currentWord = 0;
      this.isDeleting = false;
      this.text = '';
      this.type();
    }
  
    type() {
      const fullWord = this.words[this.currentWord];
      
      if (this.isDeleting) {
        this.text = fullWord.substring(0, this.text.length - 1);
      } else {
        this.text = fullWord.substring(0, this.text.length + 1);
      }
  
      this.element.textContent = this.text;
  
      let typeSpeed = 150;
      if (this.isDeleting) typeSpeed /= 2;
  
      if (!this.isDeleting && this.text === fullWord) {
        typeSpeed = this.delay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.currentWord = (this.currentWord + 1) % this.words.length;
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  document.querySelectorAll('.typing-animation').forEach(el => {
    new TypingAnimation(el);
  });