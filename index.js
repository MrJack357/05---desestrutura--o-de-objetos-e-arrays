// O operador spread (...) no array 'pessoas' expande seus elementos,
// transformando-os em itens individuais. No console, os valores aparecem separados.
const pessoas = ['Roberto', 'Ricardo', 'Thiago'];
console.log(...pessoas); // Roberto Ricardo Thiago

// Usando o spread, podemos criar um novo array que combina os elementos
// de dois arrays existentes, de forma mais legível do que com o método .concat():
let pessoas1 = ['Roberto', 'Ricardo', 'Raphael'];
let pessoas2 = ['Thiago', 'Joao', 'Raissa'];

// Com concat():
// pessoas1 = pessoas1.concat(pessoas2);

// Com spread, o código é mais limpo e fácil de entender:
pessoas1 = [...pessoas1, ...pessoas2];
console.log(pessoas1);
// Output: ['Roberto', 'Ricardo', 'Raphael', 'Thiago', 'Joao', 'Raissa']

// Para objetos, o operador spread é usado para criar cópias,
// preservando os valores do original sem que as alterações na cópia
// afetem o objeto original.
const pessoa1 = { nome: 'Roberto', idade: '33' };

// Criação de um clone do objeto original
const objetoClonado = { ...pessoa1 };

console.log(objetoClonado); // { nome: 'Roberto', idade: '33' }
console.log(pessoa1)
