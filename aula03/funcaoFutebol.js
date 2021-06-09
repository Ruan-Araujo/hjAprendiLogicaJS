let nomeJogador = 'Gabigol';
let golsJogador = 0;
let precoDolares = 0;

function fazerGol() {
    console.log(nomeJogador);
    golsJogador++;
    console.log(golsJogador);
    precoDolares += 10000;
    console.log(precoDolares);
    return golsJogador, precoDolares;
}

//fazerGol();
//fazerGol();
//fazerGol();
//fazerGol();

//Função hatTrick;

function hatTrick() {
    fazerGol();
    fazerGol();
    fazerGol();
    let precoAnual = precoDolares * 1.10;
    console.log(precoAnual);
}
hatTrick();
hatTrick();

//Perguntar o que é o erro Unreachable code detected node.js;