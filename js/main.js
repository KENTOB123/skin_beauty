document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Skin Coach App Loaded');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('section > .container');
    hiddenElements.forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
