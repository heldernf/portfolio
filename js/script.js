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
const slideBox = document.querySelectorAll('.slide-box');
const imgPorSlide = slideBox[0].querySelectorAll('img').length;
let nome;
const positionSlide = {};
for (let i = 0; i < firstImg.length; i++) {
    nome = 'slide' + i;
    positionSlide[nome] = 0;
}

//MARCA OS BACKGROUND DOS BOTÕES DO SLIDE
function activeBackground(i) {
    const allBtnSlideCurrent = firstImg[i].parentNode.querySelector('.slide-control').querySelectorAll('.slide-button');

    allBtnSlideCurrent.forEach(btn => {
        btn.style.backgroundColor = 'transparent';
    });

    nome = 'slide' + i;
    allBtnSlideCurrent[positionSlide[nome]].style.backgroundColor = 'white'
}

// PASSA A IMAGEM DO SLIDE
function moveSlide(nome, i) {
    if (positionSlide[nome] == 0) {
        firstImg[i].style.marginLeft = "0%";
    } else if (positionSlide[nome] == 1) {
        firstImg[i].style.marginLeft = "-100%";
    } else {
        firstImg[i].style.marginLeft = "-200%";
    }
}

// PASSA IMAGENS AUTOMATICAMENTE
function icrementoSlide() {
    lastDeltaX = 0;

    for (let i = 0; i < firstImg.length; i++) {
        nome = 'slide' + i;

        positionSlide[nome]++;

        if (positionSlide[nome] == imgPorSlide) {
            positionSlide[nome] = 0;
        }

        moveSlide(nome, i);
        activeBackground(i);
    }
}
setInterval(icrementoSlide, 8000);

// PASSA IMAGENS DO SLIDE CLICANDO NOS BOTÕES
const btnSlide = document.querySelectorAll(".slide-button");
btnSlide.forEach((button, index) => {
    button.addEventListener('click', function () {
        const allBoxProjeto = document.querySelectorAll('.box-projeto');
        const currentBoxProjeto = button.closest('.box-projeto');
        const indexCurrentBoxProjeto = Array.from(allBoxProjeto).indexOf(currentBoxProjeto);

        nome = 'slide' + indexCurrentBoxProjeto;
        const selectPosition = index % 3;
        positionSlide[nome] = selectPosition;
        moveSlide(nome, indexCurrentBoxProjeto);
        activeBackground(indexCurrentBoxProjeto);
    });
});

// PASSA IMAGENS DO SLIDE COM TOUCH
let startX, currentX, deltaX, margin, lastDeltaX;
slideBox.forEach(slide => {
    slide.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    slide.addEventListener('touchmove', function (e) {
        const indexCurrentSlideBox = Array.from(slideBox).indexOf(this);
        currentX = e.touches[0].clientX;
        deltaX = currentX - startX;

        if (deltaX >= -20 && deltaX <= 20) {
            nome = 'slide' + indexCurrentSlideBox;

            margin = deltaX - (positionSlide[nome] * 100);
            firstImg[indexCurrentSlideBox].style.marginLeft = `${margin}%`;
            lastDeltaX = deltaX;
        }
    });

    slide.addEventListener('touchend', function () {
        const indexCurrentSlideBox = Array.from(slideBox).indexOf(this);
        nome = 'slide' + indexCurrentSlideBox;
        if (lastDeltaX < 0 && positionSlide[nome] < imgPorSlide - 1) {
            positionSlide[nome]++;

            moveSlide(nome, indexCurrentSlideBox);
            activeBackground(indexCurrentSlideBox);
        } else if (lastDeltaX > 0 && positionSlide[nome] > 0) {
            positionSlide[nome]--;

            moveSlide(nome, indexCurrentSlideBox);
            activeBackground(indexCurrentSlideBox);
        } else {
            moveSlide(nome, indexCurrentSlideBox);
        }

        lastDeltaX = 0;
    });
});

// LOAD AO ENVIAR O FORMULÁRIO
const form = document.getElementById("form-contato");

form.addEventListener('submit', function () {
    const body = document.querySelector("body");
    const div = document.createElement("div");

    body.appendChild(div);
    body.style.overflow = 'hidden';
    div.classList.add('load');
});