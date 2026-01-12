// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Resume Modal
const openResume = document.getElementById("openResume");
const closeResume = document.getElementById("closeResume");
const resumeModal = document.getElementById("resumeModal");

openResume.onclick = () => resumeModal.classList.add("show");
closeResume.onclick = () => resumeModal.classList.remove("show");

// Contact Form AJAX + Success Modal
const form = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");
const closeSuccess = document.getElementById("closeSuccess");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        form.reset();
        successModal.classList.add("show");
    }
});

closeSuccess.onclick = () => successModal.classList.remove("show");
