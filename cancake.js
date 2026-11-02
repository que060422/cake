
const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
    navMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after clicking a navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Close menu when clicking outside the navbar
document.addEventListener("click", (event) => {
    if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeMenu();
    }
});

// Close menu with Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
    }
});

// Reset mobile menu when returning to desktop layout
window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});



//faqs

/* FAQ ACCORDION */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");

            const faqButton = faq.querySelector(".faq-question");
            const faqIcon = faq.querySelector(".faq-icon");

            faqButton.setAttribute("aria-expanded", "false");
            faqIcon.textContent = "+";
        });

        if (!isOpen) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
            icon.textContent = "−";
        }
    });
});

