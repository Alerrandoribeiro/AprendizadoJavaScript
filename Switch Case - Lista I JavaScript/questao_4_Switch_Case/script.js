/**4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial. */
 
// Criar uma variável com um valor que represente o saldo inicial
// Considere que um saque só pode ser realizado caso haja saldo suficiente
//  Na opção saldo, apenas mostrar o saldo atual na tela

let tipo_operacao_bancaria, saldo_inicial, deseja_continuar, nome, deposito_bancario, saque_bancario, numero_da_conta

nome = prompt('Digite seu nome: ')
numero_da_conta = parseInt(prompt('Digite o número da sua conta: '))
deseja_continuar = confirm('Bem - Vindo ' + nome.toUpperCase() + ' deseja continuar a operação!')

if (deseja_continuar == true){

    saldo_inicial = parseFloat(prompt('Digite o seu saldo: '))
    tipo_operacao_bancaria = Number(prompt('Tipos de operação sendo:\n\n1 - Saldo\n2 - Depósito\n3 - Saque\n\nInforme a opção desejada:'))

} else{
    alert('Programa finalizado com sucesso.')
}

switch(tipo_operacao_bancaria){
   case 1:
          alert(`Seu saldo é ${saldo_inicial.toFixed(2)} R$`)
          mensagem_de_saida()
    break
    case 2: 
    deposito_bancario = Number(prompt('Informe o valor a ser depósitado: '))
          alert(`Valor depósitado: ${deposito_bancario.toFixed(2)} R$\nValor atualizado: ${valor_depositado(saldo_inicial,deposito_bancario.toFixed(2))} R$`)
          mensagem_de_saida()
    break
    case 3: 
        alert(`Você possui ${saldo_inicial.toFixed(2)} R$ na sua conta.`)
        saque_bancario = Number(prompt('Informe o valor a ser retirado: '))

        while(saque_bancario > saldo_inicial || saque_bancario == 0 || saque_bancario < 0){
            if(saque_bancario == 0){
                alert(`Você não pode sacar ${saque_bancario.toFixed(2)} da sua conta.`)
            } else if(saque_bancario < 0 ){
                alert(`Você não pode sacar ${saque_bancario.toFixed(2)} da sua conta.`)      
            }else{
                alert('O valor solicitado é maior que o saldo da sua conta.')
            }
                saque_bancario = Number(prompt('Informe o valor a ser retirado: '))
        }
          alert(`Valor sacado: ${saque_bancario.toFixed(2)} R$\nValor atualizado: ${valor_sacado(saldo_inicial,saque_bancario).toFixed(2)} R$`)
          mensagem_de_saida()
    break
}

function mensagem_de_saida(){
      return alert(`Operação encerrada, tenha um bom dia!`)
}
function valor_sacado(valor, saque) {
    valor = parseFloat(valor);
    saque = parseFloat(saque);
    let novoSaldo = valor - saque;
    return Math.abs(novoSaldo.toFixed(2)); // // Utilizamos Math.abs() para garantir que o resultado seja positivo
}
function valor_depositado(valor,saldo){

    valor = parseFloat(valor) // converte um valor dentro da função
    saldo = parseFloat(saldo)
    
    return valor + saldo // retorna um valor numérico e não concatena o valor + saldo

}