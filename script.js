const formu = document.getElementById("formu");
const msgerro = document.getElementById("msgerro");
const resultado = document.getElementById("resultado");




formu.addEventListener("submit", function (event)) {

    event.preventDefault();
    msgerro.innerHTML = "";
    resultado.innerHTML = "";

    let erros = [];




const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const telefone = document.getElementById("telefone").value.trim();
const idade = Number(document.getElementById("idade").value);
const cidade = document.getElementById("cidade").value;

}