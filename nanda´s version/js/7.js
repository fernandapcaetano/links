// Construa  um algoritmo que,  recebendo  os  valores  de  vendas  do  mês  de  determinado vendedor (VM) e o nome do mesmo (NOME), apresente o nome, quando o valor da venda estiver entre R$ 10000,00 e R$ 50000,00 (inclusive). 

var vm, nome;

nome = prompt("igite o seu nome: ");
vm = parseFloat(prompt("igite o valor de venda do mês: "));

if (vm > 10000.00 && vm < 50000.00) {
    alert (nome);
}
