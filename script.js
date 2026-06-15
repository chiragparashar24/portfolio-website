// =======================================
// Theme Toggle
// =======================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "🌙";
} else {
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "🌙" : "☀️";
});

// =======================================
// Smooth Scroll Navigation
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// =======================================
// Fade-in on Scroll
// =======================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// =======================================
// Form Validation
// =======================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("blur", validateInput);
    });

    contactForm.addEventListener("submit", (e) => {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput.call(input)) isValid = false;
        });
        if (!isValid) e.preventDefault();
    });
}

function validateInput() {
    const isEmpty = this.hasAttribute("required") && !this.value.trim();
    const isInvalidEmail = this.type === "email" && this.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);

    if (isEmpty || isInvalidEmail) {
        this.style.borderColor = "#ef4444";
        return false;
    } else {
        this.style.borderColor = "";
        return true;
    }
}

// =======================================
// Thank You Modal
// =======================================
const modal = document.getElementById("thankYouModal");
const params = new URLSearchParams(window.location.search);

if (params.get("success") === "true" && modal) {
    modal.classList.add("show");
    window.history.replaceState({}, document.title, window.location.pathname);
}

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => modal?.classList.remove("show"));
});

modal?.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
});
