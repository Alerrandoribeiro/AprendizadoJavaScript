let produtos = []

function cadastrarProdutos(){
      let produto = {
        nome: prompt('Nome do produto: '),
        preco: Number(prompt('preço do produto: '))

    }
    produtos.push(produto) // jogando o objeto para dentro do array produtos
    console.log(produtos)
}


document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica para cadastrar produto
    alert('Produto cadastrado!');
});

document.getElementById('pesquisar').addEventListener('click', function() {
    // Implementar lógica para pesquisar produto
    alert('Pesquisar produto!');
});

document.getElementById('editar').addEventListener('click', function() {
    // Implementar lógica para editar produto
    alert('Editar produto!');
});

document.getElementById('deletar').addEventListener('click', function() {
    // Implementar lógica para deletar produto
    alert('Deletar produto!');
});