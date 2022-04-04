function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const matheus = new Cliente('Matheus', '06301101154', 'matheus.veiga@icloud.com', 10000);

console.log(matheus);