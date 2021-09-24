const numeroPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numeroPares,...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

const pessoa = {
    nome: "ju",
    idade: 25,
    peso: "68kg"
}

const pessoaComTelefone = {...pessoa, telefone: 12321412}

const { idade } = pessoa

function imprimeDados({nome, idade}) {
    console.log(nome, idade)
}

imprimeDados(pessoa)