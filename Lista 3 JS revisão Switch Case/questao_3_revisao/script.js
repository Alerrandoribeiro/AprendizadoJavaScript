/**3) Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número. Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido. */

let opcao

opcao = parseInt(prompt("Digite um número de 1 a 7: "))

switch(true){
   case opcao == 1: 
      alert("Domingo")
   break
   case opcao == 2: 
      alert("Segunda-feira")
   break
   case opcao == 3: 
      alert("Terça-feira")
   break
   case opcao == 4: 
      alert("Quarta-feira")
   break
   case opcao == 5: 
      alert("Quinta-feira")
   break
   case opcao == 6: 
      alert("Sexta-feira")
   break
   case opcao == 7: 
      alert("Sábado")
   break
   default:
      alert('Opção inválida!')
}