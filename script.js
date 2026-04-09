let usuarios = [];

document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();



    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = Number(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let peso = Number(document.getElementById("peso").value);
    let tipos = document.getElementById("tipos").value;
    let estado = document.getElementById("estado").value;


    if (idade < 16 || isNaN(idade)) {
        alert("Sua idade deve ser maior ou igual a 16 anos");
        return false
    }

    if (peso <= 50 || isNaN(peso)) {
        alert("O peso mínimo é de 50kg.");
        return false
    }

    if (!email.includes("@") || !email.includes(".com")) {
        alert("O email deve conter os caracteres '@' '.com'.");
        return false
    }

    if (estado === "" || cidade === "" || isNaN(peso) || nome === "" || email === "" || isNaN(idade) || tipos === "" || telefone === "") {
        alert("Todos os campos devem estar preenchidos!")
        return false
    }

    if (nome.split(" ").length < 2) {
        alert("Precisa conter nome e sobrenome")
        return false
    }

    if (tipos === "") {
        alert("Selecione um tipo sanguíneo")
        return false
    }

    if (isNaN(telefone)) {
        alert("O campo telefone precisa conter apenas números")
            return false
    }


    let usuario = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipos: tipos,
        telefone: telefone,
        cidade: cidade,
        estado: estado,
    };
    
    usuarios.push(usuario)
    console.log(usuarios)
    alert("Cadastro enviado!")


})