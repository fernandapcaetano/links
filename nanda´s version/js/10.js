// Construa um algoritmo que leia dois números (A e B). Caso A seja igual a B, apresentar a soma  dos  dois.  Caso  um  seja  maior  que  o  outro,  apresentar  a  diferença  entre  os  dois números (sempre lembrando que a diferença entre dois números é SEMPRE positiva).

var a,b,res;

a = parseInt(prompt("Digite o valor de A: "));
b = parseInt(prompt("Digite o valor de B: "));

if (a == b) {
    res = a + b;
    alert("A soma é: " + res);
}else{

    if (a>b) {
        res = a - b;
        alert("A diferença é: " + res);
    }else{
        res = b - a;
        alert("A diferença é: " + res);
    }
    
}