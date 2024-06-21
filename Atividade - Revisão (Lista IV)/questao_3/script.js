/**3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP */

let totalAtaque = 3
let totalHp =  500
let ataqueBomba = 100
let ataqueGranada = 80
let ataqueArqueiro = 40
let defesaEscudo =  20 

while(totalAtaque > 0){
   let totalAtaque = prompt('Digite o tipo de ataque: \nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP')
}

function TowerDefense(escolhaAtaque,escolhaDefesa){
   let soma = 0
    for( let i =  0 ; i < totalAtaque ; i++){
        switch(escolhaAtaque){
            case escolha == 'A'.toLowerCase():
               soma =  ataqueBomba
                break
            case escolha == 'B'.toLowerCase():
               soma =  ataqueGranada 
                break
            case escolha == 'C'.toLowerCase():
                soma = ataqueArqueiro
                break
                default:
                  return  alert('Valor inválido!')
        }
        soma ++
    }
   return alert( totalHp = totalHp - soma )
}