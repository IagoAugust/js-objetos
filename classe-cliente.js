class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar (valor){
        if( valor > 0){
            this.saldo += valor
        }else{
            return false
        }
    }

    exibirSaldo (){
        console.log(this.saldo)
    }

}



const andre = new Cliente("andre", "andre@gamil.com","2346543535",100)
console.log(andre)
andre.depositar(20)
andre.exibirSaldo()
