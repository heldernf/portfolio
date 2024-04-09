const fadeElements = document.querySelectorAll(".fade-up, .fade-right, .fade-left, .fade-boom");

function fade() {
    fadeElements.forEach(fade => {
        const fadeType = fade.classList.contains("fade-up") ? "up" : fade.classList.contains("fade-right") ? "right" : fade.classList.contains("fade-left") ? "left" : "boom";

        if (fade.getBoundingClientRect().top - document.querySelector("header").offsetHeight <= 830) {
            fade.style.animation = `${fadeType} .8s cubic-bezier(0.34, 1.4, 0.64, 1) 1 forwards`;
        }
    });
}
window.addEventListener("scroll", fade);
document.addEventListener("DOMContentLoaded", fade);