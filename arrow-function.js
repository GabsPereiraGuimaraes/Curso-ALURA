function aprensentar(nome) {
    return `meu nome é ${nome}`
}

// Arrouw function
const aprensentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de uma 1 linha de instruçao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somento numero de 1 a 9"
    } else {
        return num1 + num2;
    }
    
    //teste
}

//HOISTING: Arrow function se comporta como expressao

// Operador maior ou igual que, que é (>=)