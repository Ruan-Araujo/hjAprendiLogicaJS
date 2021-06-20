//Spread Operator

let frutas = ['banana', 'pera', 'maça'];
let frutasDois = ['Cupuaçu', 'Bacuri', 'Tapereba'];

//Spreading
let todasFrutas = () => {
   return [...frutas, ...frutasDois]
}
console.log(todasFrutas());


//Em objetos literais:

let curso = {
    curso: 'Fullstack',
    turno: 'Integral',
    EAD: true
};

let alunoUm = {
    nome: 'Ruan',
    email: 'taligado@hotmail.com',
    ...curso
};

let alunoDois = {
    nome: 'Ojuara',
    email: 'email@hotmail.com',
    ...curso
};

// Em funções

let letras = (...params) => console.log(params);
letras('a', 'b', 'c');