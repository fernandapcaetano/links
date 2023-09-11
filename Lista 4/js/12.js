/*Faça um algoritmo que leia valores para as variáveis A, B e C e mostre o resultado da seguinte expressão: ( A + B )*C */

var valor = [];
var variaveis = ["A","B","C"];

for (let i = 0; i < 3; i++) {
    valor[i] = parseInt(prompt("Digite o valor de " + variaveis[i] + ": "));
}

var res = ((valor[0] + valor[1]) * valor[2]);

console.log(res);
