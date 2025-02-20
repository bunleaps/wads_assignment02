const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

document.querySelectorAll('.stars').forEach(starContainer => {
    const stars = starContainer.querySelectorAll('.star');
    const skill = starContainer.dataset.skill;

    // Load saved rating
    const savedRating = localStorage.getItem(`rating_${skill}`);
    if (savedRating) {
        updateStars(stars, savedRating);
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.dataset.value;
            updateStars(stars, value);
            // Save rating
            localStorage.setItem(`rating_${skill}`, value);
        });
    });
});

function updateStars(stars, value) {
    stars.forEach(star => {
        star.classList.toggle('active', star.dataset.value <= value);
    });
}