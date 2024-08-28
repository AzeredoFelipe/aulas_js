function formatarData(data) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const diaSemana = diasDaSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

function exibirDataAtual() {
    const dataAtual = new Date();
    const dataFormatada = formatarData(dataAtual);
    document.getElementById("dataAtual").textContent = dataFormatada;
}

exibirDataAtual();

function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById("relogio").textContent = horarioFormatado;

    
    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();

function verificarPalindromo() {
    
    const texto = document.getElementById("entradaTexto").value;//digitação do texto 
    const textoLimpo = texto.replace(/\s+/g, '');//remove espaços
    const ehPalindromo = textoLimpo === textoLimpo.split('').reverse().join('');//verificação

    if (ehPalindromo) {
        alert('O texto é um palíndromo!');
    } else {
        alert('O texto não é um palíndromo.');
    }
}


