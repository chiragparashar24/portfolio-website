// ---------- Smooth scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ---------- Scroll animations ----------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ---------- MODAL CONTROL ----------
function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("show");
    });
}

// Open Resume Modal
document.getElementById("openResume").addEventListener("click", () => {
    closeAllModals();
    document.getElementById("resumeModal").classList.add("show");
});

// Close buttons
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
});

// Close modal on background click
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => {
        if (e.target === modal) closeAllModals();
    });
});

// ---------- CONTACT FORM ----------
const form = document.getElementById("contactForm");

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
            closeAllModals();
            document.getElementById("successModal").classList.add("show");
        } else {
            alert("Submission failed. Please try again.");
        }
    } catch {
        alert("Network error. Please try again.");
    }
});
