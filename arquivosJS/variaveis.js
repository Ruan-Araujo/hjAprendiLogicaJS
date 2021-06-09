//Variáveis
//As variáveis são espaços de memória do computador, onde podemos armazenar diferentes tipos de dados.
//Tipos de variáveis Javascript: var ; let ; const

var nomeSignificativo = 'Ruan K.';

// A palavra reservada var indica ao javascript que vamos declarar uma variável do tipo var
// nomeSignificativo indica o nome que daremos para essa variável
// Só pode ser formado por letras, números e os símbolos $, _
// Não pode iniciar com números
// Não deve ter caractere com acento
// É uma boa prática que os nomes sigam o exemplo "camelCase"
// Javascript entende letras maiúsculas e minúsculas como diferentes.Por isso, é importante seguir um padrão na escrita de variáveis.

var meuApelido = 'JavascriptGenin';

// var = tipo de variável.
// meuApelido = nome de identificação da variável.
// '=' = Atribuição, diz ao javacript que queremos armazenar determinado valor.
// 'Javascriptpadawan' = Valor, dado que queremos armazenar em uma variável.

console.log(meuApelido)

// Na primeira vez que declaramos uma vaiável é necessário utilizar a palavra 'var', depois podemos apenas digitar o nome da variável.

meuApelido = 'JavaScriptChunin';
console.log(meuApelido);

let nomeSignificativo_1 = 'Ruan Araújo';
let contador = 1;

// A pricipal diferença entre var e let, é que let só será acessível no bloco de código em que foi declarada.
// Os blocos de código são delimitados por um par de chaves {}.
// Exemplo:

if (true){
    var nome = 'João';
}
console.log(nome);
//Aqui printou no console sem erro

if (true){
    let name = 'Joãozinho';
    console.log(name); // Nesse caso rodou sem erro.
    // Isso que dizer que o Javascript respeita os blocos de código 
    // A variável name só poderá ser acessada dentro do bloco if
    // Também que dizer que poderemos ter variáveis com o mesmo nome em diferentes partes do no nosso código.

}
//console.log(name) = Nesse caso deu erro no programa.

const nome_2 = 'Ruan K. Araújo Damacena';
const meuEmail = 'ruannzinhocyclonado@email.com'

// const é a palavra reservada
// As variáveis declaradas com const funcionam apenas no bloco de código em que estão declaradas.
// Ao contrário de let, não podemos alterar o valor de uma const após atribuírmos certo valor a ela.

// * Declaração com let ou const *
// Tanto let como const são acessíveis apenas dentro do bloco de código onde são declaradas.
// Por isso, só podemos declará-las uma vez. Se tentarmos declará-las outra vez, o JavaScript retornará um erro.

// As palavras var, let e const são reservadas e só podem ser utilizadas para o propósito que foram criadas. 
console.log('Hello');