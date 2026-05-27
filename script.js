/* ============================================================
   CHIRAG PARASHAR — PORTFOLIO JAVASCRIPT
   Pure vanilla JS — no frameworks, no dependencies
   ============================================================ */

(function () {
    'use strict';

    // ---------- Loading Screen ----------
    const loadingScreen = document.getElementById('loading-screen');
    function hideLoader() {
        loadingScreen.classList.add('hidden');
    }
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 400);
    } else {
        window.addEventListener('load', () => setTimeout(hideLoader, 400));
    }

    // ---------- Particle Background ----------
    (function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        let w, h, particles, raf;
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 35 : 65;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 1.5 + 0.5,
                    hue: Math.random() < 0.5 ? 190 : 270
                });
            }
        }


        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, 0.5)`;
                ctx.fill();
            }
            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `hsla(${(particles[i].hue + particles[j].hue) / 2}, 85%, 60%, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();
        window.addEventListener('resize', () => { resize(); createParticles(); });
    })();

    // ---------- Theme Toggle ----------
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const storedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);

    themeToggle.addEventListener('click', () => {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }


    // ---------- Navbar: Scroll, Active Link, Mobile Menu ----------
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    // Scrolled state
    function checkScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });

    // Active section highlight
    function updateActiveNav() {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.getAttribute('id');
        });
        allNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

    // ---------- Smooth Scrolling ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Typing Animation ----------
    (function initTyping() {
        const roles = [
            'AI/ML Engineer',
            'Python Developer',
            'Software Engineer',
            'Microsoft Learn Student Ambassador',
            'Open Source Contributor'
        ];
        const el = document.getElementById('typed-text');
        if (!el) return;
        let roleIndex = 0, charIndex = 0, deleting = false;

        function type() {
            const current = roles[roleIndex];
            if (!deleting) {
                el.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    setTimeout(() => { deleting = true; type(); }, 1500);
                    return;
                }
                setTimeout(type, 70);
            } else {
                el.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(type, 400);
                    return;
                }
                setTimeout(type, 35);
            }
        }
        setTimeout(type, 600);
    })();


    // ---------- Scroll Reveal (IntersectionObserver) ----------
    (function initReveal() {
        const reveals = document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right');
        if (!reveals.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '-40px' });

        reveals.forEach(el => observer.observe(el));
    })();

    // ---------- Skill Bar Animation ----------
    (function initSkillBars() {
        const bars = document.querySelectorAll('.skill-progress');
        if (!bars.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    bar.style.setProperty('--target-width', width + '%');
                    bar.classList.add('animated');
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.3 });

        bars.forEach(bar => observer.observe(bar));
    })();

    // ---------- Animated Counters ----------
    (function initCounters() {
        const counters = document.querySelectorAll('.counter');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));

        function animateCounter(el, target) {
            const duration = 1600;
            const start = performance.now();
            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = target;
            }
            requestAnimationFrame(update);
        }
    })();

    // ---------- Project Filtering & Search ----------
    (function initProjects() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('project-search');
        const cards = document.querySelectorAll('.project-card');
        const noResults = document.getElementById('no-results');
        let activeFilter = 'all';

        function filterCards() {
            const query = searchInput.value.trim().toLowerCase();
            let visible = 0;

            cards.forEach(card => {
                const categories = card.getAttribute('data-category') || '';
                const tags = card.getAttribute('data-tags') || '';
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.project-body > p')?.textContent.toLowerCase() || '';

                const matchFilter = activeFilter === 'all' || categories.includes(activeFilter);
                const matchSearch = !query || title.includes(query) || desc.includes(query) || tags.includes(query);

                if (matchFilter && matchSearch) {
                    card.classList.remove('hidden');
                    visible++;
                } else {
                    card.classList.add('hidden');
                }
            });

            noResults.hidden = visible > 0;
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.getAttribute('data-filter');
                filterCards();
            });
        });

        searchInput.addEventListener('input', filterCards);
    })();


    // ---------- Contact Form Validation ----------
    (function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const fields = {
            name: { el: form.querySelector('#name'), error: document.getElementById('name-error'), validate: v => v.trim().length >= 2 ? '' : 'Please enter your full name.' },
            email: { el: form.querySelector('#email'), error: document.getElementById('email-error'), validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email.' },
            subject: { el: form.querySelector('#subject'), error: document.getElementById('subject-error'), validate: v => v.trim().length >= 3 ? '' : 'Subject must be at least 3 characters.' },
            message: { el: form.querySelector('#message'), error: document.getElementById('message-error'), validate: v => v.trim().length >= 10 ? '' : 'Message must be at least 10 characters.' }
        };

        const status = document.getElementById('form-status');

        // Live clear errors on input
        Object.values(fields).forEach(f => {
            f.el.addEventListener('input', () => {
                f.el.classList.remove('error');
                f.error.textContent = '';
            });
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let valid = true;

            Object.values(fields).forEach(f => {
                const msg = f.validate(f.el.value);
                if (msg) {
                    f.el.classList.add('error');
                    f.error.innerHTML = '<i class="fas fa-circle-exclamation"></i> ' + msg;
                    valid = false;
                } else {
                    f.el.classList.remove('error');
                    f.error.textContent = '';
                }
            });

            if (!valid) return;

            // Compose mailto as fallback (no backend)
            const subject = encodeURIComponent('[Portfolio] ' + fields.subject.el.value.trim());
            const body = encodeURIComponent(
                'Name: ' + fields.name.el.value.trim() +
                '\nEmail: ' + fields.email.el.value.trim() +
                '\n\n' + fields.message.el.value.trim()
            );
            window.location.href = 'mailto:chiragparashar1812@gmail.com?subject=' + subject + '&body=' + body;

            status.className = 'form-status success';
            status.innerHTML = '<i class="fas fa-circle-check"></i> Your email client just opened — thanks!';
            form.reset();
            setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
        });
    })();

    // ---------- Back to Top ----------
    (function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (!btn) return;

        function check() {
            btn.classList.toggle('visible', window.scrollY > 500);
        }
        check();
        window.addEventListener('scroll', check, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    // ---------- GitHub Stats (Live fetch) ----------
    (function initGitHubStats() {
        const reposEl = document.getElementById('gh-repos');
        const followersEl = document.getElementById('gh-followers');
        const starsEl = document.getElementById('gh-stars');
        if (!reposEl) return;

        fetch('https://api.github.com/users/chiragparashar24')
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                if (!data) return;
                reposEl.textContent = (data.public_repos || 0) + '+';
                followersEl.textContent = (data.followers || 0) + '+';
            })
            .catch(() => {});

        fetch('https://api.github.com/users/chiragparashar24/repos?per_page=100&sort=updated')
            .then(r => r.ok ? r.json() : [])
            .then(repos => {
                const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
                starsEl.textContent = stars + '+';
            })
            .catch(() => {});
    })();

})();
