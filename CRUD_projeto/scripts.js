// Pegando valores dos campos de cadastro
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoCpfCnpj = document.getElementById("cpf_cnpj");
const campoDataNascimentoCnpj = document.getElementById("data_nascimento_cnpj");
const campoSenha = document.getElementById("senha");
const campoConfirmarSenha = document.getElementById("confirmar_senha");

function cadastro(){
    // Armazenando valores dos inputs em variáveis
    let nome = campoNome.value
    let email = campoEmail.value;
    let cpf_cnpj = campoCpfCnpj.value; // Mantido como string para evitar problemas com caracteres especiais
    let data_nascimento_cnpj = campoDataNascimentoCnpj.value;
    let senha = campoSenha.value;
    let confirmar_senha = campoConfirmarSenha.value;
    if(campoSenha != campoConfirmarSenha){
      
    }
    if(campoNome.value != '' && campoEmail != '' && campoCpfCnpj != '' && campoDataNascimentoCnpj != ''){

    }else{
        alert('Preencha todos os campos corretamente!')
    }
}