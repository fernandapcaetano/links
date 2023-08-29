var altura=0, sexo, pesoIdeal=0;

var sexo = prompt("Digite o seu sexo:");

if (sexo = "masculino" || "m") {
    altura = parseInt(prompt("Digite a sua altura"));
    
    pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é: " + pesoIdeal);

} else if(sexo = "feminino" || "f"){
    altura = parseInt(prompt("Digite a sua altura"));
    
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é: " + pesoIdeal);
}