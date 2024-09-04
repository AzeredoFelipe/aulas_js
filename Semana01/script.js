function parImpar() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        if (numero % 2 === 0) {
            alert("O número " + numero + " é par.");
        } else {
            alert("O número " + numero + " é ímpar.");
        }
    }
}

function verificarPrimo() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        if (ehPrimo(numero)) {
            alert("O número " + numero + " é primo.");
        } else {
            alert("O número " + numero + " não é primo.");
        }
    }
}

function ehPrimo(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function calcularFatorial() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + numero + " é " + fatorial + ".");
    }
}

function verificarTipoDado() {
    let dado = prompt("Digite qualquer valor:");
    
    let tipoDado;
    
    // Verifica se é um número
    if (!isNaN(Number(dado)) && dado.trim() !== "") {
        tipoDado = "Número";
    }
    // Verifica se é um caractere especial
    else if (/[^a-zA-Z0-9\s]/.test(dado)) {
        tipoDado = "Caractere Especial";
    }
    // Caso seja uma string normal
    else if (dado.trim() !== "") {
        tipoDado = "String";
    } else {
        tipoDado = "Entrada Vazia";
    }

    alert(`O tipo do dado informado é: ${tipoDado}`);
}
