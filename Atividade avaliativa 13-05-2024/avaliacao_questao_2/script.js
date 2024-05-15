/**No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 e 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice igual a 9 ou maior (destaque na página principal).


Critérios de avaliação:

(1,0) Receber e armazenar as notas dos três quesitos (avaliação).
(1,0) Calcular o índice do produto (média aritmética) com duas casas após a vírgula e mostrar na tela.
(1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela. */

let qualidade_produto, custo_beneficio, durabilidade, indice_avaliacao_produto

indice_avaliacao_produto_avaliacao_produto = 0


qualidade_produto = Number(prompt('Avalie a qualidade do produto de 0 a 10:'))
custo_beneficio = Number(prompt('Avalie o custo benefício do produto de 0 a 10:'))
durabilidade = Number(prompt('Avalie a durabilidade do produto de 0 a 10:'))

indice_avaliacao_produto = ((qualidade_produto + custo_beneficio + durabilidade) / 3).toFixed(2)

switch (true) {
    case indice_avaliacao_produto < 5:
        alert(`Média de avaliação ${indice_avaliacao_produto} e não ganha destaque`)
        break
    case indice_avaliacao_produto >= 5 && indice_avaliacao_produto < 7:
        alert(`Média de avaliação ${indice_avaliacao_produto} e ganha destaque na página da categoria.`)
        break
    case indice_avaliacao_produto >= 7 && indice_avaliacao_produto < 9:
        alert(`Média de avaliação ${indice_avaliacao_produto} e ganha destaque em promoções.`)
        break
    case indice_avaliacao_produto >= 9:
        alert(`Média de avaliação ${indice_avaliacao_produto} e ganha destaque na página principal.`)
        break
}