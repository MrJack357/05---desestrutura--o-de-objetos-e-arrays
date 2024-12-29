//function (a, b ...args) {
//  //...   
// }



// A função incentivarQuester recebe um parâmetro obrigatório 'mensagem' e um parâmetro rest '...nomesQuesters'.
// O parâmetro rest permite que a função receba um número indefinido de argumentos como um array.
function incentivarQuester(mensagem, ...nomesQuesters) {
    // O método map é usado para iterar sobre cada elemento do array 'nomesQuesters'.
    // Para cada 'nomeQuester', a função de callback imprime a mensagem concatenada com o nome do Quester.
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`) );
}

// Aqui chamamos a função incentivarQuester com uma mensagem e quatro nomes de Questers.
// Os nomes são passados como argumentos adicionais e são capturados pelo parâmetro rest '...nomesQuesters'.
incentivarQuester('Parabens por ter chego ao modulo de JS Avancado,', 'Thiago!' , 'Lucas!', 'Rafael!', 'Ricardo!');