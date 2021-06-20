//Conta Bancária usando Objetos Literais
let conta = {
    numeroConta: 75264125945,
    saldo: 0,
    titular: "Ruan K.",
    deposito: function (granaDeposito){
        this.saldo += granaDeposito; 
        return `Caro ${this.titular}, seu deposito foi realizado com sucesso.\nSeu saldo atual é de R$ ${this.saldo}`
    },
    saque: function(granaSaque){
       this.saldo - granaSaque;
       if (granaSaque > this.saldo){
           return 'Saldo Insuficiente';
       }else {
           return `Saque realizado com sucesso, seu saldo é de: R$ ${this.saldo - granaSaque}`;
       }
    },
}
console.log(conta.deposito(5000));
console.log(conta.saque(4000));


