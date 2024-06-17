let ussername = []
let password = []

function cadastrar() {

    let nome = document.getElementById('username').value
    let senha = document.getElementById('password').value
    if (nome != '' && senha != '') {

        ussername.push(nome)
        password.push(senha)

    } else {
        alert('Preencha todos os campos!')
    }
}

function logado() {
    let nome = document.getElementById('username').value
    let senha = document.getElementById('password').value

    if(ussername.indexOf(nome) != -1 && password.indexOf(senha) != -1){
        window.location.href="logado.html";
    } else{
        alert("Usuário ou senha incorreto!")
    }
}

function voltar() {
    window.location.href = "index.html";
}