class Carro{
    constructor() {
        this.velocidade = 0;
        this.estadoMotor = false;
    }

    ligarCarro(){
        this.estadoMotor = true;
        return this.estadoMotor;
    }
    desligarCarro(){
        this.estadoMotor = false;
        return this.estadoMotor;
    }
    acelerar(){
        if (!this.estadoMotor) {
            return false;
        }else{
            this.velocidade = this.velocidade + 10;
            if (this.velocidade > 120) {
                this.velocidade = 120;
                return false;
            }else{
                return true;
            }
        }
    }
    freiar(){
        this.velocidade = this.velocidade - 10;
        if (this.velocidade < 0) {
            this.velocidade = 0;
            return false;
        }else{
            return true;
        }
    }
}
