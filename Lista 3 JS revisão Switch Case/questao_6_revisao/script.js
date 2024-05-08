/**6) Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número, e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados, após o usuário digitar os quatro números, não mostrar maior, menor nem soma, mas sim uma mensagem "Você digitou números repetidos". */

let numeroUm, numeroDois, numeroTres, numeroQuatro, maior, menor, soma

soma = 0
maior = 0
menor = 0

numeroUm = Number(prompt('Digite o 1º número:'))
numeroDois = Number(prompt('Digite o 2º número:'))
numeroTres = Number(prompt('Digite o 3º número:'))
numeroQuatro = Number(prompt('Digite o 4º número:'))

if(numeroUm > maior){
    maior = numeroUm
}else if( numeroDois > maior){
    maior = numeroDois
}else if(numeroTres > maior){
     maior = numeroTres
}else{
    maior = numeroQuatro
}

alert(maior)

switch(true){
    case numeroUm == numeroDois:
    case numeroUm == numeroTres:
    case numeroUm == numeroQuatro:

    case numeroDois == numeroUm:
    case numeroDois == numeroTres:
    case numeroDois == numeroQuatro:

    case numeroTres == numeroUm:
    case numeroTres == numeroDois:
    case numeroTres == numeroQuatro:

    case numeroQuatro == numeroUm:
    case numeroQuatro == numeroDois:
    case numeroQuatro == numeroTres:

         alert("Você digitou números repetidos!")
         break
}
