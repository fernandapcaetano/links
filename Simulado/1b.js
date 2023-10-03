/*1. (valor 1.5 pontos)
Implemente uma fun¸c˜ao parametriziada que:
(b) (1.0) Mostre a quantidade de negativos, excluindo o zero, de um array do tipo number.*/



function quantidadeImpar(vetor) {
    let impar = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 !== 0) {
            impar = impar + 1;
        }    
    }
    return impar;
}

vetor1 = [1,2,3,4,5,6,7,8,9];
console.log(quantidadeImpar(vetor1));