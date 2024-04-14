const fadeElements = document.querySelectorAll(".fade-up, .fade-right, .fade-left, .fade-boom");
let counter = 0;
window.innerWidth < 500 ? lack = 700 : lack = 750;

function stopEventListenerScroll () {
    window.removeEventListener("scroll", fade);
}

function fade() {
    fadeElements.forEach(fade => {
        const fadeType = fade.classList.contains("fade-up") ? "up" : fade.classList.contains("fade-right") ? "right" : fade.classList.contains("fade-left") ? "left" : "boom";

        if (fade.getBoundingClientRect().top - document.querySelector("header").offsetHeight <= lack && getComputedStyle(fade).getPropertyValue('animation-name') != fadeType) {
            fade.style.animation = `${fadeType} .8s cubic-bezier(0.34, 1.4, 0.64, 1) 1 forwards`;
            
            counter++;
            counter == fadeElements.length && stopEventListenerScroll();
        }
    });
}
window.addEventListener("scroll", fade);
document.addEventListener("DOMContentLoaded", fade);