/** 5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 7 anos de idade
  - "Infantil B" de 8 a 10 anos de idade
  - "Juvenil A" de 11 a 13 anos de idade
  - "Juvenil B" de 14 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais */

  let idade

  idade = parseInt(prompt('Digite sua idade: '))

  switch(true){
    case idade >= 5 && idade <=7:
        alert('Infantil A')
        break
    case idade >= 8 && idade <=10:
        alert('Infantil B')
        break
    case idade >= 11 && idade <=13:
        alert('Juvenil A')
        break
    case idade >= 14 && idade <=17:
        alert('Juvenil A')
        break
    case idade >= 18:
        alert('Senior')
        break
    default:
        alert('Digite um valor válido!')    
  }