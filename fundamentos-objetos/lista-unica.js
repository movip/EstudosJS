const cliente = [
    {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678901',
    dependentes:[
        {
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '2011-03-20'},
        {
            nome:'Samia Maria',
            parentesco: 'filha',
            dataNasc:'2014-01-04'
        }],
    },
    {
    nome: 'Andre',
    idade: 36,
    cpf: '56767867867',
    dependentes:[
        {
            nome: 'sophia',
            parentesco: 'filha',
            dataNasc: '2020-08-30'
        }],
    }
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)

