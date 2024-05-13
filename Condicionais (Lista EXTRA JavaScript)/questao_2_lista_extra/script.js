/**2) Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada. Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado. */
let moeda, cara, coroa, numero_sorteado

cara = 'cara'
coroa = 'coroa'

moeda = prompt('Cara\n\Coroa\n\nDigite qual foi o resultado da moeda ?').toLowerCase()

numero_sorteado = Math.floor(Math.random() * 6) + 1 //Sorteando um número de 1 a 6 oleatório

switch (true) {
    case moeda == cara:
        alert(`Você perdeu sua vez!`)
        break
    case moeda == coroa:
        alert(`Avance ${numero_sorteado} casas no tabuleiro!`)
        break
    default:
        alert(`Ops. Valor inválido!`)
}

