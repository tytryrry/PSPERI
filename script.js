// script.js
window.onload = function() {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000);
    }, 2000);

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            sections.forEach(sec => sec.classList.remove('active'));
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.add('active');
        });
    });
};
// script.js
window.onload = function() {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000);
    }, 2000);

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            sections.forEach(sec => sec.classList.remove('active'));
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.add('active');
        });
    });

    // Update the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear; 
};