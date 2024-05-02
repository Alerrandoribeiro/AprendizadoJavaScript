/**1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair */

let atendente 

alert('Escolha a opção de acordo com a númeração!')
atendente = parseInt(prompt('1 - Falar com atendente \n2 - Falar com o RH \n3 - Falar com o gerente \n4 - Sair \n\nDigite a opção desejada:'))
switch (true){
    case atendente == 1:
        alert('Olá sou a atendente em que posso ajudar?')
      break
    case atendente == 2:
        alert('Olá aqui é do RH o que deseja?')
      break
    case atendente == 3:
        alert('Olá aqui é o gerente o que deseja?')
      break
    case atendente == 4:
        alert('Programa encerrado!')
      break
    
}