/**7) Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS. Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%. Ao final mostrar o valor a receber. */

let motivo_saida_empresa, valor_fgts, multa, valor_receber_justa, valor_receber_sem_justa

multa = 4000


motivo_saida_empresa = prompt('Justa causa\nSem justa causa\n\nDigite o motivo da saída da empresa: ').toLowerCase()
valor_fgts = Number(prompt("Digite o valor do fgts: "))

valor_receber_justa = valor_fgts + multa
valor_receber_sem_justa = valor_fgts - (valor_fgts * 0.15)

switch (true) {
    case motivo_saida_empresa == 'justa causa':
        alert('o valor a receber é ' + valor_receber_justa + ' R$')
        break
    case motivo_saida_empresa == 'sem justa causa':
        alert('o valor a receber é ' + valor_receber_sem_justa + ' R$')
        break
    default:
        alert('Ops. Erro na digitação!')


}

