//functions 

//Estrutura básica
//function somar(a, b) {
    //return a + b;
//}

//Declarando a função:
function fazerSorvete() {
    return 'Sorvete de chocolate';
}

//Invocando a função:
 fazerSorvete();
 console.log(fazerSorvete())
 
//Aqui tentei não deu certo para retornar o nome completo na função
 //function bemVindo(nome, sobrenome) {
    //return 'Olá, ' + nome + ' ' + sobrenome;
//}
//bemVindo('Ruan', 'Araújo');// retornou 'Olá undefined undefined
//console.log(bemVindo())

// Atribuindo valores por padrão 
function bemVindo(nome = 'Ruan', sobrenome = 'Araújo') {
    return 'Olá, ' + nome + ' ' + sobrenome;
}
bemVindo();
console.log(bemVindo())
//Dessa forma funcionou e retornou o valor atribuído.

//Armazenando os resultados
function fazerPizza(quantidade){ //Defini o nome e o parâmetro da minha função.
    return '🍕'.repeat(quantidade);//Aqui defini o corpo e oq a minha função faz
}
let minhasPizzas = fazerPizza(6);//Aqui eu declarei a variável e invoquei a função.
console.log(minhasPizzas);

function lofi() {
    let gosto = true;
    //todo códido que escrevemos aqui dentro dessa função, tem scope local. 
}

//não poderemos acessar este scope de fora, ou seja, a variável gosto só pode ser acessada dentro da função.

function ola() {
    let welcome = 'Olá, como vai?';
    return welcome;
    //Definimos a variável welcome dentro da função ola(), portanto seu scope é local.
    //Somente dentro desta função podemos acessá-la.
}
//console.log(welcome)
//Ao querer fazer usso da variável welcome fora da função, o JavaScript não 
// a encontrará e devolvera o seguinte erro: Uncaugth ReferenceError: welcome is not defined

let deBoa = 'Tranquilidade na quebrada?';
//Declaramos a variável deBoa fora de nossa função, seu scope é global.
//Podemos fazer uso dela em qualquer lugar do código. 

function suave() {
    return deBoa;
//Dentro da função declaramos a variável deBoa, seu alcance é global.
//Portanto, o JS sabe a qual variável estou me referindo e executa a função com êxito.
}
console.log(deBoa);

function dobro(umNumero){
    return umNumero * 2;
}
dobro(6);
console.log(dobro());

//Função Declarada;
 function darOi(){
    console.log('Olá tudo bem?');
 }
 darOi();
 darOi();
 darOi();
 
//Função expressa
//let somar = function(numA, numB) {
   // console.log(numA + numB);
//}
//somar(1, 2);

let somar = function(numA, numB) {
    //console.log(numA + numB);
    return numA + numB;
}
//somar(10, 20);

//let resultado = somar(10, 5);
//console.log(resultado);
//console.log(somar(1, 2));

//escopo local
function multiplicar(numA, numB){
    let resultado = numA * numB;
    console.log(resultado);
}
multiplicar(2, 2);

//escopo global
let resultado2 = 0;
console.log('Resultado fora da função =', resultado2);
function multiplica2(numA, numB) {
    resultado2 = numA * numB;
    console.log('Resultado dentro da função =', resultado2);
}
multiplica2(2, 2);