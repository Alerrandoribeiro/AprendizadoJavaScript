/**4) Calculadora de média escolar: Faça um programa que solicite ao usuário as notas de três provas e, em seguida, calcule e exiba a média. Se a média for maior ou igual a 7, exiba "Aprovado"; senão, exiba "Reprovado"
 */

let nota_prova, media = 0

for(cont = 1; cont <= 3; cont ++){
   nota_prova = parseFloat(prompt(`Digite a ${cont} nota:`))
   
   media = media + nota_prova
}

media =  media / 3

if(media >= 7){
    alert(`Aprovado com média ${media.toFixed(2)}`)
}else {
    alert(`Reprovado com média ${media.toFixed(2)}`)
}