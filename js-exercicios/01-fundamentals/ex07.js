// Crie um programa que receba um número e verifique se é par ou ímpar.

function parOuImpar (number){
    if (number % 2 === 0){
        return `${number} par`;
    }
    return `${number} é ímpar`;
}

console.log(parOuImpar(5));
