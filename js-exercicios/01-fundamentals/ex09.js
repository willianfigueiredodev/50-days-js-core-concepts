// Crie um programa que receba um número e verifique se está entre 20 e 100.

function entreVinteECem (number){
    if (number < 100 && number > 20){
        return `${number} está entre 20 e 100.`;
    }
    return "Não está entre 20 e 100.";
}   

console.log(entreVinteECem(100));