/**Com base na lista de usuários, escreva um programa que imprima no console os usuários maiores de idade com base na legislação brasileira.  */
function exercicioDezesseis() {
    let lista =  '';
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade >= 18) {

            lista += usuarios[i].nome + ', '
            
        }

    }
    alert("Lista de usuários maiores de idade " + lista + 'que se enquadram com base na legislação brasileira.')
}