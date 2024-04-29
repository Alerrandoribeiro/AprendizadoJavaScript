/**6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula.  */
let altura, peso

alert('CALCULADORA DE IMC(ÍNDICE DE MASSA CORPORAL')

peso = Number(prompt('Digite seu peso: '))
altura = Number(prompt('Digite sua altura: '))
alert(`O índice de massa muscular é ${imc(peso,altura).toFixed(2)}`)


function imc(peso,altura){
    return peso /(altura * altura)
}