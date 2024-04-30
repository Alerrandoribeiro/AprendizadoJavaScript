/**3) Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela. */
 let nota_atividade_individual, nota_seminario_equipe, nota_projeto, pesoUm_individual, pesoUm_seminario, pesoTres_projetoFinal, media 

 pesoUm_individual = 1
 pesoUm_seminario = 1
 pesoTres_projetoFinal = 3
 
nota_atividade_individual = Number(prompt('Digite a nota da atividade individual:'))
nota_seminario_equipe = Number(prompt('Digite a nota do seminário em equipe:'))
nota_projeto = Number(prompt('Digite a nota do projeto final:'))

 media = ((nota_atividade_individual * pesoUm_individual) + (nota_seminario_equipe * pesoUm_seminario) + (nota_projeto * pesoTres_projetoFinal)) / (pesoUm_individual + pesoUm_seminario + pesoTres_projetoFinal)

 alert("A média é " + media.toFixed(2))