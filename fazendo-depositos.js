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
    },{
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc:"04/01/2014"
    }],
    saldo:100, 
    depositar: function (valor){
        this.saldo += valor
    },
    sacar: function (valor){
        if (valor <= this.saldo){
            this.saldo -= valor
            return valor
        }else{
            return false
        }
    }

}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

cliente.sacar(131)
console.log(cliente.saldo)