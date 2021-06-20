// Trabalhando com objetos
let aluno = {
    nome: 'Ruan Araújo',
    numArquivo: 215698,
    nota1: 5,
    nota2: 6,
    media: function() {
        return ((this.nota1 + this.nota2) / 2 >= 5 ? 'Aluno aprovado' : 'Aluno reprovado');  
    }
}
console.log(aluno.media());

