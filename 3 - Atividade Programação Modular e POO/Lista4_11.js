/*11 – Escreva um algoritmo que leia dois números que deverão ser colocados, respectivamente, nas variáveis VA e VB. O algoritmo deve, então, trocar os valores de VA por VB e vice-versa e mostrar o conteúdo destas variáveis.*/

function troca (va,vb) {

    [va, vb] = [vb, va];

    console.log("Valor de va após a troca: " + va);
    console.log("Valor de vb após a troca: " + vb);
}

troca(20,30);