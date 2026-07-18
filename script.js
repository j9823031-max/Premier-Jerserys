// Premier Jerseys JavaScript

// Welcome message
window.addEventListener("load", () => {
    alert("⚽ Welcome to Premier Jerseys!");
});

// Shop Now buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature is coming soon! Thank you for shopping at Premier Jerseys.");
    });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
