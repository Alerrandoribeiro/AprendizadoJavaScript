// valores de cadastro
const campoNovoCadasto = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("novaSenha");
const campoRepitaSenha = document.getElementById("repitaSenha");
// valores campo login
const campoEmailLogin = document.getElementById("email_login");
const campoSenhaLogin = document.getElementById("senha_login");

function logado() {
    let EmailLogin = campoEmailLogin.value
    let senhaLogin = campoSenhaLogin.value
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); /**Use JSON.parse(localStorage.getItem("bancoDeDados")) para obter os dados armazenados na Local Storage. Verifique se o banco de dados existe:
      */
    if (bancoDeDados == null) {
      mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
      /**Dentro do bloco else, percorra os usuários do banco de dados e verifique se as credenciais correspondem a algum usuário, ao se logar, crie o elemento ‘logado’ no localStorage, para identificar o usuário que se logou: */
      for (let usuario of bancoDeDados) {
        if (usuario.email == EmailLogin && usuario.senha == senhaLogin) {
          mensagem = "Parabéns, você logou!";
          localStorage.setItem("logado", JSON.stringify(usuario));
          LimparPlaceHolder()
          window.location.href = 'logado.html';
          break;
        }
      }
    }
    alert(mensagem)
    LimparPlaceHolder()
  }


function cadastrar() {
    let nome = campoNovoCadasto.value;
    let senha = campoSenha.value;
    let confirmarSenha = campoRepitaSenha.value;
    let email = campoEmail.value;
    // percorrendo o valor do campo de input, para sabert se contém @
     if (nome != '' && email != '' && senha != '' && confirmarSenha != '') {

        if (senha == confirmarSenha) {
            const usuario = {
                nome: nome,
                senha: senha,
                email: email,
            };
            let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
            if (bancoDeDados == null) {
                bancoDeDados = [];
            }
            if (existe(usuario, bancoDeDados)) { // verificando se já exite usuário cadastrado!
                alert('Esse usuário já foi cadastrado!');
            } else {

                bancoDeDados.push(usuario);
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                alert("Usuário cadastrado com sucesso!");

               LimparPlaceHolder();
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

function sair(){
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



// ======= modal de logado abaixo =======

// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
let  btnAbrir = document.getElementById("abrirModal");

// Obtém o elemento <span> que fecha o modal
let spanFechar = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btnAbrir.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
spanFechar.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
  }
}

// ====== finaliza o modal de logado========

//==================== começa a parte de cadastros de salas aqui

// Função para cadastrar uma sala
function cadastrarSala() {
    // Captura os valores dos campos do formulário
    let cep = document.getElementById('cep_cadastro_salas').value;
    let estado = document.getElementById('estados_cadastro_salas').value;
    let cidade = document.getElementById('cidade_cadastro_salas').value;
    let bairro = document.getElementById('bairro_cadastro_salas').value;
    let data = document.getElementById('data_cadastro_salas').value;
    let descricao = document.getElementById('descricao_cadastro_salas').value;
    
    // Captura as imagens selecionadas pelo usuário
    let imagens = document.getElementById('imagens_salas').files;
    
    // Converte a lista de FileList em um array de URLs das imagens
    let imagensUrls = [];
    for (let i = 0; i < imagens.length; i++) {
        let url = URL.createObjectURL(imagens[i]);
        imagensUrls.push(url);
    }
    
    // Salva os dados no localStorage
    let novaSala = {
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        data: data,
        descricao: descricao,
        imagens: imagensUrls // Array de URLs das imagens
    };
    
    // Verifica se já existe alguma informação no localStorage
    let salas = JSON.parse(localStorage.getItem('salas')) || [];

    // Adiciona a nova sala à lista de salas
    salas.push(novaSala);
    // Atualiza o localStorage com a nova lista de salas
    localStorage.setItem('salas', JSON.stringify(salas));
    
    // Mensagem de sucesso
    alert("Sala cadastrada com sucesso!");
    limparCadastro();
    cep.focus()
    
}

const lista = document.getElementById("lista_salas");

let aberto = false;
function exibeSalas() {
    let sala = '';
    if (!aberto) {
        aberto = true;
        let salas = JSON.parse(localStorage.getItem("salas"));
        
        if (salas == null) {
            sala = 'Não há salas cadastradas no momento!'
        } else {
      for (let novaSala of salas) {
          sala += `<div class="sala">
          <p><strong>CEP:</strong> ${novaSala.cep}</p>
          <p><strong>Estado:</strong> ${novaSala.estado}</p>
          <p><strong>Cidade:</strong> ${novaSala.cidade}</p>
          <p><strong>Bairro:</strong> ${novaSala.bairro}</p>
          <p><strong>Data:</strong> ${novaSala.data}</p>
          <p><strong>Descrição:</strong> ${novaSala.descricao}</p>
          <img src="${novaSala.imagensUrls} alt ="">
          </div><br><br>`;
        }
        lista.innerHTML = sala;
    }
} else {
    aberto = false;
    lista.innerHTML = '';
}
}


function LimparPlaceHolder(){
    campoEmail.value = '';
    campoNovoCadasto.value = '';
    campoSenha.value = '';
    campoRepitaSenha.value = '';
    campoEmailLogin.value = '';
    campoSenhaLogin.value = '';
    
}
function limparCadastro(){
    document.getElementById('cep_cadastro_salas').value = '';
    document.getElementById('estados_cadastro_salas').value = '';
    document.getElementById('cidade_cadastro_salas').value = '';
    document.getElementById('bairro_cadastro_salas').value = '';
    document.getElementById('data_cadastro_salas').value = '';
    document.getElementById('descricao_cadastro_salas').value = '';
     // Limpar campo de seleção de imagens
     let inputImagens = document.getElementById('imagens_salas');
     inputImagens.value = ''; 
}

