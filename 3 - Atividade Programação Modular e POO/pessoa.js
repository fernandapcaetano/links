class Pessoa{
    constructor(nome,idade,email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    apresentar(){
        return "Olá, meu nome é " +this.nome+ ", tenho " +this.idade+ " anos e meu e-mail é " +this.email;
    }
}

const pessoa = new Pessoa("Maria",21,"caetano@gmail.com");
console.log(pessoa.apresentar());