/**Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima no console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.
 */

function exercicioUm(){
    let nome,idade;

    nome = prompt('Digite seu nome: ')
    idade = Number(prompt('Digite sua idade: '))
    
    alert(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)
    
}