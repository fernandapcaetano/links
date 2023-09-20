/*
Classes e Objetos
    Entidades

Processo de classificação exige 
    Levantamento de atributos
    Levantamento de comportamentos
Pilares do POO 
    Encapasulamento
    Herança/Abstração
    Polimorfismo
        Subtipos 
        Paramétricos 
        ad hoc 

Procedural/ Imperativo
*/

//Sintaxe sugar - acúcar sintático
//Prototipagem
//Function se comportando como classe
/*function animal(nome) {
    this.nome = nome;

}
animal.prototype.emitirSom = function{
    console.log ("Emitir som");
}
*/




class Animal{
    nome;

    constructor(nome){
        this.nome;
    }
    emitirSom(){
        console.log("Olá");
    }
}
//Stuct não pode ter métodos
class FormaBolo{
    #sabor;
    #peso;

    constructor(sabor, peso){
        this.#sabor = sabor;
        this.#peso = peso;
    }

    getSabor(){
        return this.#sabor;
    }
    getPeso(){
        return this.#peso;
    }
    setSabor(sabor){
        this.#sabor = sabor;
    }
    setPeso(peso){
        this.#peso = peso;
    }
}

var boloReal = new FormaBolo("Chocolate", 10000);
var boloBanana = new FormaBolo("Banana", 500);
boloBanana.getSabor();

class Pessoa{
    #peso;

    constructor(peso){
        this.#peso = peso;
    }


    comer(bolo){

    }
}