/**8) Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos). */


let limite_lotação = 50

let qtd_pessoas_chegam_restaurante
let insumos = true
soma_pessoas = 0


while(soma_pessoas <= limite_lotação && insumos == true ){
    qtd_pessoas_chegam_restaurante = Number(prompt('Digite a quantidade de pessoas que chegam ao restaurante: '))
    insumos =  confirm("Use Ok para insumos ok / Cancelar para insumos insuficientes\n\nOs insumos estão ok? ")
    soma_pessoas = soma_pessoas + qtd_pessoas_chegam_restaurante
    alert('Chegaram ao restaurante ' + soma_pessoas + ' pessoas')
    
    if(insumos == false){
       alert('Faltaram insumos.')
    }
    if(soma_pessoas > 50){
        alert('Limite de pessoas ultrapassado.')
    }
}
