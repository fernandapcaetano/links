// Construa um algoritmo que apresente o nome e o salário dos funcionários, de acordo com os seguintes critérios:Salários que sejam maiores ou iguais a R$ 1000,00 e menores ou iguais a R$ 1500,00Funcionários pertencentes aos departamentos de produção ou engenharia.Obs: Os departamentos são reconhecidos pelas letras (P) Produção e (E) EngenhariaSão  fornecidos  o  nome  do  funcionário  (NF),  o  seu  salário  (SAL)  e  o  departamento  onde trabalha (DEP).

var nf, sal, dep;

nf = prompt("Digite o nome do funcionário: ");
sal = parseFloat(prompt("Digite o salário do funcionário: "));


if (sal >= 1000 && sal <= 1500) {
    
    dep = prompt("Digite a inicial do departamento: ");
    switch (dep) {
        case "e":
            
            alert("Nome: " + nf + "\nSalário: " + sal);
        
        case "p":

            alert("Nome: " + nf + "\n Salário: " + sal);

        default:
            alert("Digite um departamento válido");
    }
}