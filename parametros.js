//parametros de funçao

                //2     //2
// function soma(numero1, numero2) {
//     return numero1 + numero2;



// console.log (soma(2, 2))
// console.log (soma(700, 300))
// console.log (soma(-1000, 500))

// parametros x argumentos   

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Gabriel", 22))

function soma(numero1, numero2) {
    return numero1 + numero2;
}


function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

                            //9         //6
console.log(multiplica(soma(4, 5), soma(3, 3)))
