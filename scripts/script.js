// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Initialize animations
function initAnimations() {
    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    observer.observe(heroContent);

    // News cards animation
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => observer.observe(card));
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations); 

