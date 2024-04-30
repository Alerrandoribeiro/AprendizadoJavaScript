/**3) Verificador de idade para desconto no cinema: Escreva um programa que pergunte a idade do usuário e, se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema; se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contrário, não conceda nenhum desconto. */

let idade, idade_doze, idade_dezoito

idade_doze = 12
idade_dezoito = 18

idade = parseInt(prompt('Digite sua idade: '))

if(idade < idade_doze){
    alert('você ganhou 50% de desconto no ingresso do cinema!')
}else if (idade >= idade_doze && idade <= idade_dezoito){
    alert('você ganhou 25% de desconto no ingresso do cinema!')
}else {
    alert('você não ganhou desconto no ingresso do cinema!')
}