const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Allows re-animation when scrolling back up
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '50px'
});

function initReviewAnimations() {
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => reviewObserver.observe(card));
}

document.addEventListener('DOMContentLoaded', initReviewAnimations); 