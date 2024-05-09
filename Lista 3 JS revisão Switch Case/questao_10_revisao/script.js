/**10) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25 */

   let frutas_sorteadas, primeiraFruta, segundaFruta,terceiraFruta, cereja, laranja

   cereja = 'cereja'
   laranja = 'laranja'

alert('Sorteio de frutas somente de laranja e cereja')
primeiraFruta = prompt('Digite a 1º fruta sorteada:').toLowerCase()
segundaFruta = prompt('Digite a 2º fruta sorteada:').toLowerCase()
terceiraFruta = prompt('Digite a 3º fruta sorteada:').toLowerCase()

switch(true){
    case primeiraFruta == cereja && segundaFruta == cereja && terceiraFruta == cereja:
        alert('Você ganhou 100 reais')
        break
        case primeiraFruta == laranja && segundaFruta == laranja && terceiraFruta == laranja:
            alert('Você ganhou 80 reais')
            break
        case primeiraFruta == cereja && segundaFruta == laranja && terceiraFruta == cereja:
            alert('Você ganhou 50 reais')
            break
        case primeiraFruta == laranja && segundaFruta == cereja && terceiraFruta == laranja:
            alert('Você ganhou 25 reais')
            break
            default:
                alert('valor inválido!')
}