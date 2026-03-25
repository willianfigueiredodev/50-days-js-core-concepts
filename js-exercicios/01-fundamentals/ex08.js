// Crie um programa que receba dois números e verifique se ambos são maiores que 10.

function maiorQueDez(number, b){
    if (number > 10 && b > 10){
        return `${number} e ${b} são maiores que 10.`;
    }
    return "Os número não são maiores que dez"
}

console.log(maiorQueDez(10, 10));