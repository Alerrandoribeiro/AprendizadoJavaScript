/** 4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 
 */
 let temperatura

 temperatura =  Number(prompt('Digite a temperatura em graus celsius: '))

 alert('A temperatura ' +  temperatura + ' °C é ' + conversor(temperatura) + ' °F' )


 function conversor(celsius){
    return (celsius * 1.8 ) + 32
 }