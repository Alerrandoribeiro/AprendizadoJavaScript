/**2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes. */


let senha = prompt('Digite uma senha: ')
let repitaSenha = prompt('Digite a senha novamente: ')

validaSenha(senha,repitaSenha)

function validaSenha(cadastrosenha, senhaRepetida) {
    while (cadastrosenha != senhaRepetida) {
        alert('As senhas não são iguais!')
        cadastrosenha = prompt('Digite uma senha: ')
        senhaRepetida = prompt('Digite a senha novamente: ')
    }
         return alert('As senhas são iguais!')
     
}