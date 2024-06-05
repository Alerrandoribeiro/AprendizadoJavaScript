/**7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta) */

let numeros_jogadores
let contador_externo = 1
let contador_interno = 1
let armazenar
let lista = ''

numeros_jogadores = Number(prompt('Digite o números de jogadores: '))
while (contador_externo <= numeros_jogadores) {
    contador_interno = 1
    armazenar = 0
    while (contador_interno <= 4) {

        let jogadas = parseInt(prompt('Digite o valor da ' + contador_interno + 'ª jogada do jodador ' + contador_externo + ': '))
     
        while (jogadas < 1 || jogadas > 20) {
            alert('Ops. Digite um valor de 1 a 20')
            jogadas = parseInt(prompt('Digite o valor da ' + contador_interno + 'ª jogada do jodador ' + contador_externo + ': '))
        }

        if (contador_interno == 2 || contador_interno == 3) {
            armazenar += jogadas

        }
        contador_interno++
    }
    lista += 'Pontos jogador ' + contador_externo + ': ' + armazenar + ' pontos \n\n'
    contador_externo++
}
alert(lista)