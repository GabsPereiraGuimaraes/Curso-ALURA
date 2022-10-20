const cliente = {
    nome: "Gabriel",
    idade:22,
    cpf: "85658769268746",
    email: "gabi@gmail.com",
    fones: ["5591228997, 5599227788"]
}

cliente.dependentes = {
    nome: "Ana Lucia",
    parentesco: "Namorada",
    dataNasc: "06/11/2001"
}

console.log(cliente)

cliente.dependentes.nome = "Ana Lucia Gomes"

console.log(cliente)

