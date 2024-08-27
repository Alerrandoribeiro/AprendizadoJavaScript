/** Questão 15 - Com base na lista de números, escreva um programa que imprima no console os números que são ímpares. */

function exercicioQuinze(){
    let lista = '';
    for(let i = 0; i < numeros.length; i++){
            if(numeros[i]%2 == 1){
                lista += numeros[i] + ' ';
            }
    }
    alert(`Os números do array que são ímpares são ${lista}.`);
}