function Pessoa(nome, email) {
    this.nome = nome;
    this.email = email;

    this.setNome = function(nome) {
        this.nome = nome;
    };

    this.getNome = function() {
        return this.nome;
    };

    this.setEmail = function(email) {
        this.email = email;
    };

    this.getEmail = function() {
        return this.email;
    };
}

function Aluno(nome, email, curso, matricula) {
    Pessoa.call(this, nome, email);
    this.curso = curso;
    this.matricula = matricula;

    this.setCurso = function(curso) {
        this.curso = curso;
    };

    this.getCurso = function() {
        return this.curso;
    };

    this.setMatricula = function(matricula) {
        this.matricula = matricula;
    };

    this.getMatricula = function() {
        return this.matricula;
    };
}

function Professor(nome, email, area, lattes, matricula) {
    Pessoa.call(this, nome, email);
    this.area = area;
    this.lattes = lattes;
    this.matricula = matricula;

    this.setArea = function(area) {
        this.area = area;
    };

    this.getArea = function() {
        return this.area;
    };

    this.setLattes = function(lattes) {
        this.lattes = lattes;
    };

    this.getLattes = function() {
        return this.lattes;
    };

    this.setMatricula = function(matricula) {
        this.matricula = matricula;
    };

    this.getMatricula = function() {
        return this.matricula;
    };
}

function alternarCampos() {
    var camposDiv = document.getElementById('campos_especificos');
    camposDiv.innerHTML = "";

    var tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;

    if (tipoUsuario === "Aluno") {
        var cursoLabel = document.createElement('label');
        cursoLabel.setAttribute('for', 'curso');
        cursoLabel.textContent = 'Curso:';

        var cursoInput = document.createElement('input');
        cursoInput.setAttribute('type', 'text');
        cursoInput.setAttribute('id', 'curso');
        cursoInput.setAttribute('name', 'curso');
        cursoInput.setAttribute('placeholder', 'Digite seu curso');
        cursoInput.setAttribute('onblur', "validarCampo('curso')");

        var matriculaLabel = document.createElement('label');
        matriculaLabel.setAttribute('for', 'matricula_aluno');
        matriculaLabel.textContent = 'Matrícula (10 dígitos):';

        var matriculaInput = document.createElement('input');
        matriculaInput.setAttribute('type', 'text');
        matriculaInput.setAttribute('id', 'matricula_aluno');
        matriculaInput.setAttribute('name', 'matricula');
        matriculaInput.setAttribute('placeholder', 'Digite sua matrícula');
        matriculaInput.setAttribute('onblur', "validarCampo('matricula_aluno')");

        camposDiv.appendChild(cursoLabel);
        camposDiv.appendChild(cursoInput);
        camposDiv.appendChild(matriculaLabel);
        camposDiv.appendChild(matriculaInput);
    } else if (tipoUsuario === "Professor") {
        var areaLabel = document.createElement('label');
        areaLabel.setAttribute('for', 'area');
        areaLabel.textContent = 'Área:';

        var areaInput = document.createElement('input');
        areaInput.setAttribute('type', 'text');
        areaInput.setAttribute('id', 'area');
        areaInput.setAttribute('name', 'area');
        areaInput.setAttribute('placeholder', 'Digite sua área de atuação');
        areaInput.setAttribute('onblur', "validarCampo('area')");

        var lattesLabel = document.createElement('label');
        lattesLabel.setAttribute('for', 'lattes');
        lattesLabel.textContent = 'Lattes:';

        var lattesInput = document.createElement('input');
        lattesInput.setAttribute('type', 'text');
        lattesInput.setAttribute('id', 'lattes');
        lattesInput.setAttribute('name', 'lattes');
        lattesInput.setAttribute('placeholder', 'Digite seu link Lattes');
        lattesInput.setAttribute('onblur', "validarCampo('lattes')");

        var matriculaLabel = document.createElement('label');
        matriculaLabel.setAttribute('for', 'matricula_professor');
        matriculaLabel.textContent = 'Matrícula (5 dígitos):';

        var matriculaInput = document.createElement('input');
        matriculaInput.setAttribute('type', 'text');
        matriculaInput.setAttribute('id', 'matricula_professor');
        matriculaInput.setAttribute('name', 'matricula');
        matriculaInput.setAttribute('placeholder', 'Digite sua matrícula');
        matriculaInput.setAttribute('onblur', "validarCampo('matricula_professor')");

        camposDiv.appendChild(areaLabel);
        camposDiv.appendChild(areaInput);
        camposDiv.appendChild(lattesLabel);
        camposDiv.appendChild(lattesInput);
        camposDiv.appendChild(matriculaLabel);
        camposDiv.appendChild(matriculaInput);
    }
}

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

function validarFormulario() {
    let valido = true;

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

        if (matriculaAluno.length < 10) {
            document.getElementById('matricula_aluno_erro').textContent = 'Matrícula inválida.';
            valido = false;
        } else {
            document.getElementById('matricula_aluno_erro').textContent = '';
        }

        let aluno = new Aluno(nome, email, curso, matriculaAluno);
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

        let professor = new Professor(nome, email, area, lattes, matriculaProfessor);
    }

    return valido;
}
