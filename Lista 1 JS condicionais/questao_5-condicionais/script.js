/**5) Verificador de número par ou ímpar: Faça um programa que peça ao usuário para inserir um número e determine se par ou ímpar. */

let numero

numero  = parseFloat(prompt('Digite um número: '))

if(numero % 2 == 0){
    alert(`O número ${numero} é par`)
    } else{
        alert(`O número ${numero} é ímpar`)
    }