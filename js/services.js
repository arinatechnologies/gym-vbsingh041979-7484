document.addEventListener('DOMContentLoaded', function() {
  // Testimonial slider functionality
  const testimonialContainer = document.querySelector('.testimonial-container');
  if (testimonialContainer) {
    let currentIndex = 0;
    const testimonials = Array.from(document.querySelectorAll('.testimonial-card'));
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
      });
    }
    
    // Only run slider if there are multiple testimonials
    if (totalTestimonials > 1) {
      // Initialize all testimonials as hidden except first
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === 0 ? 'block' : 'none';
      });
      
      // Auto-rotate testimonials every 5 seconds
      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
      }, 5000);
    }
  }
  
  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Mobile menu toggle would be in base.js
});