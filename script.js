// =======================================
// Smooth scroll + animation re-trigger
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth" });
    });
});

// =======================================
// Scroll-based fade-in animations
// =======================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// =======================================
// Thank You popup (NO network logic here)
// =======================================
const form = document.getElementById("contactForm");
const modal = document.getElementById("thankYouModal");

if (form) {
    form.addEventListener("submit", () => {
        setTimeout(() => {
            form.reset();
            modal.classList.add("show");
        }, 400);
    });
}

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => modal.classList.remove("show"));
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
});
