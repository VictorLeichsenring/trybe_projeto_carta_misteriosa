const input = document.getElementById('carta-texto');
const btnCriar = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];


function generateRandonInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function changeElement(event) {
  const element= event.target;
  while (element.classList.length > 0) {
    element.classList.remove(element.classList.item(0));
  }
  const classStyle = grupoEstilo[generateRandonInt(0, grupoEstilo.length)];
  const classSize = grupoTamanho[generateRandonInt(0, grupoTamanho.length)];
  const classRotation = grupoRotacao[generateRandonInt(0, grupoRotacao.length)];
  const classInclination = grupoInclinacao[generateRandonInt(0, grupoInclinacao.length)];
  element.classList.add(classStyle);
  element.classList.add(classSize);
  element.classList.add(classRotation);
  element.classList.add(classInclination);
}

function criarCarta() {
  cartaGerada.innerText = '';
  const text = input.value;
  if (text.trim() === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const listText = text.split(' ');
    for (let i = 0; i < listText.length; i += 1) {
      const elementText = listText[i];
      const element = document.createElement('span');
      element.innerText = elementText;
      const classStyle = grupoEstilo[generateRandonInt(0, grupoEstilo.length)];
      const classSize = grupoTamanho[generateRandonInt(0, grupoTamanho.length)];
      const classRotation = grupoRotacao[generateRandonInt(0, grupoRotacao.length)];
      const classInclination = grupoInclinacao[generateRandonInt(0, grupoInclinacao.length)];
      element.classList.add(classStyle);
      element.classList.add(classSize);
      element.classList.add(classRotation);
      element.classList.add(classInclination);
      cartaGerada.appendChild(element);
      element.addEventListener('click', changeElement);
    }
  }
}

btnCriar.addEventListener('click', criarCarta);