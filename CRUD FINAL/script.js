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
    if (email.indexOf('@') === -1) {
        alert('Informe um e-mail válido!')

    } else if (campoNovoCadasto.value != '' && campoEmail != '' && campoSenha.value != '' && campoRepitaSenha.value != '') {

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
function voltar(){
    window.location.href = 'login.html';
}