// Receba um salário e aplique aumento baseado em faixas salariais de 10%.

function aumento(salario){
    let percentual = 0;

    if (salario <= 1000) percentual = 0.10;
    else if (salario <= 2000) percentual = 0.10;
    else if (salario <= 3000) percentual = 0.10
    
    const aumento = salario * percentual;
    return salario + aumento;
}

console.log(aumento(3000));