//Fazer um algoritmo para ler duas notas, os pesos de cada nota e mostrar a média ponderada. (nota 1 *peso da nota 1) +(nota 2 *peso da nota 2) Cálculo da Média Ponderada =soma dos pesos

var nota = [];
var peso = [];
var semestre = [1,2];
var multiplicacao = 0;
var soma = 0;
var media = 0;


for (let i = 0; i < semestre.length; i++) {
    //Pegando o valor dos pesos e das notas
    nota[i] = parseInt(prompt("Digite o valor da nota " + semestre[i] + ": "));
    peso[i] = parseInt(prompt("Digite o valor do peso " + semestre[i] + ": "));
    
    //multiplicando nota x peso
    multiplicacao += nota[i] * peso[i];
    //somando os pesos
    soma += peso[i];    
}
media = multiplicacao / soma;
console.log(media);