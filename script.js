// Load manga pages as CSS background images
document.querySelectorAll('.manga-page').forEach((page, index) => {
    const pageNumber = index + 1;
    page.style.backgroundImage = `url(/assets/Page-${pageNumber}.png)`;
});

// Hero WebGL unload optimization
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Hero is out of view - unload WebGL
            const heroEmbed = document.querySelector('.hero-embed');
            if (heroEmbed && !heroEmbed.dataset.unloaded) {
                heroEmbed.innerHTML = '';
                heroEmbed.dataset.unloaded = 'true';
                
                // Destroy Unicorn Studio if it exists
                if (window.UnicornStudio) {
                    window.UnicornStudio = null;
                }
                
                // Remove the script tag
                const unicornScripts = document.querySelectorAll('script[src*="unicornstudio"]');
                unicornScripts.forEach(script => script.remove());
                
                console.log('WebGL hero unloaded for performance optimization');
            }
        }
    });
}, { threshold: 0 });

if (heroSection) {
    heroObserver.observe(heroSection);
}

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


