document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkFade = () => {
        const windowHeight = window.innerHeight;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    // Check on load and on scroll
    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);

    // Initial check
    checkFade();

    // Add fade-in class to elements that should animate
    const elementsToAnimate = [
        'header',
        '#about',
        '#skills .skill-item',
        '#contact',
        'footer'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
        });
    });

    // Add interactive enhancements
    // Add hover effects to skill items for better feedback
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });

        item.addEventListener('mousedown', () => {
            item.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseup', () => {
            item.style.transform = 'translateY(-2px)');
        });
    });
});