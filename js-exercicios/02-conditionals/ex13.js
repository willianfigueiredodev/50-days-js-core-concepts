// Receba um número e verifique se é múltiplo de 3 e de 5.

function verificarMultiplo (numero){
    const multiploDeTres = numero % 3 === 0;
    const multiploDeCinco = numero % 5 === 0;

    if (multiploDeTres && multiploDeCinco){
        return `${numero} é multiplo de 3 e 5`;
    }

    if (multiploDeTres){
        return `${numero} é multiplo de 3`;
    }

    if  (multiploDeCinco){
        return `${numero} é multiplo de 5`;
    }
    return `${numero} não é multiplo de nenhum.`
}

console.log(verificarMultiplo(30));