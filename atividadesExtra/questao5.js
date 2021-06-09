function precoMaca(quantidade) {
    pelomenos12 = quantidade  >= 12;
    if (pelomenos12 == true){
        valor = 1;
        console.log("A maça custou: " + quantidade * valor + " reais");
    }else {
        valor = 1.30;
        console.log("A maça custou: " + quantidade * valor + " reais");
    }
}
precoMaca(5);

