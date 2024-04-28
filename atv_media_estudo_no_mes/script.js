/* 4) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. 
Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e 
no final mostre a média de horas por semana naquele mês. */

let estudoSemanaUm, estudoSemanaDois, estudoSemanaTres, estudoSemanaQuatro, mediaSemanal, opcaoMes

opcaoMes = parseInt(prompt("Opções do mês: \n1 Janeiro \n2 Fevereiro \n3 Março \n4 Abril \n5 Maio \n6 Junho \n7 Julho \n8 Agosto \n9 Setembro \n10 Outubro \n11 Novembro \n12 dezembro\n\nEscolha um valor referente ao mês de 1 a 12:"))

while (opcaoMes == 0 || opcaoMes > 12){
   alert("\nOpção inválida!\n")
   alert("Informe um número de 1 a 12 referente ao mês")
   opcaoMes = parseInt(prompt("Opções do mês: \n1 Janeiro \n2 Fevereiro \n3 Março \n4 Abril \n5 Maio \n6 Junho \n7 Julho \n8 Agosto \n9 Setembro \n10 Outubro \n11 Novembro \n12 dezembro\n\nEscolha um valor referente ao mês de 1 a 12:"))
  
}
  
   estudoSemanaUm = parseFloat(prompt("Informe quantas horas você estudou na semana 1: "))  
   estudoSemanaDois = parseFloat(prompt("Informe quantas horas você estudou na semana 2: "))
   estudoSemanaTres = parseFloat(prompt("Informe quantas horas você estudou na semana 3: "))
   estudoSemanaQuatro = parseFloat(prompt("Informe quantas horas você estudou na semana 4: "))


    mediaSemanal = (estudoSemanaUm + estudoSemanaDois + estudoSemanaTres + estudoSemanaQuatro) / 4

 switch (opcaoMes){
   case 1:
        alert("\nA média de estudos por semana no mês de Janeiro é " + mediaSemanal + " horas ")
       break
   case 2:
        alert("\nA média de estudos por semana no mês de fevereiro é " + mediaSemanal + " horas ")
     break
   case 3:
        alert("\nA média de estudos por semana no mês de março é " + mediaSemanal + " horas ")
     break
   case 4:
        alert("\nA média de estudos por semana no mês de abril é " + mediaSemanal + " horas ")
     break
   case 5:
        alert("\nA média de estudos por semana no mês de maio é " + mediaSemanal + " horas ")
     break
   case 6:
        alert("\nA média de estudos por semana no mês de junho é " + mediaSemanal + " horas ")
     break
   case 7:
        alert("\nA média de estudos por semana no mês de julho é " + mediaSemanal + " horas ")
     break
   case 8:
        alert("\nA média de estudos por semana no mês de agosto é " + mediaSemanal + " horas ")
     break
   case 9:
        alert("\nA média de estudos por semana no mês de setembro é " + mediaSemanal + " horas ")
     break
   case 10:
        alert("\nA média de estudos por semana no mês de outubro é " + mediaSemanal + " horas ")
     break
   case 11:
        alert("\nA média de estudos por semana no mês de novembro é " + mediaSemanal + " horas ")
     break
   case 12:
        alert("\nA média de estudos por semana no mês de dezembro é " + mediaSemanal + " horas ")
       break
     }