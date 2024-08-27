/**Com base na lista de usuários, escreva um programa que imprima no console os usuários menores de idade com base na legislação brasileira e que tenham animais de estimação. 
 */

function exercicioDezessete() {
    let lista =  '';
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade < 18 && usuarios[i].temAnimalEstimacao === true) {

            lista += usuarios[i].nome
            
        }

    }
    alert("Lista de usuários menores de idade que possuem animais de estimação são " + lista + '.')
}