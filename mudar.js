//Fazer esta função 2º (Troca a imagem do sorvete grande)
function imgSlider (anything) {
    document.querySelector('.starbucks').src = anything;
}
// Fazer esta função 3º (Troca a cor do circulo)
function changeCircleColor(color){
    const circulo = document.querySelector('.circulo')
    circulo.style.background = color;
}

// Fazer esta função 1º (Altera o estado Ativo/Desativo)
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle'); //Cria uma variavel para selecionar a 
    var links = document.querySelector('.links'); //Cria uma variavel para selecionar a classe 
    menuToggle.classList.toggle('active'); //troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active');
}
    
