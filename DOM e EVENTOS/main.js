// Internet 2.0 - Evolução com Javascript criando páginas interativas sem enviar informações para o servido
//Internet é a arquitetura request - response

//Pegando tag do html
document.getElementsByTagName("p")[0].innerText = "Oiiiiee"

//criando atributo
var para = document.createAttribute("p");
para.innerText = "Oieeeeee";

//Pegando a quarta tag "div" e colocando como pai de "p"
document.getElementsByTagName("div")[3].appendChild(para);

//removendo um atributo
para.removeChild;

//mudar cor de fundo do documento html (body)
