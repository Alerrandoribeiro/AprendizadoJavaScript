

/*let produtos = []

let produto = {

    nome: 'Bala',
    preco: 1
}
produtos.push(produto)

produto = {
    nome: 'Chiclete',
    preco: 0.25
}

produtos.push(produto)



for (let i = 0; i < produtos.length; i++) {
 

    alert('Produto: ' + produtos[i].nome)
    alert('Preço: ' + produtos[i].preco)

} */

let nome =  document.getElementById('productName')
let descricao =  document.getElementById('productDescription')
let valor =  document.getElementById('productValue')

let produtos = []

function cadastrar(){
    let produto = {


        nome: nome.value,
        descricao: descricao.value, 
        valor: Number(valor.value)

    }
    produtos.push(produto)
    console.log(produtos);

    nome.value = ''
    descricao.value = ''
    valor.value = ''
    nome.focus()
}


function pesquisar(){
    let pesquisa = nome.value
    
    for(let i = 0; i < produtos.length; i++){
         console.log(produtos[i].nome)
    }

    console.log(pesquisa)
}






