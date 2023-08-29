// Construa um algoritmo que leia o valor de uma conta de luz (CL) e, caso o valor seja maior que R$ 50,00 apresente a mensagem: “Você está gastando muito”. Caso contrário não exiba mensagem nenhuma.

var conta
var conta = parseInt(prompt("Digite o valor da sua conta de luz:"));

if (conta > 50) {
    alert("Você está gastando muito!");
}


