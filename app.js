const listaDeBotoes = document.querySelectorAll('.musicas__conteudo');
const listaDeSons = document.querySelectorAll('.musica');

function TocarSons(numero) {
    if (listaDeSons[numero].paused) {
        listaDeSons.forEach((SomTocando) => {
            SomTocando.pause()
            SomTocando.currentTime = 0;
        });
        listaDeSons[numero].play()
    } else {
        listaDeSons[numero].pause()
    }
}

const musicaTune = document.querySelector('.mortedotune');
const musicaConexoes = document.querySelector('.conexoes');
const musicaMaquina = document.querySelector('.maquina');
const musicaFlow = document.querySelector('.flow');

musicaTune.addEventListener('click', () => {
    TocarSons(0)
})

musicaConexoes.addEventListener('click', () => {
    TocarSons(1)
})

musicaMaquina.addEventListener('click', () => {
    TocarSons(2)
})

musicaFlow.addEventListener('click', () => {
    TocarSons(3)
})