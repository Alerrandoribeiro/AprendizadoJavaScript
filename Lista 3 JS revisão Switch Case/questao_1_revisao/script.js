/**1) Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!". */

let cor_semaforo

cor_semaforo =  prompt('Informe a cor do semáforo:').toLowerCase()

verifica_cor(cor_semaforo) // chamando a função


function verifica_cor(cor){

    let verde = 'verde'
    let amarelo = 'amarelo'
    let vermelho = 'vermelho'

    switch(true){
        case cor == verde:
            return alert('Pode seguir!')
         break
        case cor == amarelo:
            return alert('Alerta, pare!')
         break
        case  cor == vermelho:
            return alert('Pare imediatamente!') 
         break
        default:
            alert('Digite as cores: Verde, Amarelo ou Vermelho')
    } 
  
}