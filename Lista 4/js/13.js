//Faça um algoritmo que mostre o resultado da expressão abaixo: (( x + 5) *y) - z Obs: Ler valores para as variáveis x, y e z.

var valor = [];
var variaveis = ["x","y","z"];

for (let i = 0; i < 3; i++) {
    valor[i] = parseInt(prompt("Digite o valor de " + variaveis[i] + ": "));
}

var res = (((valor[0] + 5 ) * valor[1]) - valor[2]);

console.log(res);


