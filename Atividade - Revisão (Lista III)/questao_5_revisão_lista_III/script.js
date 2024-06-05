/**5) Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média. */

let cidade = prompt("Digite o nome da cidade: ")
let estado = prompt("Digite o nome do estado: ");
let diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
let totalAmplitude = 0;
let contador = 0;

while (contador < 5) {
    let dia = diasSemana[contador];
    let temperaturaMax = Number(prompt(`Digite a temperatura máxima de ${dia}:`));
    let temperaturaMin = Number(prompt(`Digite a temperatura mínima de ${dia}:`));

    let amplitude = temperaturaMax - temperaturaMin;
    alert(`Amplitude térmica de ${dia}: ${amplitude} °C`);
    
    totalAmplitude += amplitude;
    contador++;
}

let mediaAmplitude = totalAmplitude / 5;
alert(`Média de amplitude térmica da semana em ${cidade} no estado de ${estado}: ${mediaAmplitude.toFixed(2)} °C`);