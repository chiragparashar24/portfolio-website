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
// Default scroll-based fade-in
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
// Contact form submit
// =======================================
const form = document.getElementById("contactForm");

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
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Submission failed. Try again.");
            }
        } catch {
            alert("Network error. Please try again.");
        }
    });
}
