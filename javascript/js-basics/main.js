// Declaro uma constante que vai selecionar a tag h1 dentro do documento
//const myHeading = document.querySelector('h1');
// myHeading agora recebeu o retorno da document, ela tem o atributo textContent
// eu seto o content pra "Hello world!"
//myHeading.textContent = 'Hello world!';
// Só pra testar a dynamica, vou fazer um time sleep e mudar o conteúdo
// de myHeading depois de 10s

// Várias maneiras de fazer isso
//  ------------- Primeira e menos usual
// setTimeout(continueExecution, 10000) // Wait ten seconds before continuing
// function continueExecution()
// {
//   myHeading.textContent = 'Alterado depois de 10s';
// }
// -------------  Funcionou!

//  ------------- Segunda e mais inteligente atualmente (StackOverflow)
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function mudar_h1(ms){
//   await sleep(ms);
//   myHeading.textContent = 'Alterado depois de 5s';
//   console.log('Alterado a tag <h1>')
// }

// mudar_h1(5000)

// Funcionou!


// Event listener

// Vai olhar tudo dentro da tag html
// document.querySelector('html').addEventListener('click', function() {
//   alert('Ouch! Stop poking me!');
// });

// // Arrow function é a mesma coisa, acredito que a única diferença é que ela é tipo um alias pra function() {}
// document.querySelector('html').addEventListener('click', () => {
//   alert('Ouch! Stop poking me!');
// });

// Entendi


// Changing an image

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagem1.jpg') {
      myImage.setAttribute('src','imagem2.jpg');
    } else {
      myImage.setAttribute('src','imagem1.jpg');
    }
};


// Eu que fiz para testar a modificação com arrow function
// let myImage = document.querySelector('img').onclick( () => {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === 'imagem1.jpg') {
//     myImage.setAttribute('src','imagem2.jpg');
//   } else {
//     myImage.setAttribute('src','imagem1.jpg');
//   }
// });
// NÃO FUNCIONOU
// Uncaught TypeError: document.querySelector(...).onclick is not a function

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Preencha o seu nome');
  while(!myName){
    myName = prompt('Preencha um nome válido');
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}