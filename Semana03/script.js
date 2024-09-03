// Array para armazenar os itens
let itens = [];

// Função para ordenar o array e atualizar a lista no HTML
function ordenarItens() {
    itens.sort();
}

// Função para limpar o campo de input
function limparInput() {
    document.getElementById('item').value = '';
}

// Função para criar um novo elemento de lista
function criarElementoLista(item) {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
}

// Função para atualizar a lista ordenada no HTML
function atualizarLista() {
    // Ordena os itens
    ordenarItens();

    // Seleciona o elemento da lista no HTML
    const listaOrdenada = document.getElementById('listaOrdenada');

    // Limpa o conteúdo atual da lista
    listaOrdenada.innerHTML = '';

    // Adiciona cada item do array na lista ordenada
    itens.forEach(function(item) {
        const li = criarElementoLista(item);
        listaOrdenada.appendChild(li);
    });
}

// Função para adicionar um novo item ao array
function adicionarItem(novoItem) {
    itens.push(novoItem);
}

// Função para lidar com o evento de submissão do formulário
function processarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página
    
    // Pega o valor do input
    const novoItem = document.getElementById('item').value;

    // Adiciona o novo item ao array
    adicionarItem(novoItem);

    // Limpa o campo de input
    limparInput();

    // Atualiza a lista ordenada
    atualizarLista();
}

// Configuração do evento de submissão do formulário
function configurarEventoFormulario() {
    const form = document.getElementById('form');
    form.addEventListener('submit', processarFormulario);
}

// Função principal para inicializar o comportamento da página
function inicializar() {
    configurarEventoFormulario();
    atualizarLista();
}

// Inicializa o script
inicializar();
