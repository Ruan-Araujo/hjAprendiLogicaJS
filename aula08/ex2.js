//Desestruturação
// Pegar elementos de um objeto ou array
//Formato de extração de dados.

//Desestruturação em objeto
let pessoa = {
    nome: 'Ruan',
    altura: 1.7    
}

let {nome,altura} = pessoa;
console.log(nome,altura);

//Desestruturação em array
let listaCompras = ['Pão', 'Leite', 'Açucar'];

let [item1, item2, item3] = listaCompras;
console.log(item1);