/**3) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".
 */

let nome, intolerante_celiatico, intolerante_lactose, alimentoUM, alimentoDois, alimentoTres, respostaUM, respostaDois, respostaTres, nao_pode_comer1, nao_pode_comer2, nao_pode_comer3, continua_case

continua_case == true

nome = prompt('Digite seu nome: ').toUpperCase()
intolerante_celiatico = confirm('Você tem intolerância a glúten ?')
intolerante_lactose = confirm('Você tem intolerância a lactose ?')

if (intolerante_celiatico == true || intolerante_lactose == true) {
    alimentoUM = prompt('Digite o nome do 1º alimento:')
    respostaUM = confirm(`${alimentoUM} contém glútem ou lactose ?`)
    alimentoDois = prompt('Digite o nome do 2º alimento:')
    respostaDois = confirm(`${alimentoDois} contém glútem ou lactose ?`)
    alimentoTres = prompt('Digite o nome do 3º alimento:')
    respostaTres = confirm(`${alimentoTres} contém glútem ou lactose ?`)
} else {
    alert(`Paciente: ${nome}\n\nVocê não tem intolerância a lactose e glútem.`)
}
nao_pode_comer1 = alimentoUM
nao_pode_comer2 = alimentoDois
nao_pode_comer3 = alimentoTres

switch (continua_case) {

    case respostaUM == true && respostaTres == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer1} e ${nao_pode_comer3}`)
        break
    case respostaUM == true && respostaDois == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer1} e ${nao_pode_comer2}`)
        break
    case respostaDois == true && respostaTres == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer2} e ${nao_pode_comer3}`)
        break
    case respostaUM == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer1}`)
        break
    case respostaDois == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer2}`)
        break
    case respostaTres == true:
        alert(`Paciente: ${nome}\n\nDieta inadequada, contém alimentos aos quais o paciente é intolerante!\nVocê não pode comer ${nao_pode_comer3}`)
        break
}



