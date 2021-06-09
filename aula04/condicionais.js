// Validações if

// if, else if, else tradicionais
let dia = 'Domingo';


if(dia == "Domingo") {
    console.log('Vou para a praia!');
} else if(dia == 'Quarta'){
    console.log('Vou pro cinema')
} else {
    console.log('Ficar em casa')
}

let temPao = false;

if(temPao == true) {
    console.log('Não é necessário comprar!')
} else {
    console.log('Precisa comprar pão!')
}

// Mais exemplos de condicionais

let idade = 22;

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// Empréstimo no banco
let pedidoEmprestimo = true;
let rendaMensal = 2100;

if(pedidoEmprestimo && rendaMensal >= 2500) {
    console.log('Empréstimo Liberado');
} else {
    console.log('Empréstimo negado');
}

// Exemplo lavar carro
let dinheiro = 13;

if (dinheiro >= 20) {
    console.log('Vou no Lava rápido')
} else if (dinheiro >=10 && dinheiro < 20) {
    console.log('Vou lavar em casa.')
} else {
    console.log('Melhor nem lavar')
}

// Exemplo if ternário 

idade = 17;

console.log(idade >=18? 'Maior de idade' : 'Menor de idade')

// Ex do banco

console.log(
    //Condição
    pedidoEmprestimo && rendaMensal >= 2100
    //verdadeiro
    ? 'Empréstimo Liberado!'
    //Falso
    : 'Empréstimo negado'
);

// Nessa parte vamos fazer uma comparação entre if tradicional e switch

let estacao = 'Verão';

if (estacao == 'Inverno') {
    console.log('Eitaa, melhor arrumar um casaco');
} else if (estacao == 'Verão') {
    console.log('Que calor hein');
}else if (estacao == 'Primavera') {
    console.log('A melhor estação né');
}else if (estacao == 'Outono') {
    console.log('Não esquece do Guarda-Chuva');
}else {
    console.log('OOps, que estação é essa?')
}
//Essa é a maneira tradicional de declarar condicionais

// Utilizando o switch ficaria assim:

estacao = 'Inferno'

switch(estacao) {
    case 'Verão':
        console.log('Que calor hein');
        break;
    case 'Inverno':
        console.log('Eitaa, melhor arrumar um casaco');
        break;
    case 'Primavera':
        console.log('A melhor estação né');
        break;
    case 'Outono':
         console.log('Não esquece do Guarda-Chuva');
        break;
    default:
        console.log('Ooops, que estação é essa??')
}