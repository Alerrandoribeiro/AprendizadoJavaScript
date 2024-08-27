/**Escreva uma função que recebe dois números como argumentos e retorne sua soma, armazene o resultado em uma variável e imprima no console. */

function exercicioNove() {
    let numeroUm = Number(prompt('Digite o primeiro número: '));
    let numeroDois = Number(prompt('Digite o segundo número: '));

    let resultado = soma(numeroUm,numeroDois);

    alert(`A soma dos numeros ${numeroUm} e ${numeroDois} é ${resultado}.`)   
}

function soma(a,b) {

    return Number(a + b);

}