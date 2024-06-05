/**4) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. */




function verificaPalpite(){
  
  let numero_secreto, advinhou, tentativas = 0
  
  alert('Bem vindo ao jogo de advinhação!')
  
  numero_secreto = Math.floor(Math.random() * 101);
  while(advinhou != numero_secreto){
      advinhou = Number(prompt('Qual número acha que foi sorteado? '))
      if (numero_secreto > advinhou){
         alert(`O número sorteado é maior que ${advinhou}`)
      }else if(numero_secreto == advinhou){
        alert('PARABÉNS VOCÊ ACERTOU!\n\nNúmero de tentativas: ' + tentativas + ' realizadas.')
      }
       else{
          alert(`O número sorteado é menor que ${advinhou}`)
      }
  
      tentativas ++
  }
}




