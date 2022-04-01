const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678901',
    email: 'email@gmail.com',
    fones: ['+556212345678', '+556223456789'],
    dependentes:[{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '2011-03-20'
    }]

}

cliente.dependentes.push({
    nome:'Samia Maria',
    parentesco: 'filha',
    dataNasc:'2014-01-04'
})


const filhaMaisNova = cliente.dependentes.
filter(dependente => dependente.dataNasc >= '2012-01-01')

console.log('A filha mais nova é', filhaMaisNova[0].nome)


//console.log(cliente)