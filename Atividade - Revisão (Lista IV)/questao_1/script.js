/**1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido. */

let numero;

numero = Number(prompt('Digite um número: '))
multiplica(numero)

function multiplica(numero) {
    let lista = ''

    for (let j = 1; j <= 10; j++) {

        lista += `${numero} x ${j} = ` + numero * j + `\n`
    }

    return alert(lista)
}