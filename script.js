// =======================================
// Smooth scroll
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// =======================================
// Fade-in animations
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
// Show Thank You popup after redirect
// =======================================
const params = new URLSearchParams(window.location.search);
const modal = document.getElementById("thankYouModal");

if (params.get("success") === "true" && modal) {
    modal.classList.add("show");

    // Clean URL (remove ?success=true)
    window.history.replaceState({}, document.title, window.location.pathname);
}

// =======================================
// Modal close
// =======================================
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => modal.classList.remove("show"));
});

modal?.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
});
