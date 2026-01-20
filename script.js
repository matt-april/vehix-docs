// ============================================
// VEHIX LANDING PAGE SCRIPTS
// Minimal, performant interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to feature cards, step cards, use cases, and sections
    document.querySelectorAll('.feature-card, .section-header, .step-card, .use-case').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(el);
    });

    // Staggered animation for step cards
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Staggered animation for use cases
    const useCases = document.querySelectorAll('.use-case');
    useCases.forEach((useCase, index) => {
        useCase.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add subtle parallax to gradient orbs
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.gradient-orb');

                orbs.forEach((orb, index) => {
                    const speed = 0.05 + (index * 0.02);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Phone mockup tile hover effects
    const tiles = document.querySelectorAll('.maint-tile');
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.transform = 'scale(1.05) translateY(-5px)';
            tile.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        });
        tile.addEventListener('mouseleave', () => {
            tile.style.transform = '';
            tile.style.boxShadow = '';
        });
    });
});

// Console easter egg
console.log('%cVehix', 'font-size: 24px; font-weight: bold; color: #E07A5F;');
console.log('%cTrack Service. Know Your Car.', 'font-size: 14px; color: #98C1D9;');
console.log('%cStop guessing when your car needs maintenance.', 'font-size: 12px; color: #5A7A9A;');
