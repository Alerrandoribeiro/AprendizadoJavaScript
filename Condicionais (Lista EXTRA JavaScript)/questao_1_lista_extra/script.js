/**1) Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”. */

let numero 
alert('Multiplo de Três')
numero =  Number(prompt('Digite um número:'))

if(numero%3 == 0){
    alert(`O número ${numero} é múltiplo de 3 pois o resto de sua divisão é 0.`)
}else{
    alert(`O número ${numero} não múltiplo de 3 pois o resto de sua divisão é 1.`)
}