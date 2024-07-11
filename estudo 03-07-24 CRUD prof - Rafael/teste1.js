// Exemplo de array de dados
const dataArray = ['Maçã', 'Banana','buma' , 'Laranja', 'Uva', 'Pera', 'Abacaxi', 'Manga'];

// Função de pesquisa no array
function searchArray() {
    // Obtém o valor digitado pelo usuário
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Filtra o array com base na consulta
    const results = dataArray.filter(item => item.toLowerCase().includes(query));
    
    // Obtém o elemento da lista de resultados
    const resultsList = document.getElementById('results');
    
    // Limpa os resultados anteriores
    resultsList.innerHTML = '';
    
    // Exibe os resultados filtrados
    results.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        resultsList.appendChild(listItem);
    });
}
