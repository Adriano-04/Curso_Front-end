"use strict";
//funcção para multiplicar o A e o B
function multiplicar(a, b) {
    return a * b;
}
//Retorna uma saudação com o nome caso não tenha nome usa outra saudação
function saudacao(nome) {
    return nome
        ? `Olá ${nome} o resultado da multiplicação é `
        : 'Olá, o resultado da multiplicação é ';
}
//Constantes para o nome e os números para serem multiplicados
const nome = '';
const numA = 10;
const numB = 2;
//mostra o resultado usando os valores das constantes
const resultado = console.log(saudacao(nome) + multiplicar(numA, numB));
