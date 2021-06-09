// Arrays

let meuArray = ['Star Wars', true, 23];//Arrays suportam todo tipo de dado

let filmesFavoritos = ['Star Wars', 'Kill Bill', 'Alien'];
console.log(filmesFavoritos[0]);

console.log(filmesFavoritos.length);//Imprime a quantidade de elementos de um array;

//Métodos de Arrays

//Método push()
let cores = ['Roxo', 'Laranja', 'Azul'];// Array original
console.log(cores);// Retorna as 3 cores
cores.push('Violeta');// Método push - adiciona a cor violeta;
console.log(cores);// Retorna 4 cores
cores.push('Cinza', 'Ouro');// Adiciona mais 2 cores
console.log(cores);// Retorna 6 cores

//Método pop()
cores = ['Vermelho', 'Verde', 'Rosa'];// Array original
let ultimaCor = cores.pop();// método pop - elimina o último elemento
console.log(cores);//  retorna apenas as 2 primeiras cores
console.log(ultimaCor);// printa o último elemento fora do array;

// método shift();
cores = ['Preto', 'Branco', 'Marrom'];// Array original
let primeiraCor = cores.shift();//método shift - elimina o primeiro elemento
console.log(cores);//retorna as cores sem o primeiro elemento
console.log(primeiraCor);//retorna o primeiro elemento

// método unshift();
cores = ['Roxo', 'Laranja', 'Azul'];//Array original
cores.unshift('Violeta');//Retorna 4
console.log(cores);// violeta vira o primeiro item da lista
cores.unshift('Cinza', 'Ouro');// retorna 6
console.log(cores);// cinza, ouro e violeta virão os priemiros itens da lista

// método join();
let separadosPorVirgula = cores.join();
console.log(separadosPorVirgula);

let separadosPorTraco = cores.join(' - ');
console.log(separadosPorTraco);

// método .lastindeof();
let cor = ['Vermelho', 'Laranja', 'Lilas'];
cor.lastIndexOf('Laranja');
// Ele encontrou o que procurava
// Retorna 1 que é o índice do elemento encontrado;
cor.indexOf('Abacaxi');
// Aqui ele não encontrou o que procurava, retorna -1. 

//método .includes - retorna um valor booleano
console.log(cores.includes('Laranja'));// Aqui ele encontrou o item no array, retorna true
console.log(cores.includes('Abacaxi'));// aqui ele não encontrou esse item, retorna false.


