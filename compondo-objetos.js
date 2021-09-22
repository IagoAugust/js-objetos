const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12365956201",
    email:"andre@gamil.com",
    fones: ["5591234598","5521988743124"]
}


// criando um obj dentro de outro
cliente.dependetes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

//Mudando alterando valor
cliente.dependetes.nome = "Sara Silva";

console.log(cliente);


//Criando ouro obj dentro de outro
cliente.endereco = {
    rua: "Professor Paula almeida",
    numeroDaCasa: "879",
    Bairro: "Zona leste",
    Cidade: "São Paulo"
}

console.log(cliente)

//Alterando valor
cliente.endereco.rua = "Prof. Almeida"

console.log(cliente)