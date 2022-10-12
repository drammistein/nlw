// variável para pegar a quantidade de slide--item
let totalSlides = document.querySelectorAll('.slider--item').length;

let currentSlide = 0; // vai começar pelo slide 0

document.querySelector('.slider--width').style.width = 
    `calc(90vw * ${totalSlides})`;

// Corrigindo a posição dos controles pegando como base a classe slider
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    //vai pegar a variável currentSlide e diminuir
    currentSlide--;
    if(currentSlide < 0) { 
        currentSlide = totalSlides - 1;
    }
    // Função para atualizar e fazer funcionar o slide
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    } 
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft =
        `-${newMargin}px`;
}
// Timer para fazer o processo da mudança altomático
setInterval(goNext, 5000); // a cada 2 segundos muda 