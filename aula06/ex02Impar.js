// Aula 06 - 09/06/2021
// Repetições for
// Inicio do contador | limite de repetições | Modificador do contador

exibirTipo(10);

function exibirTipo(limite) {
    for(let i = 0; i<=limite; i++) {
        if(i % 2 != 0)
            console.log(i + ' ÍMPAR');
    }
}