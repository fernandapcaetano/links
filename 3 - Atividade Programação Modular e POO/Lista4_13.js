//Faça um algoritmo que mostre o resultado da expressão abaixo: (( x + 5) *y) - z Obs: Ler valores para as variáveis x, y e z.

function expressao(x,y,z) {
    
    var valor = [x,y,z];
    
    var res = (((valor[0] + 5 ) * valor[1]) - valor[2]);

    return res;
}

console.log(expressao(10,2,15));






