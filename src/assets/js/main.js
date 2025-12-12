// Initialize Lucide Icons
lucide.createIcons();

// Add subtle border to nav on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        // When scrolled down: visible border
        navbar.classList.replace('border-stone-200/50', 'border-stone-200');
    } else {
        // At top: subtle/transparent border
        navbar.classList.replace('border-stone-200', 'border-stone-200/50');
    }
});