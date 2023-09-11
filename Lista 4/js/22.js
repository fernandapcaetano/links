// Fazer um algoritmo que mostre se um número lido é par ou ímpar

var  num = [];
var i = 0;
while (i>=0) {
    num[i] = parseInt(prompt("Digite o o número: "));

    if (num[i] %2 == 0){
        console.log("é par");
    }else{
        console.log("é ímpar");
    }
    i++;
}