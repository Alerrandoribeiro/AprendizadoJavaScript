/**Escreva um programa que imprima no console todos os números de 1 a 100. */

function exercicioSete() {
   
    let numero = 100;
    let cont = 1;
    let impressao = document.getElementById('ListaSete');
    impressao.innerHTML = ''; 

    while (numero >= cont) {
        
        impressao.innerHTML += numero + '<br>'; 
        numero--; 
    }

}

function limpaHtml(){
    let impressao = document.getElementById('ListaSete');
    impressao.innerHTML = ''; 
}