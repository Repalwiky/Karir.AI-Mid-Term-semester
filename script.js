const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

const toggleRiskButton = document.getElementById('toggle-risk');
const strategyPanel = document.querySelector('.strategy');

const accordionItems = document.querySelectorAll('.accordion-item');
const counters = document.querySelectorAll('.stat-card h3, .testimonial-metrics h3');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile navigation toggle with aria updates
if (menuToggle && topbar) {
  menuToggle.addEventListener('click', () => {
    const nowOpen = !topbar.classList.contains('active');
    topbar.classList.toggle('active', nowOpen);
    menuToggle.classList.toggle('open', nowOpen);
    menuToggle.setAttribute('aria-expanded', String(nowOpen));
    // prevent body scroll when menu open on small screens
    document.documentElement.style.overflow = nowOpen ? 'hidden' : '';
    // focus first nav link when opened
    if (nowOpen && nav?.querySelector('a')) {
      (nav.querySelector('a')).focus();
    }
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && topbar.classList.contains('active')) {
      topbar.classList.remove('active');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      menuToggle.focus();
    }
  });
}

// Sticky shadow effect based on hero visibility
const heroSection = document.querySelector('#hero');
if (heroSection && topbar) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    });
  }, { threshold: 0.1 });
  observer.observe(heroSection);
}

// Animate counters when in view (respects reduced motion)
const formatNumber = (value, decimals = 0) => {
  try {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch {
    return value.toFixed(decimals);
  }
};

const animateCounter = (el) => {
  const target = parseFloat(el.dataset.target || '0');
  const suffix = el.dataset.suffix ? ` ${el.dataset.suffix}` : '';
  const decimals = Number.parseInt(el.dataset.decimals || '0', 10);

  if (!target || prefersReducedMotion) {
    el.textContent = `${formatNumber(target, decimals)}${suffix}`;
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
    el.textContent = `${formatNumber(current, decimals)}${suffix}`;
    if (frame === totalFrames) {
      el.textContent = `${formatNumber(target, decimals)}${suffix}`;
      clearInterval(counterInterval);
    }
  }, frameRate);
};

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach((c) => animateCounter(c));
}

// Toggle AI-Proof strategy panel
if (toggleRiskButton && strategyPanel) {
  toggleRiskButton.addEventListener('click', () => {
    const isHidden = strategyPanel.hasAttribute('hidden');
    if (isHidden) {
      strategyPanel.removeAttribute('hidden');
      toggleRiskButton.textContent = 'Sembunyikan Strategi';
      toggleRiskButton.setAttribute('aria-expanded', 'true');
    } else {
      strategyPanel.setAttribute('hidden', '');
      toggleRiskButton.textContent = 'Lihat Strategi AI-Proof';
      toggleRiskButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Accordion interactions with aria and smooth height animation
accordionItems.forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');
  const panel = item.querySelector('.accordion-content');
  if (!trigger || !panel) return;

  // ensure initial a11y state
  trigger.setAttribute('aria-expanded', 'false');

  trigger.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // close all
    accordionItems.forEach((i) => {
      i.classList.remove('active');
      const t = i.querySelector('.accordion-trigger');
      const p = i.querySelector('.accordion-content');
      if (t && p) {
        t.setAttribute('aria-expanded', 'false');
        p.style.maxHeight = '0px';
      }
    });

    if (!isActive) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      // set dynamic height for smooth transition
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
});

// Smooth scrolling for anchor links (respects reduced motion)
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href') || '';
    if (targetId.length > 1) {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = topbar?.offsetHeight || 70;
        const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: topOffset, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
      if (topbar?.classList.contains('active') && menuToggle) {
        topbar.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
      }
    }
  });
});

// Confetti effect on CTA click (skips if reduced motion)
const ctaButton = document.querySelector('[data-cta-primary]');
if (ctaButton && !prefersReducedMotion) {
  ctaButton.addEventListener('click', (event) => {
    event.preventDefault();
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    for (let i = 0; i < 40; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.setProperty('--i', i.toString());
      confettiContainer.appendChild(piece);
    }
    document.body.appendChild(confettiContainer);
    setTimeout(() => confettiContainer.remove(), 2000);
  });
}
