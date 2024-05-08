/**4) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos */

let idade, tempo_servico

idade = parseInt(prompt('Digite sua idade: '))
tempo_servico = Number(prompt('Informe o tempo de serviço: '))

switch(true){
    case idade >= 65 || tempo_servico >= 30 || (tempo_servico >=25 && idade >= 60):
        if(tempo_servico > idade){
            alert('Erro. Tempo de serviço é maior que sua idade!')
            break
        }

    alert("Você pode se aposentar!")
    break
    default:
        alert('Você não pode se aposentar!')
}
