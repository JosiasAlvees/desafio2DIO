let resultado = partidas(10,0)
let resultadoPatente = patente()

function partidas(vitoria, derrotas) {
    return vitoria - derrotas
}

function patente(){

    if (resultado <= 10) {
        return "Ferro";
    }else if (resultado >= 11 && resultado <= 20) {
        return "Bronze"
    }else if (resultado >= 21 && resultado <= 50) {
        return "Prata"
    }else if (resultado >= 51 && resultado <= 80) {
        return "Ouro"
    }else if (resultado >= 81 && resultado <= 90) {
        return "Diamante"
    }else if (resultado >= 91 && resultado <= 100) {
        return "Lendário"
    }else if (resultado > 101) {
        return "Imortal"
    }
}

console.log(`O herói tem ${resultado} vitórias e a patente dele é ${resultadoPatente}`)