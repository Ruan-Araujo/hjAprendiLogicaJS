function contaCliente(saldo,credito,debito) {
    saldoAtual = saldo - debito + credito;
    console.log(saldoAtual);
    console.log(saldoAtual >= 0 ? 'Saldo Positivo' : 'Saldo Negativo');
}
contaCliente(100,150,200);