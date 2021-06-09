//Arividade lista de compras

//Usando método .join
let listaCompras = ['Arroz', 'Feijão', 'Batata'];
//let resultadoJoin = listaCompras.join();
//let resultadoTraco = listaCompras.join(' - ');
//console.log(resultadoJoin);
//console.log(resultadoTraco);
//console.log('Com o método Join é possível separar o conteúdo de um array usando vírgulas ou traços');

//Usando o método .pop
//let ultimoItem = listaCompras.pop();
//console.log('Com o método pop é possivel retornar apenas os dois primeiros itens de um array e destacar o último item para retornar sozinho');
//console.log(listaCompras);
//console.log(ultimoItem);

//Usando o método .push
listaCompras.push('Frango');
console.log('Com o método push é possível adicionar um novo item ao array');
console.log(listaCompras);

//Usando o método .shift
let primeiroItem = listaCompras.shift();
console.log('Com o método shift é possível isolar o primeiro item de um arrray');
console.log(listaCompras);
console.log(primeiroItem);

//Usando o métoddp .unshift
listaCompras.unshift('Arroz');
listaCompras.unshift('Carne', 'Cerveja');
console.log(listaCompras);
console.log('Com o método unshift é possível adicionar novos itens ao começo do array');
