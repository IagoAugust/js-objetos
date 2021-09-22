const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12365956201",
    email:"andre@gamil.com",
    fones: ["5591234598","5521988743124"]
}

const cliente2 = {
    nome:"Iago",
    idade:36,
    cpf:"36965956201",
    email:"iago@gamil.com",
    fones: ["559691234598","5521988743124"]
}

const listaFone = fone =>{
    console.log(fone)
}

cliente.fones.forEach(listaFone)
console.log()
cliente2.fones.forEach(listaFone)