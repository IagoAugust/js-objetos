const cliente = {
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
    }],
    saldo:100, 
    depositar: function (valor){
        this.saldo += valor
    }
}

let relatorio= "";

for ( let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
    relatorio += `${info} ==> ${cliente[info]} \n`
    }
}

console.log(relatorio)