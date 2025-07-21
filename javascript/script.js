// Ensure DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select the toggle button and nav menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Check if elements exist before adding event listener
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});