document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle (default light; applied pre-paint in <head>)
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const root = document.documentElement;
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
        });
    }

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Apply a small stagger delay if multiple items appear at once
                const sibs = Array.from(entry.target.parentElement.children).filter(c => c.classList.contains('fade-in'));
                entry.target.style.transitionDelay = (Math.min(sibs.indexOf(entry.target), 3) * 0.08) + 's';
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
