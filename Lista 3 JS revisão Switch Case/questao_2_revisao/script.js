/**2) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!". */

let vida_hp, valor_dano, continua

vida_hp = 100

continua = confirm('Deseja continuar ?')

while( continua == true){

    valor_dano = Number(prompt('Digite o valor do dano sofrido: '))

    alert('O dano sofrido foi ' + valor_dano + " de hp")
    verifica_vida(valor_dano)

    if(valor_dano < 0 || valor_dano == 0 ){
      alert('Sua vida chegou a zero')
    }

    continua = confirm('Deseja continuar ?') 
}
 

  

function verifica_vida(dano){
    switch(true){
        case dano == 0:
           return  alert('Game Over!')
          break
        case dano > 0 && dano < 21: 
           return alert('Dano crítico, quase sem vida!')
          break
        case dano > 20 && dano < 51: 
           return alert('Dano moderado, vida estável!')
          break
        case dano > 50 && dano <= 100: 
            return alert('Dano moderado, vida estável!')
          break
        default:{

             return alert('Informe um valor entre 0 e 100.')

        
        }
    }
}