const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12365956201",
    email:"andre@gamil.com",
    apelido:"Ann"
}

console.log(cliente);

cliente.fone = "99999999"

console.log(cliente);

cliente.fone ="984843938"

console.log(cliente);

delete cliente["apelido"]

console.log(cliente);