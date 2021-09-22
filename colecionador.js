const colecionar = {
    nome: "joão do Gibi",
    idade: 41,
    tipocolecao: ["quadrinhos"],
    contato: "Joao@email.com",
    adicionarTipo: function(propriedade, tipo){
        this[propriedade].push(tipo)
    },
    apelido: ["Jo"]
}

// console.log(colecionar.nome)
console.log(colecionar["nome"])
for(i=0; i < 4; i++){
    colecionar.adicionarTipo("tipocolecao","HQ"+i)
}

console.log(colecionar.tipocolecao)

// console.log(colecionar)


for(i=0; i<2; i++){
    colecionar.adicionarTipo("apelido","Apelido"+i)
}

console.log(colecionar.apelido)

colecionar.adicionarTipo("apelido","ColecionarSupremo")

console.log(colecionar.apelido)