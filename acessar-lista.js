const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12365956201",
    email:"andre@gamil.com"
}


const chaves = ["nome", "idade", "cpf", "email"]


// console.log(cliente[chaves])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])