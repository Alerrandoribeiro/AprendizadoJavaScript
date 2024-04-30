/**1) Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais. Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato. */


// Se o valor do dólar estiver acima de 5 reais

let valor_dolar_no_momento, dolar, reais, valor_convertido

reais =  5

valor_dolar_no_momento = Number(prompt('Informe o valor atual do dólar: '))
dolar = Number(prompt('Informe o valor a ser convertido para reais: '))

valor_convertido = dolar * valor_dolar_no_momento

if(valor_dolar_no_momento > reais){

    alert(`O valor do dolar está caro e o valor covertido é ${valor_convertido.toFixed(2)} R$`)

} else {
   
    alert(`O valor do dolar está barato e o valor covertido é ${valor_convertido.toFixed(2)} R$`)
}
