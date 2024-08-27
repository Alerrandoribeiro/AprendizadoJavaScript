/**Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário. Exemplo: Informado o número 5:
”5 x 1 = 5”
”5 x 2 = 10”
…
”5 x 9 = 45”
”5 x 10 = 50” */

function exercicioTreze() {
    alert('BEM-VINDO A CALCULADORA NUMÉRICA!')
    let numero = Number(prompt('Digite um número: '))

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
       return
    }

    for (let i = 1; i <= 10; i++) {
        alert(`${numero} x ${i} = ${numero * i}`);

    }
}