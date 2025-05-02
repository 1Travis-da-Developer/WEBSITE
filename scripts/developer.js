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

    // Content sections animations
    const sections = document.querySelectorAll('.dev-intro, .devctnt-rows0, .devctnt-rows1, .devctnt-rows2, .devctnt-rows3');
    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', initAnimations); 