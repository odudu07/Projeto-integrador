// ===============================
// BANCO DE DADOS LOCAL
// ===============================

// Cria funcionários padrões
// Só cria se ainda não existir no localStorage

if(localStorage.getItem("funcionarios") == null){

    let funcionarios = [

        {
            usuario: "Eduardo",
            senha: "123"
        },

        {
            usuario: "joao",
            senha: "456"
        },

        {
            usuario: "maria",
            senha: "789"
        }

    ]

    localStorage.setItem(
        "funcionarios",
        JSON.stringify(funcionarios)
    )
}



// ===============================
// SISTEMA DE LOGIN
// ===============================

document.getElementById("formLogin").addEventListener("submit", function(event){

    // Impede recarregar página
    event.preventDefault()


    // Pega dados digitados
    let usuarioDigitado =
    document.getElementById("usuario").value

    let senhaDigitada =
    document.getElementById("senha").value


    // Busca funcionários salvos
    let funcionarios =
    JSON.parse(localStorage.getItem("funcionarios"))


    // Variável para verificar login
    let loginCorreto = false


    // Percorre todos funcionários
    for(let i = 0; i < funcionarios.length; i++){

        // Verifica usuário e senha
        if(
            usuarioDigitado === funcionarios[i].usuario &&
            senhaDigitada === funcionarios[i].senha
        ){

            loginCorreto = true

            // Salva usuário logado
            localStorage.setItem(
                "usuarioLogado",
                funcionarios[i].usuario
            )

            break
        }
    }



    // Login correto
    if(loginCorreto){

        document.getElementById("mensagem").innerText =
        "Login realizado com sucesso"


        setTimeout(function(){

            window.location.href =
            "tela-inicial.html"

        }, 2000)

    }

    // Login incorreto
    else{

        document.getElementById("mensagem").innerText =
        "Usuário ou senha incorretos"
    }

})