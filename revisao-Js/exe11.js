/**Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Imprima cada propriedade no console.
Adicione uma propriedade representando a cor do carro e imprima o objeto atualizado.
Remova a propriedade de ano do objeto e imprima o objeto atualizado. */

function exercicioOnze(){
    let carro = {
        marca: 'Ford',
        modelo: 'Fusion',
        ano: 2018
    };

    alert(`Propriedades do carro:\n\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nAno: ${carro.ano}`);

    let corCarro = prompt('Informe a cor do carro: ');  
    carro.cor = corCarro;  // adicionando propriedades no objeto.

    alert(`Propriedades do carro:\n\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nAno: ${carro.ano}\nCor: ${carro.cor}` );

    delete carro.ano;

    alert(`Propriedades do carro:\n\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nCor: ${carro.cor}` );

    console.log(carro);

    

}

