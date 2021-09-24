// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Codigo",
//     paginas: 185,
//     anuciar: function(){
//         console.log(`A alura indica o livro ${this.nome}`)
//     }
// }

// Livro.anuciar()



// const Livro = function (nome,editora,paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function () {
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQl","Casa do código","134")
// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())


//////////////////////////////

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS","Casa do código", 195)
// NodeJS.anunciarTitulo()
// NodeJS.descreverTitulo()

//açúcar sintático
//hoisted

class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const logicaDeProgramacao = new LivroColecao("Lógica de Progamação","Comece a Programar")
logicaDeProgramacao.descreverColecao()