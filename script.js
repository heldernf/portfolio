const menuIcon = document.getElementById("menu-trigger");
const optionsBox = document.getElementById("menu-options");
const options = document.querySelectorAll(".options");
const main = document.querySelector("main");
const active = document.getElementById("active");
const sections = document.querySelectorAll("section");

// NÃO DEIXA O MENU BUGAR SE ELE ESTIVER ABERTO E OCORRER UM resize para 600px e vice e verso
window.addEventListener('resize', function () {
    if (window.innerWidth == 600) {
        optionsBox.classList.remove('visible')
        optionsBox.classList.add('invisible')
        menuIcon.classList.remove('animeMenu')
    }
});

// ABRE E FECHA
function toggleMenu() {
    if (window.innerWidth < 600) {
        if (optionsBox.classList.contains('invisible')) {
            optionsBox.classList.remove('invisible');
            optionsBox.classList.add('visible');

            menuIcon.classList.add('animeMenu')
        } else {
            optionsBox.classList.remove('visible');
            optionsBox.classList.add('invisible');

            menuIcon.classList.remove('animeMenu')
        }
    }
}
menuIcon.addEventListener('click', toggleMenu);

// ADD UM ID ESTILIZADO COM UMA ANIMAÇÃO NO CSS PARA AS OPÇÕES DO MENU
function activeOption(index) {
    options.forEach(option => {
        option.removeAttribute('id');
    });

    options[index].id = 'active';
}

// FECHA O MENU QUANDO CLICA EM UMA DAS OPÇÕES DELE
options.forEach((option, index) => {
    option.addEventListener('click', function () {
        toggleMenu();
        activeOption(index);
    });
});

// FECHA O MENU QUANDO CLICA NO MAIN
main.addEventListener('click', function () {
    if (optionsBox.classList.contains('visible')) {
        toggleMenu();
    }
});

// ATUALIZA O LINK DO MENU QUE ESTÁ ATIVO
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

// SLIDE FUNCTIONS ---- SLIDE FUNCTIONS ---- SLIDE FUNCTIONS
const firstImg = document.querySelectorAll(".first-img-slide");
const positionSlide = {};

//MARCA OS BACKGROUND DOS BOTÕES DO SLIDE
function activeBackground(i) {
    const allBtnSlideCurrent = firstImg[i].parentNode.querySelector('.slide-control').querySelectorAll('.slide-button');
    
    allBtnSlideCurrent.forEach(btn => {
        btn.style.backgroundColor = 'transparent';
    });
    
    let nome = 'slide' + i;
    if (positionSlide[nome] == -1) {
        allBtnSlideCurrent[2].style.backgroundColor = 'white'
    } else {
        allBtnSlideCurrent[positionSlide[nome]].style.backgroundColor = 'white'
    }
}

// PASSA IMAGENS AUTOMATICAMENTE
function moveSlide(nome, i) {
    if (positionSlide[nome] == 0) {
        firstImg[i].style.marginLeft = "0%";
    } else if (positionSlide[nome] == 1) {
        firstImg[i].style.marginLeft = "-100%";
    } else {
        positionSlide[nome] = -1;

        firstImg[i].style.marginLeft = "-200%";
    }
}

function icrementoSlide() {
    for (let i = 0; i < firstImg.length; i++) {
        let nome = 'slide' + i;

        if (positionSlide[nome] == undefined) {
            positionSlide[nome] = 1;
        } else {
            positionSlide[nome]++;
        }
        
        moveSlide(nome, i);
        activeBackground(i);
    }
}
setInterval(icrementoSlide, 8000);

// PASSA IMAGENS DO SLIDE CLICANDO
const btnSlide = document.querySelectorAll(".slide-button");
btnSlide.forEach((button, index) => {
    button.addEventListener('click', function () {
        const allBoxProjeto = document.querySelectorAll('.box-projeto');
        const currentBoxProjeto = button.closest('.box-projeto');
        const indexCurrentBoxProjeto = Array.from(allBoxProjeto).indexOf(currentBoxProjeto);

        const nome = 'slide' + indexCurrentBoxProjeto;
        const selectPosition = index % 3;
        positionSlide[nome] = selectPosition;
        moveSlide(nome, indexCurrentBoxProjeto);
        activeBackground(indexCurrentBoxProjeto);
    });
});

// LOAD AO ENVIAR O FORMULÁRIO
const form = document.querySelector("form")

form.addEventListener('submit', function () {
    const body = document.querySelector("body");
    const div = document.createElement("div");

    body.appendChild(div);
    body.style.overflow = 'hidden';
    div.classList.add('load');
});