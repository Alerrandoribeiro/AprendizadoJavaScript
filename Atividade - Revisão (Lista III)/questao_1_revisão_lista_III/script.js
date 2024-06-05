/**1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let tipo_de_moeda, soma_um_centavo = 0, soma_cinco_centavos = 0, soma_dez_centavos = 0, soma_vinte_e_cinco_centavos = 0, soma_cincoenta_centavos = 0, total_economia = 0, tipo_um = 0,
    tipo_cinco = 0, tipo_dez = 0, tipo_vinte_e_cinco = 0, tipo_cincoenta = 0

while (tipo_de_moeda != 0) {
    tipo_de_moeda = Number(prompt('Qual moeda deseja inserir no cofre: '))
    switch (true) {
        case tipo_de_moeda == 0.01:
            alert('1 centavo adicionado ao cofre.')
            soma_um_centavo += tipo_de_moeda
            tipo_um++
            break
        case tipo_de_moeda == 0.05:
            alert('5 centavos adicionado ao cofre.')
            soma_cinco_centavos += tipo_de_moeda
            tipo_cinco++
            break
        case tipo_de_moeda == 0.10:
            alert('10 centavos adicionado ao cofre.')
            soma_dez_centavos += tipo_de_moeda
            tipo_dez++
            break
        case tipo_de_moeda == 0.25:
            alert('25 centavos adicionado ao cofre.')
            soma_vinte_e_cinco_centavos += tipo_de_moeda
            tipo_vinte_e_cinco++
            break
        case tipo_de_moeda == 0.50:
            alert('50 centavos adicionado ao cofre.')
            soma_cincoenta_centavos += tipo_de_moeda
            tipo_cincoenta++
            break
        default:
            if (tipo_de_moeda == 0) {
                break
            }
            alert('Moeda não permitida!\n\nDigite 0 para encerrar o programa.')
    }

}

total_economia = soma_um_centavo + soma_cinco_centavos + soma_dez_centavos + soma_vinte_e_cinco_centavos + soma_cincoenta_centavos

alert(`O valor total das moedas é ${total_economia.toFixed(2)}R$\n\nQuantidade de cada moeda que foi colocada no cofre: \n\n 1 centavo: ${tipo_um}\n5 centavos: ${tipo_cinco}\n10 centavos: ${tipo_dez}\n25 centavos: ${tipo_vinte_e_cinco}\n50 centavos: ${tipo_cincoenta}`)