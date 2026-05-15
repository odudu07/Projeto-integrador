function alterarSenha(){

    let novaSenha = document.getElementById("novaSenha").value

    if(novaSenha == ""){

        document.getElementById("mensagem").innerText = "Digite uma nova senha"

    }else{

        localStorage.setItem("senha", novaSenha)

        document.getElementById("mensagem").innerText = "Senha alterada com sucesso"
    }
}