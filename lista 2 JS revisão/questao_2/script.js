/**2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. */

let casais_leoes, territorio_leoes_balaios, casais_leoes_balaios, soma_geral_area_dominada, quantidade_leoes, quantidade_leoes_solteiros 

territorio_leoes_balaios = 320//km2 por indivíduo
casais_leoes_balaios = 400//km2 juntos
quantidade_leoes = 14

casais_leoes = Number(prompt('Informe quantos casais de leões existem na reserva ambiental: '))

soma_geral_area_dominada = quantidade_leoes  * territorio_leoes_balaios
quantidade_leoes_solteiros =  quantidade_leoes - (casais_leoes * 2)

alert(`Soma geral de área dominada: ${soma_geral_area_dominada} km²\nQuantidade de leões: ${quantidade_leoes} leões\nQuantidade leões solteiros: ${quantidade_leoes_solteiros}\nQuantidade de Casais: ${casais_leoes}`)
