// Form submission handling
document.getElementById('customForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Form submission logic would go here
    console.log('Form submitted:', {
        name,
        email,
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        message: document.getElementById('message').value.trim()
    });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});