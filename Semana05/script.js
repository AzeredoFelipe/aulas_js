// Classe Tarefa
function Tarefa(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
    this.status = 'Pendente';
}

Tarefa.prototype.concluir = function() {
    this.status = 'Concluída';
};

Tarefa.prototype.detalhes = function() {
    return 'Nome: ' + this.nome + '\nDescrição: ' + this.descricao + '\nStatus: ' + this.status;
};

function GerenciadorDeTarefas() {
    this._tarefas = [];
}

GerenciadorDeTarefas.prototype.adicionarTarefa = function(tarefa) {
    this._tarefas.push(tarefa);
    this.listarTarefas();
};

GerenciadorDeTarefas.prototype.listarTarefas = function() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = ''; // Limpa a lista antes de exibir as tarefas

    this._tarefas.forEach(function(tarefa, index) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const span = document.createElement('span');
        span.textContent = tarefa.nome + ' - ' + tarefa.status;

        const div = document.createElement('div');

        // Botão "Detalhes"
        const btnDetalhes = document.createElement('button');
        btnDetalhes.className = 'btn btn-info btn-sm mr-2';
        btnDetalhes.textContent = 'Detalhes';
        btnDetalhes.onclick = function() {
            gerenciador.visualizarDetalhes(index);
        };

        // Botão "Concluir"
        const btnConcluir = document.createElement('button');
        btnConcluir.className = 'btn btn-success btn-sm mr-2';
        btnConcluir.textContent = 'Concluir';
        btnConcluir.onclick = function() {
            gerenciador.marcarComoConcluida(index);
        };

        // Botão "Remover"
        const btnRemover = document.createElement('button');
        btnRemover.className = 'btn btn-danger btn-sm';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            gerenciador.removerTarefa(index);
        };

        div.appendChild(btnDetalhes);
        div.appendChild(btnConcluir);
        div.appendChild(btnRemover);

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    });
};

GerenciadorDeTarefas.prototype.marcarComoConcluida = function(index) {
    this._tarefas[index].concluir();
    this.listarTarefas();
};

GerenciadorDeTarefas.prototype.removerTarefa = function(index) {
    this._tarefas.splice(index, 1);
    this.listarTarefas();
};

GerenciadorDeTarefas.prototype.visualizarDetalhes = function(index) {
    const detalhes = this._tarefas[index].detalhes();
    alert(detalhes);
};

const gerenciador = new GerenciadorDeTarefas();

document.getElementById('formTarefa').onsubmit = function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;

    const novaTarefa = new Tarefa(nome, descricao);
    gerenciador.adicionarTarefa(novaTarefa);

    document.getElementById('nomeTarefa').value = '';
    document.getElementById('descricaoTarefa').value = '';
};
