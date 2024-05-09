/**8) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra. */

let numero_ovos, valor_compra

numero_ovos = parseInt(prompt('Digite o número de ovos: '))

calcula_valor_total_compra(numero_ovos) // chamando a função 

function calcula_valor_total_compra(quantidadeOvos) {
    let valor_compra
    switch (true) {
        case numero_ovos <= 12 && numero_ovos > 0:
            valor_compra = quantidadeOvos * 0.40
            return alert(`Quantidade Ovos: ${quantidadeOvos} \nO valor total da compra: ${valor_compra.toFixed(2)} R$`)
            break
        case numero_ovos >= 13 && numero_ovos <= 24:
            valor_compra = quantidadeOvos * 0.30
            return alert(`Quantidade Ovos: ${quantidadeOvos} \nO valor total da compra: ${valor_compra.toFixed(2)} R$`)
            break
        case numero_ovos > 25:
            valor_compra = quantidadeOvos * 0.25
            return alert(`Quantidade Ovos: ${quantidadeOvos} \nO valor total da compra: ${valor_compra.toFixed(2)} R$`)
            break
        default:
            return alert('Ops. Digite um número válido!')
    }
}