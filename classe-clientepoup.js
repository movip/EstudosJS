class Cliente{
  constructor(nome, email, cpf, saldo){
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.saldo = saldo;
  }
  depositar(valor){
      this.saldo += valor;
  }
  exibirSaldo(){
      console.log(`O saldo do cliente ${this.nome} é ${this.saldo}`);
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome, email, cpf, saldo, saldoPoupanca){
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor){
    this.saldoPoupanca += valor;
  }
}

const matheus = new ClientePoupanca("Matheus", "@icloud.com", "06301101154", 1000, 5000)
console.log(matheus)

matheus.depositar(500)
matheus.depositarPoupanca(1000)

console.log(matheus)

