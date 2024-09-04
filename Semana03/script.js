let itens = [];

function adicionarItem() {
    const novoItem = document.getElementById('item').value;
    
    itens.push(novoItem);
    
    document.getElementById('item').value = '';

    
    atualizarLista();
}

function atualizarLista() {
    
    itens.sort();
    
    const listaOrdenada = document.getElementById('listaOrdenada');

    listaOrdenada.innerHTML = '';

    itens.forEach(function(item, index) {
        const li = document.createElement('li');
        li.textContent = `${index + 1}º - ${item}`;
        li.style.textAlign = 'center';  
        listaOrdenada.appendChild(li);
    });
}
