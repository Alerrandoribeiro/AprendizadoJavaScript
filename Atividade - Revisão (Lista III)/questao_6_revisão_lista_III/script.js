/**6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), cadastrar para cada sprint um título e um objetivo. */

let tempo_total_projeto_em_dias
let periodo_das_sprints
let media_sprints = 0
let cont = 1
lista = ''
tempo_total_projeto_em_dias = parseInt(prompt('Digite o tempo total do projeto em dias: '))
periodo_das_sprints = parseInt(prompt('Digite o periodo das sprints: '))

media_sprints = tempo_total_projeto_em_dias/periodo_das_sprints

while(cont <= media_sprints ){
    let titulo =  prompt('Digite o titulo da sprint ' + cont +': ')
    let objetivo =  prompt('Digite o objetivo da sprint ' + cont +': ')

     lista += 'Sprint ' + cont + ': \nTítulo: ' + titulo + '\nObjetivo: ' + objetivo + '\n\n'
      cont ++
}
alert('Média sprints: ' + media_sprints)
alert(lista)




