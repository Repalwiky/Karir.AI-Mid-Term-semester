const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const toggleRiskButton = document.getElementById('toggle-risk');
const strategyPanel = document.querySelector('.strategy');
const accordionItems = document.querySelectorAll('.accordion-item');
const counters = document.querySelectorAll('.stat-card h3, .testimonial-metrics h3');

// Mobile navigation toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        topbar.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
}

// Sticky shadow effect
const heroSection = document.querySelector('#hero');
if (heroSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                topbar.classList.add('scrolled');
            } else {
                topbar.classList.remove('scrolled');
            }
        });
    }, { threshold: 0 });

    observer.observe(heroSection);
}

// Animate counters when in view
const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target || '0');
    const suffix = el.dataset.suffix ? ` ${el.dataset.suffix}` : '';
    if (!target) {
        el.textContent = `0${suffix}`;
        return;
    }

    const duration = 1400;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const easeOutQuad = (t) => t * (2 - t);

    const counterInterval = setInterval(() => {
        frame += 1;
        const progress = easeOutQuad(Math.min(frame / totalFrames, 1));
        const current = target * progress;
        const displayValue = Number.isInteger(target) ? Math.round(current) : current.toFixed(2);
        el.textContent = `${displayValue}${suffix}`;
        if (frame === totalFrames) {
            el.textContent = `${Number.isInteger(target) ? target : target.toFixed(2)}${suffix}`;
            clearInterval(counterInterval);
        }
    }, frameRate);
};

const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// Toggle AI-Proof strategy panel
if (toggleRiskButton && strategyPanel) {
    toggleRiskButton.addEventListener('click', () => {
        const isHidden = strategyPanel.hasAttribute('hidden');
        if (isHidden) {
            strategyPanel.removeAttribute('hidden');
            toggleRiskButton.textContent = 'Sembunyikan Strategi';
        } else {
            strategyPanel.setAttribute('hidden', '');
            toggleRiskButton.textContent = 'Lihat Strategi AI-Proof';
        }
    });
}

// Accordion interactions
accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        accordionItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
            if (topbar.classList.contains('active')) {
                topbar.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        }
    });
});

// Simple confetti effect when CTA button clicked
const ctaButton = document.querySelector('.cta .btn.primary');
if (ctaButton) {
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        for (let i = 0; i < 40; i += 1) {
            const piece = document.createElement('span');
            piece.className = 'confetti-piece';
            piece.style.setProperty('--i', i);
            confettiContainer.appendChild(piece);
        }
        document.body.appendChild(confettiContainer);
        setTimeout(() => confettiContainer.remove(), 2000);
    });
}
