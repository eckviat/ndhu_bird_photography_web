document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const container = document.querySelector('.container');

    setTimeout(() => {
        container.classList.add('show');
    }, 100);

    const fadeInElements = document.querySelectorAll('.fade-in'); // 選取所有目標元素

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.add('hide');
                entry.target.classList.remove('show');
            }
        });
    }, {
        rootMargin: '0% 0px -20% 0px', 
        threshold: 0.1
    });

    fadeInElements.forEach(el => observer.observe(el));

    const overlay = document.querySelector('.fullscreen-overlay');
    const dismissButton = document.querySelector('.dismiss-button');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('#main-content');

    dismissButton.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('hidden');

        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
        
        mainContent.classList.add('show');
    });

    const fadeInTexts = document.querySelectorAll('.fade-in-text');

    fadeInTexts.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 200);
    });
});