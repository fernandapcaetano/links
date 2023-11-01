const entrada = document.getElementById("entrada");

const botaoInserir = document.getElementById("inserir");
botaoInserir.addEventListener("click", () =>{

    var valorEntrada = entrada.value;
    var p = document.getElementById("p1");

    p.innerText = valorEntrada;

})