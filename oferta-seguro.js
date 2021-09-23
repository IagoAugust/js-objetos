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



function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if( propsClientes.includes("dependentes")){
        console.log(`Ofeta de seguro de vida para ${obj.nome}`);
    }else{
        console.log(`${obj.nome} não contem depedentes`)
    }
}

// console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)