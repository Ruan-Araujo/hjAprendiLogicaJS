// Desafio Olá mundo em loop
for (let ola = 1 ; ola <= 5; ola ++ ){
    console.log('Olá Mundo!');
}

//Desafio contando números ímpares.
for (let numero = 0 ; numero <= 10; numero++ ) {
   let numeroPar = numero % 2 == 0;
   if (numeroPar == false) {
       console.log(numero);
   }
}

//Desafio Tabuada
for (let num = 1; num <= 10; num++) {
    console.log(`Tabuada do ${num}`);
    for(let nume = 1; nume <= 10; nume++){
        console.log(`${num} x ${nume} = ` + num * nume);
    }
}
