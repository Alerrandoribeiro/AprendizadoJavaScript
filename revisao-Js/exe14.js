/**Com base na lista de números, escreva um programa que imprima no console os números que são maiores que 20. */
let lista = "";
function exercicioQuatorze() {
    for (let i = 0; i < numeros.length; i++) {
        // Verifica se o número atual é maior que 20
        if (numeros[i] > 20) {
           lista += numeros[i] + ' ';
        }
    }
    alert(`Os números do array que são maiores que 20 são ${lista}.`);
}

