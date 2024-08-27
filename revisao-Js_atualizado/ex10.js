/**Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
Exemplo de resultado: “A string ‘aplicativos’ é grande.” */

function exercicioDez(){
    let tamanho =  prompt('digite uma palavra: ')

    if(tamanho.length <= 5){
        alert(`A string ${tamanho} é pequena e tem tamanho ${tamanho.length}.`)
    }else if(tamanho.length <=10){
        alert(`A string ${tamanho} é média e tem tamanho ${tamanho.length}.`)
    }else{
        alert(`A string ${tamanho} é grande e tem tamanho ${tamanho.length}.`)
    }
}