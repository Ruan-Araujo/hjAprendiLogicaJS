//Aula 08 - 16/06/2021

//Preço dos equipamentos: 280, 330, 1500
// Margem de lucro 50%
// Lista de valores de custos do produto
// Lista de valores de venda
// Orçamento - 0,00009 bitcoins

let precoCusto = [280, 330, 1500, 3300, 150];
let margemLucro = 1.50;

function custoInicial (precoCusto) {
    console.log('\n***********Relatório de custo************');
    for (let i = 0; i < precoCusto.length; i++){
        console.log(`Posição array: ${i} - ${precoCusto[i]}`);
    }
}
custoInicial(precoCusto);

function precoVenda (precoCusto) {
    console.log('\n**********Relatório de Venda************');
    for (let i = 0; i < precoCusto.length; i++){
        let resultado = precoCusto[i] * margemLucro;
        console.log(`Posição array: ${i} - ${resultado}`);
    }
}
precoVenda(precoCusto);





//function precoVenda (precoCusto) {
   // return precoCusto * margemLucro;
//}
//console.log(precoVenda(precoCusto[0]));

