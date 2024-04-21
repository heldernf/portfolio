// ABRE E FECHA
const menuIcon = document.getElementById("menu-trigger");
const optionsBox = document.getElementById("menu-options");
function toggleMenu() {
    if (window.innerWidth < 600) {
        optionsBox.classList.toggle("open");
        menuIcon.classList.toggle("animeMenu");
    }
}
menuIcon.addEventListener('click', toggleMenu);

// FECHA O MENU QUANDO CLICA NO MAIN
const main = document.querySelector("main");
main.addEventListener('click', function () {
    if (optionsBox.classList.contains("open")) {
        toggleMenu();
    }
});

// ADD UM ID ESTILIZADO COM UMA ANIMAÇÃO NO CSS PARA AS OPÇÕES DO MENU
const options = document.querySelectorAll(".options-menu");
function activeOption(index) {
    options.forEach(option => {
        option.removeAttribute("id");
    });

    options[index].id = "active-option-menu";
}

// FECHA O MENU QUANDO CLICA EM UMA DAS OPÇÕES DELE
options.forEach((option, index) => {
    option.addEventListener('click', function () {
        toggleMenu()
        activeOption(index);
    });
});

// ATUALIZA O LINK DO MENU QUE ESTÁ ATIVO
const sections = document.querySelectorAll("section");
function attOption() {
    setTimeout(function () {
        sections.forEach((section, index) => {
            let topo = section.getBoundingClientRect().top;
            let janela = window.innerHeight;

            if (topo < janela - 450) {
                activeOption(index);
            }
        });
    }, 200);
}
window.addEventListener('scroll', attOption);