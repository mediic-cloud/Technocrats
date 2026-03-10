let currentLang = 'fr';

// Affichage de la popup au chargement
window.onload = function() {
    document.getElementById('translation-popup').style.display = 'flex';
};

// Fonction pour choisir la langue depuis la popup
function setLanguage(lang) {
    currentLang = lang;
    updateContent();
    document.getElementById('translation-popup').style.display = 'none';
}

// Fonction pour basculer via le bouton de navigation
function toggleLang() {
    currentLang = (currentLang === 'fr') ? 'en' : 'fr';
    updateContent();
}

// Mise à jour dynamique du texte
function updateContent() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    const btn = document.getElementById('langBtn');
    btn.textContent = (currentLang === 'fr') ? 'EN' : 'FR';
    
    document.documentElement.lang = currentLang;
}