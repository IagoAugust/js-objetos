function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
            this.saldo += valor
    }
}
const joao = new cliente("João","515156156","idawdawdadw@gmail.com",200)
console.log(joao)