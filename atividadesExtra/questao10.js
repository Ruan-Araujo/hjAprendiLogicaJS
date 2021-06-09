function postoCombustivel(litros, tipo) {
    if (tipo == 'A-álcool'){
        preco = 5.20;
        precoFinal = litros * preco;
        console.log(`Total: ${precoFinal}`);
    }else if(tipo == 'G-gasolina'){
        preco = 4.20;
        precoFinal = litros * preco;
        console.log(`Total: ${precoFinal}`);
    }
}
postoCombustivel(5, 'G-gasolina');