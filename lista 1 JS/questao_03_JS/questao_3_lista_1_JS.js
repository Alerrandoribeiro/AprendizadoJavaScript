/**
 3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.  */

 let anoNascimento, anoAtual, idade, mesesUsuario, mesesDoano = 12, diasDoAno = 365, diasDeVidaUsuario, semanasDeVidaUsuario, semanasNoAno = 52

 anoNascimento = Number(prompt('Digite a data de nascimento:'))
 anoAtual = Number(prompt('Informe o ano atual:'))

 idade = anoAtual - anoNascimento 
 mesesUsuario =  idade * mesesDoano
 diasDeVidaUsuario = idade * diasDoAno 
semanasDeVidaUsuario = semanasNoAno * idade
 
 alert('Idade usuário: ' + idade + ' anos\nMeses de vida: ' + mesesUsuario + ' meses\nDias de vida: ' + diasDeVidaUsuario + ' dias\nSemanas de vida: ' + semanasDeVidaUsuario + ' semanas' )