// loop for

//estrutura básica
//for (inicio; condicao; modificador){
    //código a ser executado em cada repettição;
//}

//Neste exemplo, vamos contar de 1 até 5 e, em cada repetição, vamos imprimir a mensagem: 'Volta número: x. O x vai ser substituido pelo numero da contagem;

//for (i=1000; i>=100; i-=100) {
    //console.log(i);
//};

// let volta = 1 é o vaalor inicial do nosso contador (inicio)
// volta <= 5 é a condição do nosso loop
// volta ++ é o modificador, nesse caso incrementa + 1 em cada repetição até atingir a condição estabelecida. 
let resta = 0;
for (i=5; i>=3; i--){
    resta = i  - 1;
    console.log(i+'patinhos foram passear, além das montanhas para brincar, a mamãe gritou: "qua, qua, qua", mas só' + resta + ' patinhosvoltaram de lá');
}
