//(c) (1.0) Retorne o primeiro e o ´ultimo elemento de um array concatenado de um vetor qualquer.

function extremos(vetor) {

    var menor = Math.min(...vetor);
    var maior = Math.max(...vetor);

    return "O MAIOR ELEMENTO É O: " +maior+
    "\nO MENOR ELEMENTO É O: "+menor;
}

var vetor1 = [2,200,3,4,5,6,80];
console.log(extremos(vetor1));