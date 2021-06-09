function consultarNumero(num){
    if (num > 0){
        console.log('Número positivo');
    }else if (num < 0){
        console.log('Número negativo');
    }else {
        console.log('É zero');
    }
}
consultarNumero(-0.5);