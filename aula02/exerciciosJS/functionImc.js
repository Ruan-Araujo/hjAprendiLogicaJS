//let nomeCliente = function cliente(nome = 'José', sobrenome = 'da Silva') {
   // return nome + ' ' + sobrenome;
//}
//console.log(nomeCliente());

//let pesoKG = function peso(num1) {
    //let pesoCliente = num1;
    //return `O cliente pesa ${pesoCliente}`;
    //console.log(pesoCliente);
//}
//pesoKG(83);

//let altura = function metros(num2) {
    //let alturaCliente = num2;
    //return `Tem ${alturaCliente} metros`;
    //console.log(alturaCliente);
//} 
//altura(1.7);

function imc1(nome = 'José da Silva', idade = 27, peso = 83.5, altura = 1.7) {
     return `${nome} tem ${idade} anos e seu imc é de: ` + peso / altura ** 2;
}
console.log(imc1());

function imc2(nome = 'Carlos de Souza', idade = 28, peso = 80.1, altura = 1.76) {
    return `${nome} tem ${idade} anos e seu imc é de: ` + peso / altura ** 2;
}
console.log(imc2());

function imc3(nome = 'Aline Ferreira', idade = 33, peso = 63.7, altura = 1.53) {
    return `${nome} tem ${idade} anos e seu imc é de: ` + peso / altura ** 2;
}
console.log(imc3());

function imc4(nome = 'Ana Paula', idade = 26, peso = 55.0, altura = 1.62) {
    return `${nome} tem ${idade} anos e seu imc é de: ` + peso / altura ** 2;
}
console.log(imc4());

//function calcularIndiceDeMassaCorporal(peso = 70,altura = 1.7) {
    //return peso / altura ** 2;
//}
//console.log(calcularIndiceDeMassaCorporal());

// Aqui eu aprendi a como atribuir valor aos parâmetros, tem que usar os parenteses;
function imc(peso,altura){
    return (peso/(altura ** 2));
}
console.log(imc(70, 1.7));



