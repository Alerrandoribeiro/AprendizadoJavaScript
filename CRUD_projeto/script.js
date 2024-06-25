let nomes_array = [];
let emails_array = [];
let cpf_cnpj_array = [];
let data_nascimento_cnpj_array = [];
let senha_array = [];
let confirmar_senha_array = [];

// Função que será chamada quando o usuário clicar no botão "Cadastrar"
function cadastro() {
    // Obtendo os valores dos campos de entrada do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value; // Mantido como string para evitar problemas com caracteres especiais
    let data_nascimento_cnpj = document.getElementById('data_nascimento_cnpj').value;
    let senha = document.getElementById('senha').value;
    let confirmar_senha = document.getElementById('confirmar_senha').value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha != confirmar_senha) {
        alert('Digite a senha e a confirmação de senha corretamente!');
    } 
    // Verifica se todos os campos estão preenchidos
    else if (nome != '' && email != '' && cpf_cnpj != '' && data_nascimento_cnpj != '' && senha != '' && confirmar_senha != '') {
        // Verifica se o CPF/CNPJ já foi cadastrado
        if (cpf_cnpj_array.indexOf(cpf_cnpj) == -1) { 
            // Adiciona os dados nos arrays correspondentes
            nomes_array.push(nome);
            emails_array.push(email);
            cpf_cnpj_array.push(cpf_cnpj);
            data_nascimento_cnpj_array.push(data_nascimento_cnpj);
            senha_array.push(senha);
            confirmar_senha_array.push(confirmar_senha);

            // Salva os dados no localStorage
            localStorage.setItem('nomes_array', JSON.stringify(nomes_array));
            localStorage.setItem('emails_array', JSON.stringify(emails_array));
            localStorage.setItem('cpf_cnpj_array', JSON.stringify(cpf_cnpj_array));
            localStorage.setItem('data_nascimento_cnpj_array', JSON.stringify(data_nascimento_cnpj_array));
            localStorage.setItem('senha_array', JSON.stringify(senha_array));
            localStorage.setItem('confirmar_senha_array', JSON.stringify(confirmar_senha_array));

            alert('Usuário cadastrado com sucesso!')
            // Redireciona para a página "about.html"
            window.location.href = 'login.html';
        } else {
            alert('Esse Cpf/Cnpj já foi cadastrado!');
        }
    } else {
        alert('Preencha os campos de dados corretamente!');
    }
}

function login(){
    window.location.href = 'about.html';
}





function semLogin(){
    window.location.href = 'index.html';
    //window.open('index.html')
}