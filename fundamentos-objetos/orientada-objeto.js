class Pessoa {
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }
}

exibirNomeCompleto();
{
    console.log( ` ${this.nome} ${this.sobrenome}`)
}


class Programador extends Pessoa{
    constructor(nome,sobrenome,cpf,email,linguagem){
        super(nome,sobrenome,cpf,email) // Esta puxando os objetos de Pessoa
        this.linguagem = linguagem;
    }
}