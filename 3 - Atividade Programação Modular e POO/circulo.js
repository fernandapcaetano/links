class Circulo{
    constructor(raio){
        this.raio = raio;
    }

    area(){
        var calcArea = Math.PI * (Math.pow(this.raio,2));

        return "A área é: " +calcArea;
    }
    perimetro(){
        var calcPerimetro = 2 * Math.PI * this.raio;

        return "O Perímetro é: " +calcPerimetro;
    }
}

const circulo = new Circulo(10);
console.log(circulo.area());
console.log(circulo.perimetro());