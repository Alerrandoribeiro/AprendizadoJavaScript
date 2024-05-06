/**5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida. */


let valor_compra, categoria_assinante, valor_frete

valor_frete = 12.50

valor_compra = Number(prompt(`Digite o valor da compra: `))

while(valor_compra <= 0 || isNaN(valor_compra)){

    alert('Ops. Digite um valor válido!')

    valor_compra = Number(prompt(`Digite o valor da compra: `))

}

categoria_assinante = parseInt(prompt(`Verifique a qual categoria você pertence:\n\n1 -  Assinante Premium\n2 - Assinante Gold\n3 - Assinante Silver\n4 - Não assinante\n\nDigite uma opção:`))

while(categoria_assinante == 0 || categoria_assinante > 4 || categoria_assinante < 0 || isNaN(categoria_assinante)){

    alert('Ops. Digite um valor válido!')

    categoria_assinante = parseInt(prompt(`Verifique a qual categoria você pertence:\n\n1 -  Assinante Premium\n2 - Assinante Gold\n3 - Assinante Silver\n4 - Não assinante\n\nDigite uma opção:`))
}

switch(categoria_assinante){
    case 1:
    case 2:
    case 3:
    case 4:
         desconto_assinate(categoria_assinante)
}

function desconto_assinate(categoria){
   
    if(categoria == 1){
        valor_compra = valor_compra - (valor_compra * 0.2)
        return alert(`Parabéns você ganhou frete grátis, e o valor da sua compra com os 20% de desconto é ${valor_compra.toFixed(2)} R$.`)  
    
    }else if(categoria == 2){
        valor_compra = (valor_compra - (valor_compra * 0.2)) + valor_frete
        return alert(`Parabéns você ganhou 20% de desconto, e o valor da sua compra com o frete incluso é ${valor_compra.toFixed(2)} R$.`)  
     
    }else if(categoria == 3){
        valor_compra = (valor_compra - (valor_compra * 0.1)) + valor_frete
        return alert(`Parabéns você ganhou 10% de desconto, e o valor da sua compra com o frete incluso é ${valor_compra.toFixed(2)} R$.`)  
     
    }else{
        valor_compra = valor_compra  + valor_frete
        return alert(`Você não tem direito a nenhum desconto, e o valor da sua compra com o frete incluso é ${valor_compra.toFixed(2)} R$.`)  
    }
}

