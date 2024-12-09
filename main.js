//Lista dos alunos
const Alunos = [
    {nome: 'Paulo', nota: 6},
    {nome: 'Rodrigo', nota: 8},
    {nome: 'Laura', nota: 4},
    {nome: 'João', nota: 3},
    {nome: 'Maria', nota: 7}
]

//Filtra os resultados
const alunosAprovados = function() {
    return Alunos.filter(aluno => aluno.nota >= 6);
}

const alunosReprovados = function() {
    return Alunos.filter(aluno => aluno.nota <= 5);
}


//Exibe os resultados de maiores e menores de 6
const exibeAprovados = function() {
    const alunosA = alunosAprovados();
    const alunosR = alunosReprovados();

    alunosA.forEach(function(aluno) {
        console.log(`${aluno.nome} foi aprovado com nota ${aluno.nota}`)    
    })

    alunosR.forEach(function(aluno) {
        console.log(`${aluno.nome} ficou abaixo de 6 com nota ${aluno.nota}`)    
    })
}

//chamada de função
exibeAprovados();
