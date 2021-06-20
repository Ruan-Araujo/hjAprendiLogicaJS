//objetos e função construtora
function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio.join();
    Restaurante.entrada = () => {
        console.log(`Seja bem vindo(a) ao restaurante ${nome}\nEste é nosso cardápio:\n${cardapio}`);
    };
    Restaurante.entrada();
};

Restaurante('Azimute', ['Tacacá', ' Vatapá', ' Gengibirra', ' Camarão no Bafo', ' Açaí', ' Peixe assado',]);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

//let restaurante = (...cardapio) => console.log(cardapio);
//restaurante('Camarão no Bafo', 'Açaí', 'Peixe assado')

let restaurante = (nome, ...cardapio) => console.log(`Bem vindo(a) ao restaurante ${nome}\nEsse é nosso cardápio:\n${cardapio}`);
restaurante('Azimute', 'Pizza', ' Lasanha', ' X-tudo');

