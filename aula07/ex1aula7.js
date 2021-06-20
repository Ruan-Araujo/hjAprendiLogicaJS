//const somar = numero => console.log('Estou em um arrow function');

//somar(1)

const adicao = (num, nume) => console.log(num + nume);

adicao(2,2);

const vezes = (numeroA, numeroB) => {
    console.log('Recebi os números ' + numeroA, numeroB + ' e quero multiplicar' );
    return numeroA * numeroB
}
console.log(vezes(5,5));

// Callbacks

const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculador = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculador(10,20,somar));

//Closures

function pai () {
    function filho () {
        //fazer passo 1
        //fazer passo 2
        // fazer passo 3
        //etc
    }
return filho();
}

function saudacao(nome){
    let menssagem = 'Olá, seja bem vindo';
    
    function juntarNome(){
        return menssagem + ' ' + nome;
    }

    return juntarNome();
}
console.log(saudacao('Ruan'));

//Recursividade

function decrementar(numero){
    console.log(numero);
    
    numero--

    if(numero > 0){
        decrementar(numero);
    }
}
decrementar(3);

