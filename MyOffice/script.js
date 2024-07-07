// valores de cadastro
const campoNovoCadasto = document.getElementById("newUsername");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("novaSenha");
const campoRepitaSenha = document.getElementById("repitaSenha");

function cadastrar() {
    let senhaCadastrada = campoSenha.value
    let senhaRepetida = campoRepitaSenha.value
    let email = campoEmail.value
    // percorrendo o valor do campo de input, para sabert se contém @
     if (campoNovoCadasto.value != '' && campoEmail != '' && campoSenha.value != '' && campoRepitaSenha.value != '') {

        if (senhaCadastrada == senhaRepetida) {
            const usuario = {
                login: campoNovoCadasto.value,
                senha: campoSenha.value,
                email: campoEmail.value,
            };
            let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
            if (bancoDeDados == null) {
                bancoDeDados = [];
            }
            if (existe(usuario, bancoDeDados)) { // verificando se já exite usuário cadastrado!
                alert('Esse usuário já foi cadastrado!')
            } else {

                bancoDeDados.push(usuario);
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                alert("Usuário cadastrado com sucesso!");
                senhaCadastrada = null // limpando o placeholder
                campoNovoCadasto.value = null
                senhaRepetida = null
                email = null
            }
        } else {
            alert("As senhas são diferentes!");
        }
    } else {

        alert('Preencha todos os campos!')
    }
}

function existe(usuario, bancoDeDados) {

    for (let verificado of bancoDeDados) {
        if (verificado.email == usuario.email) {
            return true;
        }
    }
    return false;
}

function telaApresentacao(){
    window.location.href = 'paginaApresentacao.html';
}

function telaLogin(){
    window.location.href = 'login.html';
}

function voltar(){
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links âncora que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Obtém o alvo do href
            const target = document.querySelector(this.getAttribute('href'));

            // Se o elemento existir, rola suavemente até ele
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});