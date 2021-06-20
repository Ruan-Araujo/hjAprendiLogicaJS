//Exemplo 1
//setTimeout(function(){
   // console.log('Olá Mundo')
//}, 1000);

//Exemplo 2
//let minhaCallBack = () => console.log('Olá Mundo');
//setTimeout(minhaCallBack, 1000);

//Exemplo 3
//function nomeCompleto (nome, sobrenome) {
    //return nome + ' ' + sobrenome;
//};

//function bomDia(nome, sobrenome, callback) {
    //return 'Olá, ' + callback(nome,sobrenome);
//};

//console.log(bomDia('Ruan', 'Araújo', nomeCompleto));

//MicroDesafio

//Tentativa 1
function acaoCarro(acao) {
    return acao;
} function andar(callback){
    return `O carro está ${callback}`;
} function parado(callback){
    return `O carro ${callback}`;
}
console.log(acaoCarro(andar('andando')));
console.log(acaoCarro(parado('parou')));

// Tentativa 2
function acaoCarro(acao) {
    return acao;
} function andar(){
    return 'O carro está andando';
} function parado(){
    return 'O carro parou';
}
console.log(acaoCarro(andar()));
console.log(acaoCarro(parado()));

function myDisplayer(some) {
    console.log(some);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);


