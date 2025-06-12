document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-content, .about, .projects, .contact, .project-card, .profile-img');
    elements.forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.opacity = '1';
        }, 100);
    });
});