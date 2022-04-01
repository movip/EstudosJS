const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678901',
    email: 'email@gmail.com',
    fones: ['+556212345678', '+556223456789'],
    dependentes:[
        {
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '2011-03-20'},
        {
            nome:'Samia Maria',
            parentesco: 'filha',
            dataNasc:'2014-01-04'
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor;
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes'))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente))
oferecerSeguro(cliente)