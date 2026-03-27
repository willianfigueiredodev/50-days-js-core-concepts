// Receba uma nota (0–10) e retorne "aprovado" ou "reprovado".

function reprovadoOuAprovado (numero){
    if (numero <= 5){
        return `${numero} está abaixo da média. Reprovado. `;
    }
    return `${numero} está na média. Aprovado.`;
}

console.log(reprovadoOuAprovado(5));