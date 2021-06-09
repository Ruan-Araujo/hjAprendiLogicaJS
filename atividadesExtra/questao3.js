function dataNascimento(num){
    Idadevotar = 2021 - num;
    console.log(Idadevotar >= 16? 'A pessoa pode votar' : 'A pessoa não pode votar');
}
dataNascimento(1998);