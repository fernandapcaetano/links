// Construa  um algoritmo que  calcule  o  novo  salário  (SAL_NOVO)  de  um  funcionário. Considere que o funcionário deverá receber um reajuste de 15% caso seu salário (SAL) seja menor  que  500.  Se  o  salário  for  maior  ou  igual  a  500,  mas  menor  ou  igual  a  1000,  o reajuste deve ser de 10%. Caso o salário seja maior que 1000, o reajuste deve ser de 5%.

var sal, sal_novo;

sal = parseFloat(prompt("Digite o salário do funcionário: "));

if (sal < 500) {

    sal_novo = (15/100) * sal + sal;
    alert("Salário novo: " + sal_novo);

} else if (sal >= 500 && sal <= 1000) {

    sal_novo = (10/100) * sal + sal;
    alert("Salário novo: " + sal_novo);

}else{

    sal_novo = (5/100) * sal + sal;
    alert("Salário novo: " + sal_novo);

}
