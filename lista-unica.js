const cliente = [
    {
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
    ],},
{
    nome: "Masoel",
    cpf: "2348323554567",
    dependentes: [{
        nome: "Andrieli",
        parentesco: "Filha",
        dataNasc: "26/09/2003"
    }]
    
}]

const listaDependentes =  [...cliente[0].dependentes,...cliente[1].dependentes]

console.table(listaDependentes)
console.log(listaDependentes)