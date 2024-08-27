/**Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números no console, exemplo:
A = 10; B = 5;
“A + B = 15”
“A - B = 5”
“A * B = 50”
“A / B = 2”
*/

function exercicioDois() {

    let opcao = prompt('Escolha uma opção: \n\n 1 - soma\n 2 - subtração\n 3 - divisão\n 4 - multiplicação')
    let numeroUm = Number(prompt('Digite o primeiro número: '))
    let numeroDois = Number(prompt('Digite o segundo número: '))
    switch (opcao) {
        case '1':
            alert(`A soma de ${numeroUm} e ${numeroDois} é ${soma(numeroUm, numeroDois)}.`);
            break;
        case '2':
            alert(`A subtração de ${numeroUm} e ${numeroDois} é ${subtracao(numeroUm, numeroDois)}.`);
            break;
        case '3':
            if (numeroDois === 0) {
                alert('Não é possível dividir por zero.');
            } else {
                alert(`A divisão de ${numeroUm} por ${numeroDois} é ${divisao(numeroUm, numeroDois)}.`);
            }
            break;
        case '4':
            alert(`A multiplicação de ${numeroUm} e ${numeroDois} é ${multiplicacao(numeroUm, numeroDois)}.`);
            break;
        default:
            alert('Opção inválida. Por favor, escolha uma opção entre 1 e 4.');
    }
}

function soma(a, b) {

    return Number(a + b);
}
function subtracao(a, b) {

    return a - b;
}
function divisao(a, b) {

    return a / b;
}
function multiplicacao(a, b) {

    return a * b;
}