// Some números de 1 até N.

function somar(N){
    let soma = 0;

    for(let i = 1; i <= N; i++){
        soma += i;
    }

    return soma;
}

console.log(somar(20));