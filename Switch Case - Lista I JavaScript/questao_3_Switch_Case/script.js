/**3) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias". */

let opcaoMes

opcaoMes = parseInt(prompt("Opções do mês:\n\n0 Encerrar programa!\n\n1 Janeiro \n2 Fevereiro \n3 Março \n4 Abril \n5 Maio \n6 Junho \n7 Julho \n8 Agosto \n9 Setembro \n10 Outubro \n11 Novembro \n12 dezembro\n\nEscolha um valor referente ao mês de 1 a 12:"))

while (opcaoMes < 0 || opcaoMes > 12){
   alert("\nOpção inválida!\n")
   alert("Informe um número de 1 a 12 referente ao mês")
   opcaoMes = parseInt(prompt("Opções do mês:\n\n0 Encerrar programa!\n\n1 Janeiro \n2 Fevereiro \n3 Março \n4 Abril \n5 Maio \n6 Junho \n7 Julho \n8 Agosto \n9 Setembro \n10 Outubro \n11 Novembro \n12 dezembro\n\nEscolha um valor referente ao mês de 1 a 12:"))
}

switch (opcaoMes){
    case 1:
         alert("\nO mês de janeiro possui 31 dias. ")
        break
    case 2:
         alert("\nO mês de fevereiro possui 31 dias. ")
      break
    case 3:
         alert("\nO mês de março possui 31 dias. ")
      break
    case 4:
         alert("\nO mês de abril possui 31 dias. ")
      break
    case 5:
         alert("\nO mês de maio possui 31 dias. ")
      break
    case 6:
         alert("\nO mês de junho possui 31 dias. ")
      break
    case 7:
         alert("\nO mês de julho possui 31 dias. ")
      break
    case 8:
         alert("\nO mês de agosto possui 31 dias. ")
      break
    case 9:
         alert("\nO mês de setembro possui 31 dias. ")
      break
    case 10:
         alert("\nO mês de outubro possui 31 dias. ")
      break
    case 11:
         alert("\nO mês de novembro possui 31 dias. ")
      break
    case 12:
         alert("\nO mês de dezembro possui 31 dias. ")
        break
    case 0:
         alert("\nPrograma encerrado. ")
        break
      }
      