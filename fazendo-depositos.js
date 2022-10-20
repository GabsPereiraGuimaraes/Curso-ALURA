const cliente = {
    nome: "Gabriel",
    idade:22,
    cpf: "85658769268746",
    email: "gabi@gmail.com",
    fones: ["5591228997, 5599227788"],


    dependentes: [
    {
    nome: "Ana Lucia",
    parentesco: "Namorada",
    dataNasc: "06/11/2001" },
    
    {       
    nome: "Deise Mugica",
    parentesco: "Mãe",
    dataNasc: "27/08/1978" }
],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)


