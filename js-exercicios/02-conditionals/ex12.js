// Receba duas notas, calcule a média e classifique o resultado.

const notaAluno = {
    calcularMedia (numero1, numero2){
        return (numero1 + numero2) / 2
    },
    classificarMedia (media){
        if (media >= 6){
            return `${media} está acima da média. Aprovado,`
        }
        return `${media} está abaixo da média. Reprovado,`
    }
}

const media = notaAluno.calcularMedia(10, 6);
console.log(notaAluno.classificarMedia(media));