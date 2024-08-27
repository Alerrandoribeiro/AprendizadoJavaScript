/**Com base na lista de usuários, escreva um programa que imprima no console uma lista de string com o nome e sobrenome dos usuários.
Exemplo: [”João Silva”, “Maria Souza”] */

function exercicioDezoito() {
    let lista =  '';
    for (let i = 0; i < usuarios.length; i++) {
        lista +=usuarios[i].nome + ' ' + usuarios[i].sobrenome + ', ';

    }
    alert("Nomes e sobrenomes: " + lista);
}