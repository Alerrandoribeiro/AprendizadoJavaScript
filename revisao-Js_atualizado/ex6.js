/**​Escreva um programa que solicite ao usuário um número e avalie se um número é par ou ímpar, imprima o resultado no console conforme exemplo: ”O número 10 é par" ou ”O número 9 é impar” */

function exercicioSeis(){
    let numero = Number(prompt('Digite um número: '))

    if(numero%2 == 0){
       alert(`O número ${numero} é par.`)
    }else{
        alert(`O número ${numero} é impar.`)
    }
}