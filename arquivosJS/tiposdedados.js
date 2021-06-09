// Os tipos de dados permitem ao JavaScript conhecer os recursos e funcionalidades que estarão disponíveis para estes dados.

// * NÚMERICOS / NUMBER *

let num = 22; // Números inteiros
let preco = 150.65; // Número decimais (float)

// * CADEIA DE CARACTERES / STRING *

let nome = 'Ruan Araújo'; // string deve sempre estar entre aspas
let cargo = "Programador"; // Pode ser aspas simples ou duplas.

// * LÓGICOS OU BOOLEANOS / BOOLEAN

let cursoLegal = true;
let falteiNaAula = false;

// Apenas valores binários = True or False.

// * TIPOS DE DADOS ESPECIAIS * 
// Permite ao JavaScript determinar estados especiais que os dados possam assumir

// Nan (Not a Number)
// indica que o valor não pode ser passado como um número. 

let divisaoImperfeita = "35" / 2; //Nan = não é um número

// Null = Valor nulo 
// Indica que o valor está vazio ou desconhecido

let temperatura = null; // Sem dados, há algo errado.

// Undefined = Indica a ausência de um valor. 
// As variáveis tem valor indefinido até que se tenha algum valor.

let saudacao; // undefined, não temos valor.
saudacao = 'Olá Mundo!'; // agora temos um valor.
console.log(saudacao)
