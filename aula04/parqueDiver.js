
function podeSubir(altura, acompanhado) {
    if (altura >= 1.4 && altura <= 2) {
        console.log('Acesso autorizado!')
    } else if (altura >= 1.20 && altura < 1.4 && acompanhado == true) {
        console.log('Acesso autorizado somente com acompanhante');
    }else {
        console.log('Acesso negado');
    }
}
podeSubir(1.20, true);
podeSubir(1.20, false);



