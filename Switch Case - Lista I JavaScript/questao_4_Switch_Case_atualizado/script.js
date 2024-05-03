/**4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial. */
 
// Criar uma variável com um valor que represente o saldo inicial
// Considere que um saque só pode ser realizado caso haja saldo suficiente
//  Na opção saldo, apenas mostrar o saldo atual na tela

let tipo_operacao_bancaria, saldo_inicial, deseja_continuar, nome, saldo_bancario, deposito_bancario

nome = prompt('Digite seu nome: ')
deseja_continuar = confirm('Bem - Vindo ' + nome + ' deseja continuar a operação!')

if (deseja_continuar == true){

    saldo_inicial = Number(prompt('Digite o seu saldo: '))
    tipo_operacao_bancaria = Number(prompt('Tipos de operação sendo:\n\n1 - Saldo\n2 - Depósito\n3 - Saque\n\nInforme a opção desejada:'))

} else{
    alert('Programa finalizado com sucesso.')
}

switch(tipo_operacao_bancaria){
   case 1:
    alert(`Seu saldo é ${saldo_bancario}`)
    break
    case 2: 
    deposito_bancario = Number(prompt('Informe o valor a ser depósitado: '))
    alert(`Valor depósitado: ${deposito_bancario.toFixed(2)} R$\nValor atualizado: ${valor_depositado(saldo_inicial,deposito_bancario)} R$`)
}

// erro no retorno 

function valor_sacado(valor,saldo){
    return saldo - valor
}
function valor_depositado(valor,saldo){

    valor = parseFloat(valor) // converte um valor dentro da função
    saldo = parseFloat(saldo)
    
    return valor + saldo // retorna um valor numérico e não concatena o valor + saldo

}