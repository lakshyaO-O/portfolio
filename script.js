// ----- Mobile menu -----
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// ----- Gentle scroll-reveal effects -----
const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
} else {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
}
