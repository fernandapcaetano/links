class Livro{
    constructor(titulo,autor,anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    idadeDoLivro () {
        var idade = 2023 - this.anoPublicacao 
        return "Esse livro tem " +idade+ " anos.";
    }
}

const livro = new Livro("O Pequeno Príncipe","Antoine de Saint-Exupéry",1943);
console.log(livro.idadeDoLivro());