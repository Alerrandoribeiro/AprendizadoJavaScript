/**6) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro). */

let tentativas,pontuacao_arremesso, soma_pontos

tentativas = 3
cont = 1
soma_pontos = 0

while( tentativas >= cont){

    pontuacao_arremesso = Number(prompt(`Digite a pontuação do ${cont}º arremesso:`))

    while(pontuacao_arremesso > 5 || pontuacao_arremesso < 0 || isNaN(pontuacao_arremesso)){
            // fazendo validação dentro do while, evitado pegar NaN, números maiores que 5 e menores que 0
        
           alert('Informe uma pontuação válida de 0 a 5.')

           pontuacao_arremesso = Number(prompt(`Digite a pontuação do ${cont}º arremesso:`))
    }

    soma_pontos = soma_pontos + pontuacao_arremesso
    cont++
}

classificacao_peteca(soma_pontos) // chamando a função que calcula a classificação dos pontos

// Utilizando uma função com Switch Case 
function classificacao_peteca(pontuacao){
 let classificacao  = pontuacao
    
 switch(true){
     case classificacao == 15: 
         return alert(`Deus da peteca com 15 pontos.`)
      break
     case classificacao < 15 && classificacao > 9: 
        return alert(`Petequeiro profissa com ${soma_pontos} pontos.`)
      break
     case classificacao < 10 && classificacao > 4: 
        return alert(`Petequeiro de final de semana com ${soma_pontos} pontos.`)
      break
     case classificacao < 5 && classificacao > 0: 
        return alert(`Pseudo-petequeiro com ${soma_pontos} pontos.`)
      break
     case classificacao == 0: 
        return alert(`Nunca petequeiro com ${soma_pontos} pontos.`)
     break
   }
     
}