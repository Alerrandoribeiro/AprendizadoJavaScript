
// 2) Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números. 

let numeroUm, numeroDois

alert('Calculadora de multiplicação')
numeroUm = Number(prompt('digite o primeiro número:'))
numeroDois = Number(prompt('digite o segundo número:'))

alert('A multiplicação entre ' + numeroUm + ' e ' + numeroDois + ' é ' + multiplica(numeroUm,numeroDois))

function multiplica(n1,n2){
    return n1 * n2
}