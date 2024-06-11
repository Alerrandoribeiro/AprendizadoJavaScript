let nomes_array = [];
let emails_array = [];
let cpf_cnpj_array = [];
let data_nascimento_cnpj_array = [];
let senha_array = [];
let confirmar_senha_array = [];


function cadastro() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let cpf_cnpj = Number(document.getElementById('cpf_cnpj').value)
    let data_nascimento_cnpj = document.getElementById('data_nascimento_cnpj').value
    let senha = document.getElementById('senha').value
    let confirmar_senha = document.getElementById('confirmar_senha').value

    if (senha != confirmar_senha) {
        alert('Digite a senha e a confirmação de senha corretamente!')

    } else if (nome != '' && email != '' && cpf_cnpj != 0 && data_nascimento_cnpj != 0 && senha != 0 && confirmar_senha != 0) {
        if(cpf_cnpj_array.indexOf(cpf_cnpj) == -1){ // validando se já tem cadastro

        nomes_array.push[nome]
        emails_array.push[email]
        cpf_cnpj_array.push[cpf_cnpj]
        data_nascimento_cnpj_array.push[data_nascimento_cnpj]
        senha_array.push[senha]
        confirmar_senha_array.push[confirmar_senha]

        let mensagem = 'Lista de Cadastro'

        for (let lista of nomes_array) {
            let posicao = nomes_array.indexOf(lista)
            mensagem += "<br>" + lista + '\nNome: ' + nomes_array[posicao] + '\nEmail: ' + emails_array[posicao] + '\nCpf/Cnpj: ' + cpf_cnpj_array[posicao] + '\nData de nascimento: ' + data_nascimento_cnpj_array[posicao] + '\nSenha: ' + senha_array[posicao]
        }

        document.getElementById("tabela").innerHTML + mensagem
        document.getElementById("linkCadastro").setAttribute("href", "http://www.exemplo.com");
    } else {
            alert('Esse Cpf/Cnpj já foi cadastrado!')
    }
} else {
        alert('Preencha os campos de dados corretamente!')
    }
}