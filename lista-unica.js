const clientes = [
    {
        nome:"Andre",
        idade:36,
        cpf:"12365956201",
        email:"andre@gamil.com",
        fones: ["5591234598","5521988743124"],
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },{
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc:"04/01/2014"
        }]
     
    },{
        nome: "Juliana",
        cpf: "454698231565",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes);