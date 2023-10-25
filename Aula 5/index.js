// constantes



// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes siginificativos
// Não pode começar o nome de uma constantes com numero 
// Na constantes não pode conter espaço  ou traços
// Utilizamos camelCase - inicia com letra minuscula depois com a letra maiuscula
// As constantes são Case-sensitive tem diferença entre letras minusculas e maiusculas
// Não utiliza var sempre utiliza const


const name1 = 'David';
console.log(name1)

// Oque nao pode fazer em uma constante é mudar o valor dela 
// + - */
const primeiroNumero = 5;
const segundoNumero = 10; 
const resultado = primeiroNumero * segundoNumero;
const resultandoQuadriplicado = resultado * 4;
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero) // Usar typeof para saber de que tipo é  a const/