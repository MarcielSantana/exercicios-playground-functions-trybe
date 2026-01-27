// 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

function footballPoints(wins, ties){
    let resultado = (wins * 3) + ties
    return resultado
}

console.log(footballPoints(1, 2));
