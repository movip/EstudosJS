const cliente = {
    nome:'André',
    idade:36,
    cpf:'12345678901',
    email:"email@gmail.com",
    fones:['+5562912345678', '+5562923456789']
}

cliente.dependentes ={
    nome:'Sara',
    parentesco:'filha',
    dataNasc:"2011-03-20"
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)