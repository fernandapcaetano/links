/*Faça um algoritmo que leia valores para as variáveis A, B e C e mostre o resultado da seguinte expressão: ( A + B )*C */

function expressao(a,b,c){
    
    var valor = [a,b,c];
    var res = ((valor[0] + valor[1]) * valor[2]);

    return res;
}

console.log(expressao(1,3,5));