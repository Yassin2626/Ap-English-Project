// Load manga pages as CSS background images
document.querySelectorAll('.manga-page').forEach((page, index) => {
    const pageNumber = index + 1;
    page.style.backgroundImage = `url(/assets/Page-${pageNumber}.png)`;
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all page sections
document.querySelectorAll('.page-section').forEach(section => {
    observer.observe(section);
});

// Disable right-click context menu on manga pages
document.querySelectorAll('.manga-page').forEach(page => {
    page.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
});

// Prevent drag and drop
document.querySelectorAll('.manga-page').forEach(page => {
    page.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    page.addEventListener('drag', (e) => {
        e.preventDefault();
        return false;
    });

    page.addEventListener('dragend', (e) => {
        e.preventDefault();
        return false;
    });
});

// Prevent long-press on mobile (context menu)
document.querySelectorAll('.manga-page').forEach(page => {
    let longPressTimer;

    page.addEventListener('touchstart', (e) => {
        longPressTimer = setTimeout(() => {
            e.preventDefault();
        }, 500);
    });

    page.addEventListener('touchend', () => {
        clearTimeout(longPressTimer);
    });

    page.addEventListener('touchmove', () => {
        clearTimeout(longPressTimer);
    });
});

// Prevent selection of background images
document.addEventListener('selectstart', (e) => {
    if (e.target.classList.contains('manga-page')) {
        e.preventDefault();
    }
});

