/**Escreva um programa que solicite ao usuário um números e verifique se o número é maior que 10. Se for, imprima no console "O número é maior que 10", caso contrário, imprima "Escreva um programa que solicite ao usuário um números e verifique se o número é maior que 10. Se for, imprima no console "O número é maior que 10", caso contrário, imprima "O número é menor ou igual a 10".". */

function exercicioTres(){
    let numero = Number(prompt('Informe um número: '))
    
    if(numero <= 10){
        alert('O número é menor ou igual a 10.')
    }else{
        alert('O número é maior que 10')
    }
}