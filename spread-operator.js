// const fichaGuerreiro ={
//     nome: "Aragorn",
//     classe: "guerreiro"
// }

// const equipoGuerreio = {
//     espada: "Andúrial",
//     capa: "capa élfica +2"
// }

// let guerreiro = {fichaGuerreiro,equipoGuerreio}
// console.log(guerreiro);

// console.log();

// guerreiro = {...fichaGuerreiro,...equipoGuerreio}
// console.log(guerreiro);


// const mago ={
//     nome: "Gandalf",
//     classe: "mago"
// }

// const guerreiro = {
//     nome: "Aragorn",
//     classe: "Guerreiro"
// }

// const ranger = {
//     nome: "Legolas",
//     classe: "ranger"
// }

// const personagens = {...mago,...guerreiro,...ranger}    //o spread Operator não é legal usar com chaves iguais, pois rescreve o valor e permanece apenas o ultimo.
// console.log(personagens);


const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    }
   ]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)