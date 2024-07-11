

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
let encontrado = -1

function cadastrar(){
    let produto = {

        
        nome: nome.value,
        descricao: descricao.value, 
        valor: Number(valor.value)

    }
    produtos.push(produto)
    console.log(produtos);
  
    limpaPlaceholder()
}


function pesquisar(){
    let pesquisa = nome.value
    
    for(let i = 0; i < produtos.length; i++){
         if(produtos[i].nome == pesquisa){
           // console.log([i])
           descricao.value = produtos[i].descricao
           valor.value = produtos[i].valor
           encontrado = i
         }
    }

    console.log(pesquisa)
}

function gerarFakes(){
        let produto = {
    
            nome: 'Kichute',
            descricao: 'A melhor chuteira do mundo', 
            valor: 123
        }
        produtos.push(produto);
        produto = {
    
            nome: 'Bamba',
            descricao: 'Eu não lembro como era', 
            valor: 33
        }
        produtos.push(produto);
        produto = {
    
            nome: 'Caixa de ovo',
            descricao: 'Linda caixas de ovos', 
            valor: 12
        }
        produtos.push({
            nome: 'Garrafa de café',
            descricao: 'Garrafa de café do meu coração', 
            valor: 200
        });

        console.log(produtos)
}


function salvar(){
    produtos[encontrado].nome = nome.value
    produtos[encontrado].descricao = descricao.value
    produtos[encontrado].valor = valor.value
    console.log(produtos)

    limpaPlaceholder()

    alert('Produto alterado com sucesso.')
}


function limpaPlaceholder(){
    nome.value = ''
    descricao.value = ''
    valor.value = ''
    nome.focus() // volta ao local de input desejado
}


function deletar(){

    if(encontrado != -1){

        produtos.splice(encontrado,1)
        limpaPlaceholder()
        alert('Produto deletado com sucesso.')
        encontrado = -1
    }else{
        alert('Produto não encontrado!')
    }

}