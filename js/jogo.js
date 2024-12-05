const imagensArtistas = [  //pegando as imagens//
    "img/dfideliz_j.png",
    "img/future_j.png",
    "img/ghard_j.png",
    "img/kendrick_j.png",
    "img/ngc_j.png",
    "img/tyler_j.png"
];


let cartasImagens = imagensArtistas.concat(imagensArtistas);  // duplicando as imagens 

cartasImagens.sort(() => 0.5 - Math.random());  //função que embaralha as cartas

const tabuleiroJogo = document.getElementById('tabuleiro');
let primeiraCarta = null; 
let segundaCarta = null;
let bloquearTabuleiro = false;  //bloqueia o tabuleiro para jogador não virar carta
let cartasCorrespondidas = 0;  //conta os pares certos


function criarTabuleiro() {
    cartasImagens.forEach((imagem, indice) => {
        const carta = document.createElement('div');  //cria uma div pra cada carta
        carta.classList.add('carta');
        carta.dataset.indice = indice;
        carta.innerHTML = `<img src="${imagem}" alt="Artista">`;  //coloca a imagem
        carta.addEventListener('click', virarCarta);
        tabuleiroJogo.appendChild(carta);  //adiciona a carta no tabuleiro
    });
}


function virarCarta() {
    if (bloquearTabuleiro) return;
    if (this === primeiraCarta) return;  //seclicar duas vezes na carta virada nada acontece

    this.classList.add('virada');

    if (!primeiraCarta) {
        primeiraCarta = this;  //armazena carta1
        return;
    }

    segundaCarta = this;  //armazena carta2
    bloquearTabuleiro = true;

    verificarCorrespondencia();
}

// Verificar se as cartas são iguais
function verificarCorrespondencia() {
    let corresponde = primeiraCarta.innerHTML === segundaCarta.innerHTML;  //compara as imgs das cartas

    if (corresponde) {   
        desativarCartas();  //se carta igual, será desativada
        cartasCorrespondidas += 2;  //contabiliza

        if (cartasCorrespondidas === cartasImagens.length) {   //se todas as cartas certas, aparece a mensagem
            document.getElementById('mensagem').classList.remove('oculto');
        }
    } else {
        desvirarCartas();
    }
}


function desativarCartas() {   //se carta igual desativa
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
    resetarTabuleiro();
}

// Virar as cartas de volta se não forem iguais
function desvirarCartas() {
    setTimeout(() => {   // atraso para virar a cartas
        primeiraCarta.classList.remove('virada');  
        segundaCarta.classList.remove('virada');
        resetarTabuleiro();
    }, 1000);
}


function resetarTabuleiro() {  // reseta tabuleiro a cada jogada
    [primeiraCarta, segundaCarta, bloquearTabuleiro] = [null, null, false];
}

criarTabuleiro();  //inicia tudo
