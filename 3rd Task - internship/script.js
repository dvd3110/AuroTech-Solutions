document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent!');
    });
});
