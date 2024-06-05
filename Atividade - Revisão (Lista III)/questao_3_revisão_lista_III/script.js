/**3) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal. */


function cume(){
    let cume_everest = 8848
    let acampamento_base_sul = 5360
    let percuso = acampamento_base_sul
    let altitude_metros_escalada_no_dia = 0
    let contagem_dias = 0
    
    while (percuso < cume_everest) {
        altitude_metros_escalada_no_dia = Number(prompt('Digite a altitude em metros escalada no dia: '));
        percuso += altitude_metros_escalada_no_dia
        contagem_dias++;
        alert('Você escalou ' + percuso + ' metros em ' + contagem_dias + ' dia(s)')
        if (contagem_dias >= 8 && percuso < cume_everest) {
            alert('Você deve voltar, pois corre risco de ficar sem oxigênio')
            break
        }
    
    }
    if (percuso >= cume_everest) {
        alert('Parabéns! Você alcançou o cume em ' + contagem_dias + ' dias')
    }

}