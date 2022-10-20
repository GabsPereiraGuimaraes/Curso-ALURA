const cliente = {
    nome: "Gabriel",
    idade:22,
    cpf: "85658769268746",
    email: "gabi@gmail.com",
    fones: ["5591228997, 5599227788"]
}

cliente.dependentes = [{
    nome: "Ana Lucia",
    parentesco: "Namorada",
    dataNasc: "06/11/2001"
}]

cliente.dependentes.push({
    nome: "Deise Mugica",
    parentesco: "Mãe",
    dataNasc: "27/08/1978"
})

// console.log(cliente)

const pessoaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="06/11/2001")

console.log(pessoaMaisNova[0].nome)