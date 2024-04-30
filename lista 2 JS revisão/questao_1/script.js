/**1) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.
 */

let distancia_percorrida_km, tempo_trilha_hora

distancia_percorrida_km = Number(prompt('Digite a distância(KM) percorrida: '))
tempo_trilha_hora = Number(prompt('Informe o tempo de duração da trilha(horas): '))

alert(`Sua média de velocidade durante essa trilha foi de ${velocidade_media(distancia_percorrida_km,tempo_trilha_hora).toFixed(2)} km/h `)

function velocidade_media(km,tempo){
    return km/tempo
}