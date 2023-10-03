class ContaBancaria {
    constructor(titular,saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        var saldoAtual = this.saldo + valor;
        this.saldo = saldoAtual;
        return "Depósito de R$" +valor+ 
        " feito \nSeu saldo atual é: R$" +this.saldo;
    }

    sacar(valor){
        if (valor > this.saldo) {
            return "Saldo insuficiente para saque! \nSeu saldo atual é: R$" +this.saldo;
        }else{
            var saque = this.saldo - valor;
            this.saldo = saque;

            return "Saque de R$" +valor+ 
            "\nSeu saldo atual é: R$"+this.saldo;
        }  
    }

    verSaldo_(){
            return "Seu saldo atual é: R$" +this.saldo;
    }
}

const conta = new ContaBancaria("Maria", 100);
var deposito = conta.depositar(80);
var saque = conta.sacar(120);

console.log(deposito);
console.log(saque);
console.log(conta.verSaldo_());