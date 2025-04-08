
// Script de dark mode déjà inclus dans le bouton
document.querySelector('.dark-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Script de fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, {
    threshold: 0.1
});

const interval = setInterval(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0) {
        fadeElements.forEach(el => observer.observe(el));
        clearInterval(interval);
    }
}, 500);
