function cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this. saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const gabriel = new cliente ("Gabriel", "1234322466", "gabi@gmail.com", 100)

console.log(gabriel)