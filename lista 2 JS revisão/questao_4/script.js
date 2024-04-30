/**4) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. */

let metro_quadrado_tem_azulejos, largura_piscina, cumprimento_piscina, caixa_azulejo_tem,  metro_quadrado, quantidade_azulejos, valor_a_ser_pago, caixas_azulejos

metro_quadrado_custa_azulejos = 91
caixa_azulejo_tem = 60


largura_piscina = Number(prompt('Digite a largura da piscina em metros: '))
cumprimento_piscina = Number(prompt('Digite o cumprimento da piscina em metros: '))


metro_quadrado = largura_piscina * cumprimento_piscina 
quantidade_azulejos = metro_quadrado * caixa_azulejo_tem
valor_a_ser_pago = metro_quadrado_custa_azulejos * metro_quadrado
caixas_azulejos = quantidade_azulejos / caixa_azulejo_tem

alert(`Largura da piscina: ${largura_piscina} metros\nCumprimento da piscina: ${cumprimento_piscina} metros\nMetro(s) quadrado(s): ${metro_quadrado.toFixed(2)} m²\nQuantidade azulejos: ${quantidade_azulejos} azulejos\nCaixas de azulejos: ${caixas_azulejos} caixas\nValor a ser pago: ${valor_a_ser_pago} R$`)

