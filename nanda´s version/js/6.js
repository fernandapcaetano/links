// Construa um algoritmo que leia o preço de um produto (P) e apresente a mensagem: “Em promoção”, caso o preço seja maior ou igual a R$ 50,00 e menor  ou  igual  a  R$  100,00. Caso contrário, deve apresentar a mensagem: “Preço Normal”.

var p;
var p = prompt("Digite o preço do produto:");

if (p >=50 && p <= 100) {
    alert("Em promoção");
}else{
    alert("Preço Normal");
}