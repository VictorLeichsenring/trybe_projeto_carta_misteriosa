const input = document.getElementById('carta-texto');
const btnCriar = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');

function criarCarta() {
    cartaGerada.innerText = '';
    const text = input.value;
    const listText = text.split(' ');
    for (let i = 0; i < listText.length; i += 1) {
        const elementText = listText[i];
        const element = document.createElement('span');
        element.innerText = elementText;
        cartaGerada.appendChild(element);
    }
}

btnCriar.addEventListener('click', criarCarta);