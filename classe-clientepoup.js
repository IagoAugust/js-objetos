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

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPouanca(valor){
        if (valor > 0){
            this.saldoPoupanca += valor
        }else{
            return false
        }
    }
}

const andre = new ClientePoupanca("Andre","a@gmail.com","20494353343",100,200)
console.log(andre)

andre.depositar(50)
andre.depositarPouanca(50)

console.log(andre)