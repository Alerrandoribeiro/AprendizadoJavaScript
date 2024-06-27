// Pegando valores dos campos de cadastro
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoCpfCnpj = document.getElementById("cpf_cnpj");
const campoDataNascimentoCnpj = document.getElementById("data_nascimento_cnpj");
const campoSenha = document.getElementById("senha");
const campoConfirmarSenha = document.getElementById("confirmar_senha");
// Pegando valores dos campos de login
const campologin = document.getElementById("login");
const campoSenhaLogin = document.getElementById("senhaLogin");

function cadastro() {
    // Armazenando valores dos inputs em variáveis
    let nome = campoNome.value;
    let email = campoEmail.value;
    let cpf_cnpj = campoCpfCnpj.value; // Mantido como string para evitar problemas com caracteres especiais
    let data_nascimento_cnpj = campoDataNascimentoCnpj.value;
    let senha = campoSenha.value;
    let confirmar_senha = campoConfirmarSenha.value;
    // Aqui estamos validando se todos os campos de dados foram preenchidos corretamente
    if (nome != '' && email != '' && cpf_cnpj != '' && data_nascimento_cnpj != '' && senha != '' && confirmar_senha != '') {

        if (senha == confirmar_senha) {
            const usuario = {
                nome: nome,
                senha: senha,
                cpfCnpj: cpf_cnpj,
                email: email,
                data: data_nascimento_cnpj
            };

            let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
            if (bancoDeDados == null) {
                bancoDeDados = [];
            }

            if (existeUsuarioCadastrado(usuario, bancoDeDados)) { // verificando se já exite usuário cadastrado!
                alert('Esse usuário já foi cadastrado!')
            } else {
                // Se o usuário não foi cadastrado ainda, vai ser jodado no LocalStore 
                bancoDeDados.push(usuario);
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                alert("Usuário cadastrado com sucesso!");
                // Redirecionando o usuário para a tela de login
                window.location.href = 'login.html';

                nome = null // limpando o placeholder
                email = null
                cpf_cnpj = null
                data_nascimento_cnpj = null
                senha = null
                confirmar_senha = null
            }

        } else {
            alert('Por favor, verifique se a senha e a confirmação de senha são iguais.')
        }
    } else {
        alert('Preencha todos os campos corretamente!')
    }

}

function existeUsuarioCadastrado(usuario, bancoDeDados) {
    // validação para Cpf/cnpj, email e login
    for (let verificado of bancoDeDados) {
        if (verificado.nome == usuario.nome || verificado.cpfCnpj == usuario.cpfCnpj || verificado.email == usuario.email) {
            return true;
        }
    }
    return false;
}

function semLogin() {
    window.location.href = 'index.html';
    //window.open('index.html')
}

function login() {
   let login = campologin.value;
   let senha = campoSenhaLogin.value;

   let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); /**Use JSON.parse(localStorage.getItem("bancoDeDados")) para obter os dados armazenados na Local Storage. Verifique se o banco de dados existe:
    */
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        /**Dentro do bloco else, percorra os usuários do banco de dados e verifique se as credenciais correspondem a algum usuário, ao se logar, crie o elemento ‘logado’ no localStorage, para identificar o usuário que se logou: */
        for (let usuario of bancoDeDados) {
            if ((usuario.nome == login || usuario.cpfCnpj == login || usuario.email == login) && usuario.senha == senha) { // ponto a rever ou trocar por senhaCadastro
              mensagem = "Parabéns, você logou!";
              localStorage.setItem("logado", JSON.stringify(usuario));
              window.location.href = 'about.html';
              break;
            }
          } 
        }
        alert(mensagem)


}
