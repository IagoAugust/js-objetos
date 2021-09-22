const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12365956201",
    email:"andre@gamil.com",
    fones: ["5591234598","5521988743124"],
    dependetes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependetes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc:"04/01/2014"
})

// console.log(cliente)


// console.log(cliente.dependetes[1].nome)

const filhaMaisNova = cliente.dependetes.filter( dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome)