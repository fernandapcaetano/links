/*11 – Escreva um algoritmo que leia dois números que deverão ser colocados, respectivamente, nas variáveis VA e VB. O algoritmo deve, então, trocar os valores de VA por VB e vice-versa e mostrar o conteúdo destas variáveis.*/

var VA = parseInt(prompt("Digite o valor para VA: "));
var VB = parseInt(prompt("Digite o valor para VB: "));

let vetor = [VA, VB];
[VA, VB] = [VB, VA];

console.log("Valor de VA após a troca: " + VA);
console.log("Valor de VB após a troca: " + VB);