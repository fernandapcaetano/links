/*1. (valor 1.5 pontos)
Implemente uma fun¸c˜ao parametriziada que:
(a) (0.5) Retorne a quantidade de pares de um array do tipo number .
(b) (1.0) Mostre a quantidade de negativos, excluindo o zero, de um array do tipo number.
(c) (1.0) Retorne o primeiro e o ´ultimo elemento de um array concatenado de um vetor qualquer.*/

let pares = 0;

function QuantidadePar(num) {
    
    for (let i = 0; i < num.length; i++) {
        
        if (num[i] % 2 == 0) {

            pares ++;
            
        }
        
    }
    return pares;
}

vetor = [1,3,4,5,6,8,4,7,12];
QuantidadePar(vetor);