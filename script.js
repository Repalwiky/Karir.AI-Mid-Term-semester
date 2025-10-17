:root {
    --color-primary: #4A65F6;
    --color-secondary: #00C897;
    --color-accent: #FF6B6B;
    --color-innovation: #9C27B0;
    --color-bg: #F8F9FA;
    --color-surface: #ffffff;
    --color-text: #1B1E36;
    --color-muted: #5D6075;
    --shadow-soft: 0 20px 50px rgba(74, 101, 246, 0.15);
    --shadow-card: 0 18px 40px rgba(24, 45, 124, 0.14);
    --radius-lg: 24px;
    --radius-md: 18px;
    --radius-sm: 12px;
    --topbar-offset: 80px;
    font-size: 16px;
}

/* Reset */
* { box-sizing: border-box; margin: 0; padding: 0; }
html:focus-within { scroll-behavior: smooth; }
body {
    font-family: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--color-text);
    background:
        radial-gradient(circle at top right, rgba(74, 101, 246, 0.08), transparent 55%),
        radial-gradient(circle at bottom left, rgba(156, 39, 176, 0.08), transparent 60%),
        var(--color-bg);
    line-height: 1.6;
    min-height: 100vh;
}
main { overflow: hidden; }
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }

/* Skip link */
.skip-link {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
.skip-link:focus-visible {
    left: 1rem;
    top: 1rem;
    width: auto;
    height: auto;
    padding: .5rem .75rem;
    background: var(--color-surface);
    border: 2px solid var(--color-primary);
    border-radius: 10px;
    z-index: 1000;
}

/* Make anchored sections account for sticky header */
[id] { scroll-margin-top: var(--topbar-offset); }

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 5vw;
    position: sticky;
    top: 0;
    background: rgba(248, 249, 250, 0.9);
    backdrop-filter: blur(18px);
    z-index: 10;
    border-bottom: 1px solid rgba(74, 101, 246, 0.08);
}
.topbar.scrolled { box-shadow: 0 12px 24px rgba(15, 24, 60, 0.08); background: rgba(248, 249, 250, 0.95); }

.logo {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.03em;
}
.logo span { color: var(--color-primary); }

.nav-links { display: flex; gap: 1.5rem; font-weight: 600; }
.nav-links a {
    color: var(--color-muted);
    border-radius: 10px;
    padding: .25rem .4rem;
    outline-offset: 2px;
    transition: color 0.2s ease, background-color 0.2s ease;
}
.nav-links a:hover, .nav-links a:focus-visible { color: var(--color-primary); text-decoration: none; background: rgba(74,101,246,0.08); }

.actions { display: flex; gap: 0.75rem; }

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: .5rem;
    border-radius: 10px;
}
.menu-toggle:focus-visible { outline: 3px solid rgba(74,101,246,.5); outline-offset: 2px; }
.menu-toggle span {
    width: 1.5rem;
    height: 2px;
    background: var(--color-text);
    border-radius: 99px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.btn {
    border: none;
    border-radius: 999px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.btn:focus-visible { outline: 3px solid rgba(74,101,246,.45); outline-offset: 2px; }

.btn.primary {
    background: linear-gradient(135deg, var(--color-primary), #6C7BFF);
    color: #fff;
    box-shadow: var(--shadow-soft);
}
.btn.primary:hover { transform: translateY(-2px); box-shadow: 0 22px 55px rgba(74, 101, 246, 0.28); }

.btn.secondary { background: rgba(74, 101, 246, 0.12); color: var(--color-primary); }
.btn.secondary:hover { background: rgba(74, 101, 246, 0.18); }

.btn.tertiary { background: rgba(27, 30, 54, 0.08); color: var(--color-text); }
.btn.ghost { background: transparent; color: var(--color-text); }
.btn.pill {
    padding: 0.55rem 1.3rem;
    background: rgba(0, 200, 151, 0.15);
    color: var(--color-secondary);
    border-radius: 999px;
}

.hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    padding: 6rem 5vw 4rem;
    align-items: center;
}
.hero-content h1 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.2rem, 3vw + 1.5rem, 3.5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
}
.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 1rem;
}
.subtitle { color: var(--color-muted); max-width: 32rem; margin-bottom: 2rem; }
.cta-group { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.social-proof { display: flex; align-items: center; gap: 1rem; color: var(--color-muted); }
.avatars { display: flex; }
.avatar {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, rgba(74, 101, 246, 0.9), rgba(156, 39, 176, 0.9));
    color: #fff; font-weight: 700; display: flex; align-items: center; justify-content: center;
    border-radius: 50%; margin-left: -12px; border: 3px solid #fff;
}
.avatar:first-child { margin-left: 0; }

.hero-card {
    background: rgba(255, 255, 255, 0.88);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-card);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(74, 101, 246, 0.1);
}
.hero-card::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(145deg, rgba(74, 101, 246, 0.1), rgba(0, 200, 151, 0.12));
    pointer-events: none; opacity: 0.9;
}
.hero-card__header, .hero-card__body, .hero-card button { position: relative; z-index: 1; }
.hero-card__header {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;
}
.hero-card h2 { font-family: 'Inter', sans-serif; }
.badge {
    background: rgba(0, 200, 151, 0.18); color: var(--color-secondary);
    padding: 0.35rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600;
}

.future-item { margin-bottom: 1.5rem; }
.future-item:last-child { margin-bottom: 0; }
.label {
    font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-muted);
}
.value {
    font-size: 1.75rem; font-weight: 700; font-family: 'Inter', sans-serif; margin: 0.4rem 0;
}
.value--risk { color: var(--color-accent); }
.value--safe { color: var(--color-secondary); }
.hint { color: var(--color-muted); font-size: 0.95rem; }
.future-list { margin-top: 0.8rem; list-style: none; display: grid; gap: 0.5rem; color: var(--color-muted); }

.stats {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem; padding: 3rem 5vw;
}
.stat-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: var(--radius-md);
    padding: 2rem 1.75rem;
    box-shadow: 0 12px 30px rgba(15, 24, 60, 0.08);
    border: 1px solid rgba(74, 101, 246, 0.1);
}
.stat-card h3 { font-size: 2.4rem; font-family: 'Inter', sans-serif; margin-bottom: 0.6rem; }
.stat-card p { color: var(--color-muted); }

.section-header { text-align: center; max-width: 50rem; margin: 0 auto 3rem; }
.section-header h2 {
    font-size: clamp(2rem, 2vw + 1rem, 2.8rem); font-family: 'Inter', sans-serif; margin-bottom: 1rem;
}
.section-header .description { color: var(--color-muted); }

.future-proof { padding: 5rem 5vw 3rem; }
.pillars {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;
}
.pillar {
    background: rgba(255, 255, 255, 0.92); border-radius: var(--radius-md); padding: 2rem;
    position: relative; overflow: hidden; border: 1px solid rgba(27, 30, 54, 0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.pillar::before {
    content: ""; position: absolute; inset: 0; opacity: 0.4;
    background: linear-gradient(140deg, rgba(74, 101, 246, 0.18), transparent 65%);
}
.pillar[data-highlight="growth"]::before { background: linear-gradient(140deg, rgba(0, 200, 151, 0.18), transparent 65%); }
.pillar[data-highlight="innovation"]::before { background: linear-gradient(140deg, rgba(156, 39, 176, 0.22), transparent 65%); }
.pillar > * { position: relative; z-index: 1; }
.pillar:hover { transform: translateY(-6px); box-shadow: 0 22px 45px rgba(30, 38, 77, 0.18); }
.pillar h3 { font-family: 'Inter', sans-serif; margin-bottom: 0.75rem; }
.pillar p { color: var(--color-muted); margin-bottom: 1rem; }
.pillar ul { list-style: none; display: grid; gap: 0.6rem; color: var(--color-text); }

.timeline {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem; padding: 0 5vw 3rem;
}
.timeline-item {
    background: rgba(255, 255, 255, 0.92);
    border-radius: var(--radius-md);
    padding: 2rem;
    border: 1px solid rgba(74, 101, 246, 0.12);
    box-shadow: 0 12px 30px rgba(15, 24, 60, 0.05);
}
.step {
    width: 52px; height: 52px; border-radius: 16px;
    background: rgba(74, 101, 246, 0.12); color: var(--color-primary);
    font-weight: 700; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.2rem; font-family: 'Inter', sans-serif;
}
.timeline-item p { color: var(--color-muted); margin-bottom: 1rem; }
.tag {
    display: inline-block; padding: 0.4rem 0.85rem; border-radius: 999px;
    background: rgba(156, 39, 176, 0.15); color: var(--color-innovation); font-weight: 600; font-size: 0.8rem;
}

.insight {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 4rem 5vw;
}
.insight-card {
    background: rgba(255, 255, 255, 0.94); border-radius: var(--radius-lg); padding: 2.5rem;
    box-shadow: var(--shadow-card); border: 1px solid rgba(27, 30, 54, 0.05);
}
.insight-card h2 { font-family: 'Inter', sans-serif; margin-bottom: 1rem; }
.insight-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.insight-lede { color: var(--color-muted); margin-bottom: 1.8rem; }

.radar { display: grid; gap: 1rem; }
.radar-item {
    padding: 1rem 1.25rem; border-radius: var(--radius-sm);
    background: rgba(74, 101, 246, 0.08);
    display: flex; justify-content: space-between; align-items: center; font-weight: 600;
}
.radar-item[data-risk="tinggi"] { background: rgba(255, 107, 107, 0.12); color: var(--color-accent); }
.radar-item[data-risk="sedang"] { background: rgba(74, 101, 246, 0.12); color: var(--color-primary); }
.radar-item[data-risk="rendah"] { background: rgba(0, 200, 151, 0.15); color: var(--color-secondary); }
.radar-item small { color: inherit; font-weight: 500; }

.strategy {
    margin-top: 2rem; padding: 1.5rem; border-radius: var(--radius-md);
    background: rgba(0, 200, 151, 0.12); border: 1px solid rgba(0, 200, 151, 0.25); color: var(--color-text);
}
.strategy ul { list-style: disc inside; display: grid; gap: 0.6rem; }

.project-list { display: grid; gap: 1.5rem; }
.project {
    padding: 1.75rem; border-radius: var(--radius-md);
    background: rgba(74, 101, 246, 0.08); border: 1px solid rgba(74, 101, 246, 0.18);
}
.project h3 { font-family: 'Inter', sans-serif; margin-bottom: 0.5rem; }
.project p { color: var(--color-muted); margin-bottom: 0.9rem; }
.chip {
    padding: 0.35rem 0.75rem; border-radius: 999px;
    background: rgba(156, 39, 176, 0.12); color: var(--color-innovation); font-weight: 600; font-size: 0.8rem;
}

.pricing { padding: 5rem 5vw; }
.pricing-cards {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; align-items: stretch;
}
.price-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: var(--radius-lg);
    padding: 2.5rem 2rem;
    box-shadow: 0 20px 48px rgba(27, 30, 54, 0.12);
    border: 1px solid rgba(74, 101, 246, 0.15);
    display: flex; flex-direction: column; gap: 1.5rem;
}
.price-card h3 { font-family: 'Inter', sans-serif; }
.price { font-size: 2.4rem; font-family: 'Inter', sans-serif; }
.price span { font-size: 1rem; color: var(--color-muted); }
.price-card ul { list-style: none; display: grid; gap: 0.75rem; color: var(--color-muted); }
.price-card .btn { margin-top: auto; }

.price-card--featured {
    background: linear-gradient(150deg, rgba(74, 101, 246, 0.95), rgba(156, 39, 176, 0.92));
    color: #fff; transform: translateY(-20px);
}
.price-card--featured ul, .price-card--featured .price span { color: rgba(255, 255, 255, 0.85); }
.price-card--featured .btn.primary { background: rgba(255, 255, 255, 0.18); box-shadow: none; }
.price-card--featured .btn.primary:hover { background: rgba(255, 255, 255, 0.25); }
.ribbon {
    position: absolute; top: 20px; right: -45px; transform: rotate(45deg);
    background: var(--color-secondary); color: #fff; padding: 0.35rem 2.5rem;
    font-weight: 700; font-size: 0.75rem; letter-spacing: 0.1em;
}

.testimonial {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; padding: 5rem 5vw; align-items: center;
}
.testimonial-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 2.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-card);
}
.quote { font-size: 1.2rem; font-style: italic; color: var(--color-text); margin-bottom: 1.5rem; }
.person { display: flex; align-items: center; gap: 1rem; }

.testimonial-metrics {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;
}
.testimonial-metrics h3 { font-size: 2rem; font-family: 'Inter', sans-serif; }

.cta {
    margin: 0 5vw 5rem;
    background: linear-gradient(140deg, rgba(74, 101, 246, 0.95), rgba(0, 200, 151, 0.9));
    color: #fff;
    border-radius: var(--radius-lg);
    padding: 3rem 3.5rem;
    display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem;
    box-shadow: var(--shadow-card);
}
.cta .btn.primary { background: #fff; color: var(--color-primary); box-shadow: none; }

.faq { padding: 5rem 5vw 6rem; }
.accordion {
    max-width: 760px; margin: 0 auto; display: grid; gap: 1rem;
}
.accordion-item {
    background: rgba(255, 255, 255, 0.92);
    border-radius: var(--radius-md);
    border: 1px solid rgba(74, 101, 246, 0.12);
    overflow: hidden;
}
.accordion-trigger {
    width: 100%; text-align: left; padding: 1.2rem 1.5rem; background: none; border: none;
    font-weight: 600; font-size: 1.05rem; font-family: 'Inter', sans-serif; cursor: pointer; position: relative;
}
.accordion-trigger:focus-visible { outline: 3px solid rgba(74,101,246,.4); outline-offset: 2px; }
.accordion-trigger::after {
    content: '+'; position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); font-size: 1.5rem; transition: transform 0.2s ease;
}
.accordion-item.active .accordion-trigger::after { transform: translateY(-50%) rotate(45deg); }
.accordion-content {
    max-height: 0; overflow: hidden; transition: max-height 0.3s ease; padding: 0 1.5rem;
}
.accordion-item.active .accordion-content { /* height is set dynamically via JS for smooth animation */ }
.accordion-content p { color: var(--color-muted); margin: 0.75rem 0 1.2rem; }

.footer {
    background: #0F1635; color: rgba(255, 255, 255, 0.85);
    padding: 3.5rem 5vw; display: grid; gap: 2rem;
}
.footer .logo span { color: #fff; }
.footer-links {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;
}
.footer-links h4 { font-family: 'Inter', sans-serif; margin-bottom: 1rem; }
.footer-links a { display: block; color: rgba(255, 255, 255, 0.65); margin-bottom: 0.4rem; }
.footer-copy {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem; font-size: 0.85rem; color: rgba(255, 255, 255, 0.55);
}

/* Confetti */
.confetti-container {
    position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 999;
}
.confetti-piece {
    position: absolute; top: -10px; left: calc(2.5% * var(--i));
    width: 8px; height: 14px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-innovation));
    opacity: 0; animation: confetti-fall 1.6s ease-out forwards;
}
.confetti-piece:nth-child(3n) { background: linear-gradient(135deg, var(--color-secondary), #7EF6C4); }
.confetti-piece:nth-child(4n) { background: linear-gradient(135deg, var(--color-accent), #FFD1D1); }
@keyframes confetti-fall {
    0% { opacity: 0; transform: translateY(0) rotate(0deg); }
    20% { opacity: 1; }
    100% { opacity: 0; transform: translateY(110vh) rotate(180deg); }
}

/* Responsive */
@media (max-width: 960px) {
    .nav-links, .actions { display: none; }
    .menu-toggle { display: flex; }
    .topbar.active .nav-links, .topbar.active .actions { display: flex; }
    .topbar.active {
        flex-wrap: wrap; gap: 1rem; align-items: flex-start;
    }
    .topbar.active .nav-links {
        width: 100%; order: 3; flex-direction: column; gap: 1rem;
    }
    .topbar.active .actions {
        order: 2; width: 100%; justify-content: flex-start;
    }
}

@media (max-width: 720px) {
    .hero { padding-top: 7rem; }
    .hero-card { order: -1; }
    .cta {
        margin: 0 5vw 4rem;
        padding: 2.5rem; flex-direction: column; align-items: flex-start;
    }
}

@media (max-width: 520px) {
    :root { font-size: 15px; }
    .hero-card, .stat-card, .pillar, .timeline-item, .insight-card, .project, .price-card, .testimonial-card, .faq .accordion-item {
        border-radius: 18px;
    }
    .btn { width: 100%; justify-content: center; }
    .cta-group { flex-direction: column; }
}

/* Mobile menu icon animation */
.menu-toggle.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    html:focus-within { scroll-behavior: auto; }
    * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}
