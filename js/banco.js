document.getElementById("formLogin").addEventListener("submit", function(event){

    event.preventDefault()

    let usuarioDigitado = document.getElementById("usuario").value
    let senhaDigitada = document.getElementById("senha").value

    let usuarioSalvo = localStorage.getItem("usuario")
    let senhaSalva = localStorage.getItem("senha")

    if(usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva){

        window.location.href = "tela-inicial.html"

    }else{

        document.getElementById("mensagem").innerText = "Usuário ou senha incorretos"

    }

})