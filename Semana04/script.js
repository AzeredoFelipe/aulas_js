function alternarCampos() {
    const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;
    const camposEspecificos = document.getElementById('campos_especificos');
    
    // Limpa os campos específicos existentes
    camposEspecificos.innerHTML = '';

    if (tipoUsuario === 'Aluno') {
        // Cria e adiciona campos específicos para Aluno
        const cursoDiv = document.createElement('div');
        cursoDiv.className = 'form-group';
        cursoDiv.innerHTML = `
            <label for="curso">Curso:</label>
            <input type="text" id="curso" name="curso" placeholder="Digite seu curso">
            <div id="curso_erro" class="erro"></div>
        `;
        camposEspecificos.appendChild(cursoDiv);

        const matriculaAlunoDiv = document.createElement('div');
        matriculaAlunoDiv.className = 'form-group';
        matriculaAlunoDiv.innerHTML = `
            <label for="matricula_aluno">Matrícula:</label>
            <input type="text" id="matricula_aluno" name="matricula_aluno" placeholder="Digite sua matrícula">
            <div id="matricula_aluno_erro" class="erro"></div>
        `;
        camposEspecificos.appendChild(matriculaAlunoDiv);

    } else if (tipoUsuario === 'Professor') {
        // Cria e adiciona campos específicos para Professor
        const areaDiv = document.createElement('div');
        areaDiv.className = 'form-group';
        areaDiv.innerHTML = `
            <label for="area">Área:</label>
            <input type="text" id="area" name="area" placeholder="Digite sua área de atuação">
            <div id="area_erro" class="erro"></div>
        `;
        camposEspecificos.appendChild(areaDiv);

        const matriculaProfessorDiv = document.createElement('div');
        matriculaProfessorDiv.className = 'form-group';
        matriculaProfessorDiv.innerHTML = `
            <label for="matricula_professor">Matrícula:</label>
            <input type="text" id="matricula_professor" name="matricula_professor" placeholder="Digite sua matrícula">
            <div id="matricula_professor_erro" class="erro"></div>
        `;
        camposEspecificos.appendChild(matriculaProfessorDiv);

        const lattesDiv = document.createElement('div');
        lattesDiv.className = 'form-group';
        lattesDiv.innerHTML = `
            <label for="lattes">Lattes:</label>
            <input type="url" id="lattes" name="lattes" placeholder="Digite seu currículo Lattes">
            <div id="lattes_erro" class="erro"></div>
        `;
        camposEspecificos.appendChild(lattesDiv);
    }
}


// Função para formatar telefone
function formatarTelefone(input) {
    let valor = input.value;
    valor = valor.replace(/\D/g, '');
    
    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{0,4})$/, '($1) $2');
    } else {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    }
    
    input.value = valor;
}

// Função de validação de formulário
function validarFormulario() {
    let valido = true;

    // Validar campos fixos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome.length < 5) {
        document.getElementById('nome_erro').textContent = 'Nome deve ter pelo menos 5 caracteres.';
        valido = false;
    } else {
        document.getElementById('nome_erro').textContent = '';
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('email_erro').textContent = 'Email inválido.';
        valido = false;
    } else {
        document.getElementById('email_erro').textContent = '';
    }

    // Validar campos específicos conforme tipo de usuário
    const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;
    if (tipoUsuario === 'Aluno') {
        const curso = document.getElementById('curso').value;
        const matriculaAluno = document.getElementById('matricula_aluno').value;

        if (curso.length < 3) {
            document.getElementById('curso_erro').textContent = 'Curso deve ter pelo menos 3 caracteres.';
            valido = false;
        } else {
            document.getElementById('curso_erro').textContent = '';
        }

        if (matriculaAluno.length < 5) {
            document.getElementById('matricula_aluno_erro').textContent = 'Matrícula inválida.';
            valido = false;
        } else {
            document.getElementById('matricula_aluno_erro').textContent = '';
        }
    } else if (tipoUsuario === 'Professor') {
        const area = document.getElementById('area').value;
        const matriculaProfessor = document.getElementById('matricula_professor').value;
        const lattes = document.getElementById('lattes').value;

        if (area.length < 3) {
            document.getElementById('area_erro').textContent = 'Área deve ter pelo menos 3 caracteres.';
            valido = false;
        } else {
            document.getElementById('area_erro').textContent = '';
        }

        if (matriculaProfessor.length < 5) {
            document.getElementById('matricula_professor_erro').textContent = 'Matrícula inválida.';
            valido = false;
        } else {
            document.getElementById('matricula_professor_erro').textContent = '';
        }

        if (lattes.length < 5) {
            document.getElementById('lattes_erro').textContent = 'URL do Lattes inválida.';
            valido = false;
        } else {
            document.getElementById('lattes_erro').textContent = '';
        }
    }

    return valido;
}
