/**Crie um array com 3 frutas e imprima cada uma no console.
Adicione mais uma fruta ao array e imprima o array atualizado.
Remova a última fruta do array e imprima o array atualizado. */

function exercicioOito(){
    let frutas = ['Banana ','Maça ','Uva '];
    let adicionar = prompt('Digite um nome de uma fruta: ');
    frutas.push(adicionar);
    alert('Você adidionou ' + adicionar + ' a sua lista.');
    alert('Lista atualizada ' + frutas);

    let desejaRemover = confirm('Deseja remover alguma fruta?');

        if (desejaRemover) {
            // Solicita ao usuário o nome da fruta a ser removida
            let remover = prompt('Informe o nome da fruta a ser retirada:');

            // Encontra o índice da fruta no array
            let indice = frutas.indexOf(remover);

            if (indice !== -1) {
                // Remove o elemento encontrado no índice
                frutas.splice(indice, 1);

                // Formata a lista com join
                let listaAtualizada = frutas.join(', ');
                alert('Lista atualizada: ' + listaAtualizada);
            } else {
                alert('Fruta não encontrada na lista.');
            }
        } else {
            // Formata a lista com join
            let listaFinal = frutas.join(', ');
            alert('Lista final: ' + listaFinal);
        }
}


