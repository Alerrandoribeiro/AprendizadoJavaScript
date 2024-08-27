/**Escreva um programa que pergunte ao usuário sua idade e imprima no console se ele é maior ou menor de idade de acordo com a legislação brasileira vigente. */

function exercicioQuatro(){
    let idade = Number(prompt('Digite sua idade: '))
    
    if(idade >= 18){
        alert('É maior de idade.')
    }else{
        alert('É menor de idade.')
    }
  
}