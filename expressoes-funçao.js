//declaraçao de funçao

function minhaFuncao(param) {
    //bloco de codigo
}

// minhaFuncao("param")

//expressao de funçao

//  const soma = function(num1, num2) {return num1 + num2}
//  console.log(soma(1, 1))

//diferença principal: HOISTING
//funçoes e var sao "listadas" no topo do arquivo

console.log(aprensentar())

function aprensentar() {
    return "Ola";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}

