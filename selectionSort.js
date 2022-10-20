const livros = require('./listaLivros');
const menorValor = require('./menorValor');


for (let atual = 0; atual < livros.length; atual++) {
let menor = menorValor(livros, atual)

let livrosAtual = livros[atual];
console.log('posiçao atual', atual)
console.log('livro atual', livros[atual])
let livroMenorPreco = livros[menor];
console.log('livro menor preço', livros[menor])

livros[atual] = livroMenorPreco
livros[menor] = livrosAtual

} 

console.log(livros)