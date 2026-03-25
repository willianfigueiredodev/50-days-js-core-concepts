// Crie um programa que receba uma idade e classifique: criança, adolescente, adulto ou idoso.

function idadeClassificacao (idade){
    if (idade < 12){
        return `${idade} ainda é criança`;
    }
    else if (idade < 18) {
        return `${idade} ainda é adolescente`;
    }
    else if (idade < 60){
        return `${idade} ainda é adulto`;
    }
    else {
        return `${idade} é idoso`;
    }
}

console.log(idadeClassificacao(11));