const alunos = ['Joao', 'Juliana', 'Caio', 'Ana',]

const mediasDosAlunos = [ 10,7,9,6]
          
//includes  -> booleano
//indexOf -> 3


let listaDeNotasEAlunos = [alunos,mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0] //3
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno nao esta cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))