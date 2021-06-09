
function estoque(max, min, atual) {
    media = (max + min) / 2;
    console.log(media);
    console.log(atual >= media? 'Não efetuar a compra' : 'Efetuar a compra');
}
estoque(200,50,125);

