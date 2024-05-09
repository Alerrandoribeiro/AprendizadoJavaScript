/**9) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno. */

let ladoUm, ladoDois, LadoTres

ladoUm = Number(prompt('Digite o 1º lado do triângulo: '))
ladoDois = Number(prompt('Digite o 2º lado do triângulo: '))
ladoTres = Number(prompt('Digite o 3º lado do triângulo: '))

if (isNaN(ladoUm) || isNaN(ladoDois) || isNaN(ladoTres)) {
    alert('Ops. digite um número válido!')
} else {

    switch (true) {
        case ladoUm == ladoDois && ladoDois == ladoTres:
            alert('Triângulo equilátero pois os três lados são iguais.')
            break
        case ladoUm == ladoDois:
        case ladoUm == ladoTres:
        case ladoDois == ladoTres:
            alert('Triângulo isósceles pois tem dois lados iguais.')
            break
        case ladoUm != ladoDois && ladoDois != ladoTres:
            alert('Triângulo escaleno pois os lados são todos diferentes.')
            break
    }
}