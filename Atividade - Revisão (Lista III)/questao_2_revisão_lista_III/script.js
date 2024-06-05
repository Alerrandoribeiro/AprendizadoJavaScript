/**2) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres). */

let totalLeitos = 130;
let capacidadeMaxima = totalLeitos * 0.5;
let leitosOcupados = 25;
rodar = true

while (rodar) {
    let entrada = parseInt(prompt("Digite o número de pessoas que entram (positivo) ou saem (negativo):"));

    if (entrada > 0) { // Pessoas entrando
        if (leitosOcupados + entrada > capacidadeMaxima) {
            let excedente = leitosOcupados + entrada - capacidadeMaxima;
            alert(`Não é possível pois ultrapassa a capacidade em ${excedente} leitos.`);
            rodar =  false
        } else {
            leitosOcupados += entrada;
            alert("Entrada registrada com sucesso.");
        }
    } else if (entrada < 0) { // Pessoas saindo
        if (leitosOcupados - entrada < 25) {
            alert("Não é possível remover mais hóspedes do que os atuais.");
            rodar = false
        } else {
            leitosOcupados -= Math.abs(entrada);
            alert("Saída registrada com sucesso.");
        }
    } else {
        alert("Entrada inválida. Tente novamente.");
    }

    let vagasDisponiveis = capacidadeMaxima - leitosOcupados;
    alert(`Leitos ocupados: ${leitosOcupados}`);
    alert(`Vagas disponíveis: ${vagasDisponiveis}`);

    if (vagasDisponiveis === 0) {
        alert("Não há mais vagas disponíveis.");
      rodar = false
    }
}


