// Script de dark mode avec le bouton toggle
const darkToggleButton = document.querySelector('.dark-toggle');

if (darkToggleButton) {
    darkToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

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

// Script pour le bouton "Voir plus de projets"
const seeMoreButton = document.getElementById('see-more-projects');
const moreProjects = document.getElementById('more-projects');

console.log('Éléments seeMoreButton et moreProjects récupérés:', seeMoreButton, moreProjects);

if (seeMoreButton && moreProjects) {
    seeMoreButton.addEventListener('click', () => {
        console.log('Bouton "Voir plus de projets" cliqué!');
        if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
            moreProjects.style.display = 'block'; // Affiche les projets supplémentaires
            seeMoreButton.textContent = 'Voir moins'; // Change le texte du bouton
            console.log('Projets supplémentaires affichés');
        } else {
            moreProjects.style.display = 'none'; // Cache les projets supplémentaires
            seeMoreButton.textContent = 'Voir plus de projets'; // Réinitialise le texte du bouton
            console.log('Projets supplémentaires cachés');
        }
        console.log('Après le changement: moreProjects.style.display:', moreProjects.style.display, 'Texte du bouton:', seeMoreButton.textContent);
    });
} else {
    console.log('Erreur: seeMoreButton ou moreProjects est null.');
}
