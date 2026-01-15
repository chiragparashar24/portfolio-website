// =======================================
// Smooth scroll + animation re-trigger
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        // Reset animations inside section
        target.querySelectorAll(".fade-in").forEach(el => {
            el.classList.remove("visible");
        });
        target.classList.remove("visible");

        target.scrollIntoView({ behavior: "smooth" });

        // Re-trigger with stagger
        setTimeout(() => {
            target.classList.add("visible");

            target.querySelectorAll(".fade-in").forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add("visible");
                }, i * 120);
            });
        }, 300);
    });
});

// =======================================
// Scroll-based fade-in (default behavior)
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
// Contact form submit + Thank You modal
// =======================================
const form = document.getElementById("contactForm");
const thankYouModal = document.getElementById("thankYouModal");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                form.reset();
                thankYouModal.classList.add("show");
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch {
            alert("Network error. Please try again.");
        }
    });
}

// =======================================
// Modal close handlers
// =======================================
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        thankYouModal.classList.remove("show");
    });
});

if (thankYouModal) {
    thankYouModal.addEventListener("click", (e) => {
        if (e.target === thankYouModal) {
            thankYouModal.classList.remove("show");
        }
    });
}
