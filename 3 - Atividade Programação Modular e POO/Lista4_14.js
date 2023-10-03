//Fazer um algoritmo para ler duas notas, os pesos de cada nota e mostrar a média ponderada. (nota 1 *peso da nota 1) +(nota 2 *peso da nota 2) Cálculo da Média Ponderada =soma dos pesos

function mediaPonderada(nota1,peso1,nota2,peso2){
    var nota = [nota1, nota2];
    var peso = [peso1, peso2];
    var multiplicacao = 0;
    var soma = 0;
    var media = 0;

    for (let i = 0; i < 2; i++){
        //multiplicando nota x peso
        multiplicacao += nota[i] * peso[i];
        //somando os pesos
        soma += peso[i];  
    }

    media = multiplicacao / soma;
    return media;
    
}

console.log(mediaPonderada(10,1,5,2));
