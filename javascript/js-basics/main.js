// Declaro uma constante que vai selecionar a tag h1 dentro do documento
const myHeading = document.querySelector('h1');
// myHeading agora recebeu o retorno da document, ela tem o atributo textContent
// eu seto o content pra "Hello world!"
myHeading.textContent = 'Hello world!';
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
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function mudar_h1(ms){
  await sleep(ms);
  myHeading.textContent = 'Alterado depois de 5s';
  console.log('Alterado a tag <h1>')
}

mudar_h1(5000)

// Funcionou!