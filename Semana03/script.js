// Array para armazenar os itens
let itens = [];

// Função para atualizar a lista ordenada no HTML
function atualizarLista() {
    // Ordena o array em ordem alfabética
    itens.sort();
    
    // Seleciona o elemento da lista no HTML
    const listaOrdenada = document.getElementById('listaOrdenada');

    // Limpa o conteúdo atual da lista
    listaOrdenada.innerHTML = '';

    // Adiciona cada item do array na lista ordenada
    itens.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        listaOrdenada.appendChild(li);
    });
}

// Evento para adicionar um item ao array e atualizar a lista
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página
    
    // Pega o valor do input
    const novoItem = document.getElementById('item').value;
    
    // Adiciona o novo item ao array
    itens.push(novoItem);
    
    // Limpa o campo de input
    document.getElementById('item').value = '';

    // Atualiza a lista ordenada
    atualizarLista();
});
